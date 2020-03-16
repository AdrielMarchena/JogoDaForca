/** 
* @author Adriel Marchena Santos <adriel_contato@hotmail.com> 
*/ 

//Valores globais gerais do jogo
//A cada randomização de palavra,
//esta variael global é atualizada com a palavra nova
let actualGlobalWord = "StandBy";
let hint = "StandBy";
//Numero de tentativas, é definida no main
let playing = false;
let selectedCategory = localStorage.getItem("category");
let debugMode = false;
let globalType;

function setBox(){
    if(selectedCategory == undefined){
        localStorage.setItem("category","random");
        selectedCategory = localStorage.getItem("category");
    }
}

function getWord(type){
    let number;
    let objCategory;
    
    
    if(type == "random"){
        let array = Object.keys(library);
        number = randomizer(0,array.length-1);

        objCategory = library[array[number]];
        globalType = array[number];

    }
    else{
        objCategory = library[type];
        if(objCategory == null){
            console.log("Esta categoria nao existe");
            setBox();
        }  
    }
    
    //console.log(library[objCategory].length);
    number = randomizer(0,objCategory.length);
    //console.log(objCategory.length);
     
    if(debugMode){
        console.log(objCategory[number].name);
    }
    
    actualGlobalWord = objCategory[number].name;
    hint = objCategory[number].hint;
    
}

function run(){
    playing = true;
    setBox();
    main(); 
    
}

function main(){ 
    //setBox();
    if(debugMode)    
        console.log(selectedCategory);
    
    
    if(playing){
        //pega uma palavra da categoria
        //Caso queira uma categoria espefica passe
        //o primeiro parametro como false e o segundo o nome da categoria
        //Se quiser aleatorio apenas passe true e um array vazio
        getWord(selectedCategory);
        
       
        //remove espaços da palavra
        actualGlobalWord = actualGlobalWord.replace(" ","");

        //chama os renders
        render();
        document.getElementById("category").value = selectedCategory;  
    }

}

function giveAHint(){

    if(playing){
        document.getElementById("hint-label").innerHTML = hint;
        document.getElementById("button-hint").setAttribute("disabled","true");
    }
}

function render(){
    //renderiza linhas   
    renderLines(actualGlobalWord.length);

    //renderiza os botoes
    renderButton();
   
    //cria a tag img
    createImage();
    
    //Renderiza a combobox
    renderSelections();
}