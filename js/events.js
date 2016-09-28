var button = document.getElementByID('button1');

var myFunction = function myFunctionHandler() {
    alert("Hello World!");
}
button.addEventListener ('click', muFunction);

var startButton = document.getElementById('startButton');

var startGameHandler = function startMyGame (){
    prompt("Enter your name.");
}

startButton.addEventListener('click', startGameHandler);
