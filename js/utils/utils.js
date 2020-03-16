/** 
* @author Adriel Marchena Santos <adriel_contato@hotmail.com> 
*/ 

//Arquivo contendo funções mais genericas

function randomizer(min,max){
    return Math.floor(min + (Math.random() * max));
}

//Roubado da Web para criar elementos
function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    //Ta funcionando sem esse apeendChild aqui, qualquer coisa revisitar isso daqui
    p.appendChild(newElement);
    return newElement;
}

//Removida da Web para remover elementos
function removeElement(elementId) {
    // Removes an element from the document
    let element = document.getElementById(elementId);
    if(element.parentNode != null)
    element.parentNode.removeChild(element);
}