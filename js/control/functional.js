/** 
* @author Adriel Marchena Santos <adriel_contato@hotmail.com> 
*/ 

let rightLetters = 0;
let errors = 0;

function clickLetters(id,value){
    if(playing){
        
        letterIsRight(value); 
        removeElement(id);

        //Verifica se o usuario ganhou
        if(rightLetters == actualGlobalWord.length){
            playing = false;
            document.getElementById("message-result").innerHTML = "WIN";
            errors = 0;
        }
    }
    //Verifica se o usuario Perdeu
    if(errors == 7){
        playing = false;
        errors = 0;
        document.getElementById("message-result").innerHTML = "PERDESTE";
    }

    if(errors > 7 || errors < 0){
        alert("A VARIAVEL 'errors' POSSUI VALOR INESPERADO UM RESTART AUTOMATICO SERA DADO!");
        restart();
    }
}

function letterIsRight(value){
    let indexOfletters = false;
    
    for(let i=0;i<actualGlobalWord.length;i++){
        if (value === actualGlobalWord[i].toLowerCase()){
            //Letra certa
            indexOfletters = true;
            rightLetters++;  

            renderWordsVisual(i,value);
            removeElement("line"+i);
            
        }
    }
    if(!indexOfletters){
        errors++;
        renderImages();
    }
}

function restart(){
    localStorage.setItem("category",document.getElementById("category").value);
    location.reload();
}
