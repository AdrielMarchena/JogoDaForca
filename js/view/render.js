/** 
* @author Adriel Marchena Santos <adriel_contato@hotmail.com> 
*/ 

let letters= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function renderButton(){
    let inp;
    for(let i=0;i<letters.length;i++){

        inp = addElement('letters','button','button-'+i, letters[i]);
        inp.setAttribute('value',letters[i]);
        //inp.setAttribute('type',"button");
        inp.setAttribute('onclick','clickLetters(this.id,this.value)');
        document.getElementById('button-restart').insertAdjacentElement("beforebegin",inp);
    
    }
}

function renderWordsVisual(indexOfLetter,letter){
    let inp;
    let textForId = "line"+indexOfLetter;
        inp = addElement('lines','p','letter-'+letter, letter);

        document.getElementById(textForId).insertAdjacentElement("beforebegin",inp);
}


function createImage(){
    //<a href="https://imgbb.com/"><img src="https://i.ibb.co/48WbcP5/image-1.png" alt="image-1" border="0" /></a>
    
    let inp;
    inp = addElement("words","img","image","");
    inp.setAttribute('alt','image-'+errors);
    inp.setAttribute('border','0');
    document.getElementById("letters").insertAdjacentElement("afterend",inp);
}


function renderImages(){

    

    try{
       document.getElementById("image").src = links[errors]; 
    }
    catch(e){
        console.log("ESTA IMAGEM NÃO EXISTE, A VARIAVEL 'errors' SERA ZERADA , ERRO: " + e);
        errors = 0;
    }
}

function renderLines(quant){
    let inp;
    for(let i=0;i<quant;i++){
        inp = addElement('lines','p','line'+i, "_");
        document.getElementById('lines').insertAdjacentElement("beforeend",inp);
    }
    //preWord();
}

function renderSelections(){
    let array = Object.keys(library);
    let elementOption; 
    let elementSelection = addElement("selection","select","category"," ");
    elementSelection.setAttribute("onchange","restart()");
    //console.log(array[1]);
    //Cria as opções das categorias do Objeto library
    for(let i=0;i<array.length-1;i++){
        elementOption = addElement("category","option","option-"+i,array[i]);
        elementOption.setAttribute('value',array[i]);

        //console.log(elementOption);
        document.getElementById('category').insertAdjacentElement("afterbegin",elementOption);

    }
    //Cria a opção random
        elementOption = addElement("category","option","optionRandom","Random");
        elementOption.setAttribute('value',"random");

        //console.log(elementOption);
        document.getElementById('category').insertAdjacentElement("afterbegin",elementOption);


    //console.log(array);
}
