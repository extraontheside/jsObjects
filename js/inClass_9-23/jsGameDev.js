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