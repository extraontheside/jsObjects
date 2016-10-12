alert("Brave villager, you have been choosen to help your village from creatures taking precious food and gold.") 

var character = {
    health: 100,
    strenght: 10,
    magic: 0,
    dexterity: 5
    name: window.prompt("What is your name?"),
    characterClass: window.prompt("What class would you like to be? (Choose from warrior, spellcaster, or ranger)").toLowerCase()
};

if (!character.name) {
    character.name = window.prompt("I don't know what to call you if you don't enter a name. If you don't answer, I will be forced to name you myself.");

    if (!character.name) {
        window.alert("Your name will be Puddles.");
        character.name = "Puddles";
    }
}

if (character.characterClass === "warrior") {
    character.strength = 20;
}

if (character.characterClass === "spellcaster") {
    character.stealth = 20;
}

if (character.characterClass === "ranger") {
    character.health = 20;
}

prompt("Brave " +character.name + ", I give you one of these weapons to defeat the creatures, the sword of Omens, the staff of Ra, or the axe of chopping trees. Which do you choose?");

