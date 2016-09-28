var outcome;

window.alert("It's the zombie apocalypse.");
var beginningSenarios = ["You're in a supermarket.", "You see a Zombie."];

function randomNumber(range) {
    "use strict";
    if (typeof range === "number") {
        return Math.round(Math.random() * range);
    }
}

window.alert(beginningSenarios[randomNumber(beginningSenarios.length - 1)]);

var character = {
    health: 5,
    strenght: 0,
    stealth: 0,
    name: window.prompt("What is your name?"),
    characterClass: window.prompt("What were you before? (Choose from: soldier, athlete, or doctor)").toLowerCase()
};

if (!character.name) {
    character.name = window.prompt("I don't know what to call you if you don't enter a name. If you don't answer, I will be forced to name you myself.");

    if (!character.name) {
        window.alert("Your name will be Puddles.");
        character.name = "Puddles";
    }
}

if (character.characterClass === "soldier") {
    character.strength = 5;
}

if (character.characterClass === "athlete") {
    character.stealth = 5;
}

if (character.characterClass === "doctor") {
    character.health = 7;
}

var choice = window.prompt("The brave aventurer and former " + character.characterClass + " " + character.name + ", scavange through the supermarket for supplies. You then noticed a zombie walking towards you! What action will you take? Attack or sneak").toLowerCase();

if (choice === "attack") {
    if (character.strength === 5) {
        window.alert("Using a bat you've found, you clean cut the zombie's head off!")
        outcome = "Win";
        character.strength++;
    } else if (character.strengh <= 4) {
        window.alert("You hit the zombie, but not hard enough! The zombie bit you before you could attack again.");
        outcome = "Loose";
    }
}

if (choice === "sneak" || choice === "sneak by the zombie") {
    if (character.stealth === 5) {
        window.alert("You snuck by the zombie!");
    }
    if (character.stealth < 5) {
        window.alert("Your shoes sweaked and the zombie noticed. The zombie rushed towards you.")
        if (character.strength === 5) {
            window.alert("Though the zombie rushed towards you, you were able to push the zombie into the wall, and cracked it's head and dies");
            outcome = "Win"
        } else {
            window.alert("You're not quick on your feet. The zombie bites you.")
            outcome = "Loose";
        }
    }
}
if (outcome === "Loose") {
    window.alert("You loose!");
} else if (outcome === "Win") {
    window.alert("You win!");
}


//var weapon baseballBat {
    //var range = 2;
    //var damage = 5;
    //var speed = 3
//}

//function fryingPan(params) {
//    var range = 1;
  //  var damage = 3;
    //var speed = 2;
//}

//function rubberChicken() {
  //  var range = 1;
    //var damage = 1;
    //var speed = 3;
//}