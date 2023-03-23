// The javaScript part of the application.

let button = document.querySelector("#btn");
let EnterText = document.querySelector("#text-area");
let outputDiv = document.querySelector("#log");

button.addEventListener('click', function onClickofButton (){
    outputDiv.innerHTML = "ababab "+ EnterText.value;
    
})