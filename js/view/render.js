/** 
* @author Adriel Marchena Santos <adriel_contato@hotmail.com> 
*/ 


function renderButton(){
    let inp;
    for(let i=0;i<letters.length;i++){

        inp = addElement('letters','button','button-'+i, letters[i]);
        inp.setAttribute('value',letters[i]);
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
    let inp;
    inp = addElement("words","img","image","");
    document.getElementById("letters").insertAdjacentElement("afterend",inp);
}


function renderImages(){
    
    try{
       document.getElementById("image").src = "./img/image-" + errors + ".png"; 
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
}

function renderSelections(){
    let array = Object.keys(library);
    let elementOption; 
    let elementSelection = addElement("selection","select","category"," ");
    elementSelection.setAttribute("onchange","restart()");

    //Cria as opções das categorias do Objeto library
    for(let i=0;i<array.length-1;i++){
        elementOption = addElement("category","option","option-"+i,array[i]);
        elementOption.setAttribute('value',array[i]);

        document.getElementById('category').insertAdjacentElement("afterbegin",elementOption);

    }
    //Cria a opção random
        elementOption = addElement("category","option","optionRandom","Random");
        elementOption.setAttribute('value',"random");

        document.getElementById('category').insertAdjacentElement("afterbegin",elementOption);


}
