//Object literal
var mainPlayer = {
    name: "Player",
    rank: "Pawn",
    speed: 10,
    power: 1,

    messenger: function (message){
        alert("Is this correct? " + message);
    }
}

mainPlayer.name = prompt("Enter your name.");

alert("Welcome  " + mainPlayer.name + "!");
var phrases = [
    prompt("Please enter mother's maiden name."), 
    prompt("Enter your phone number."), 
    prompt("Enter your credit card number"),
    prompt("Who is your first born child?")
];
//"i" is an integer
for (var i = 0 ; i < phrases.length ; i++){
    mainPlayer.messenger(phrases[i]);
}

function PlayGame(firstNum, secondNum) {
    alert(firstNum + secondNum);
    return firstNum + secondNum;
}

var firstPrompt = parseInt(prompt("Enter a number between 0 and 10") );
var secondPrompt = parseInt(prompt("Enter a number between 11 and 20") );

var score = PlayGame(firstPrompt, secondPrompt);
alert("Your score is " + score + ".");
alert("Do you want to play again?")