function genericRPG () {

alert("Brave villager, you have been choosen to help your village from creatures plundering precious food and gold.");

//var weapons = ["sword", "staff", "bow"];

var sword = {
    physicalDamage: 1,
    magicDagmage: 0,
    rangeDamage: 0, 
    name:"sword"
};

var staff = {
    physicalDamage: 0,
    magicDamage: 1,
    rangeDamage: 0,
    name: "staff"
};

var bow = {
    physicalDamage: 1,
    magicDamage: 0,
    rangeDamage: 1,
    name: "bow"
};

var rubberChicken = {
    physicalDamage: 0,
    magicDamage: 0,
    rangeDamage:0,
    name: "rubber chicken"
}

function character(health, strength, magic, dexterity, name) {
    this.health = health,
    this.strenght = strength,
    this.magic = magic,
    this.dexterity = dexterity,
    this.name = name,
    this.characterClass = NaN,
    this.weapons = NaN
};

var myCharacter = new character(100, 10, 0, 5, setName());

setClass();

bestowWeapons(myCharacter);

//have class after name
function setName(){
  var name = window.prompt("What is your name?")
    if (!name) {
    name = window.prompt("I don't know what to call you if you don't enter a name. If you don't answer, I will be forced to name you myself.");

    if (!name) {
        window.alert("Your name will be Puddles.");
        name = "Puddles";
    }
    }
  return name;
}

setStatsBasedOnClass(character);

function setClass() {
    var cClass = window.prompt("What class would you like to be? (Choose from warrior, spellcaster, or ranger)").toLowerCase();
    myCharacter.characterClass = cClass;
        if (!cClass) {
            cClass = window.prompt("What class are you?");

        if (!cClass) {
            window.alert("You will be a Jester");
        }
        }
        return cClass;
};


function setStatsBasedOnClass(character){
    switch (character.characterClass) {
    case "warrior":
         character.strength = character.strength + 20;
        break;

    case "spellcaster":
        character.magic = character.magic + 20;
        break;

    case "ranger":
        character.range = character.range + 20;
        break;

    default:
    character.characterClass = "Jester";
    character.strenght = 0;
    //character.dexterity = charcter.dexterity + 20;
        break;
    }
}

//document.getElementById("name").innerHTML = character.name;
//document.getElementById("class").innerHTML = character.characterClass;

bestowWeapons(character)

alert("Brave " + myCharacter.name + ", you have choosen " + myCharacter.characterClass + ", I bestow you a " + myCharacter.weapons.name + ".");

function bestowWeapons(character) {
    switch (character.characterClass) {
        case "warrior": 
            character.weapons = sword;
            break;
        case "spellcaster":
            character.weapons = staff;
            break;
        case "ranger":
            character.weapons = bow;
        default: 
        character.weapons = rubberChicken
            break;
    }
}

var enemy = [bat, skeleton, goblin];

var bat = {name: "Bat", type: "flying", eHealth: 20, eAttack: 5, eDefense: 5, eMagicDefense: 0};
var skeleton = {name: "skeleton", type: "magic", eHealth: 50, eAttack: 10, eDefense: 5, eMagicDefense: 10};
var goblin = {name: "goblin", type: "normal", eHealth: 50, eAttack: 20, eDefense: 10, eMagicDefense: 5};

var choice1 = prompt("Brave " + myCharacter.name + ", there are enemies in your village. Where do you want to go? (Choose Farm, Town Hall, or Market)").toLocaleLowerCase();

places(choice1);

function places(area) {
    switch (area) {
        case "farm":
            alert("You encountered a Skeleton!");
            prompt
            break;
        case "town hall":
           alert("You encountered a Goblin!");
           prompt
            break;
        case "market":
           alert("You encountered a Bat!");
           prompt
            break;
    }
    
}


//var health = document.getElementById("health");
//health.value = health.value ();

function enemyAttack(defend) {
    var pDamage = (enemy.eAttack * 5 - characte.strength);
    if (damage <= 0);
    alert("The " + enemy + " didn't do any damage.")
}

function playerAttack(attack) {
    var eDamage = (character.strenght - enemy.eDefense - enemy.eMagicDefense);
}

function battle(places) { 
    window.prompt("Brave " + character.name + ", what action will you choose? Attack, magic, or run?").toLowerCase();
    if (choice === attack) {
        alert("You attack the " + enemy + " for " + playerAttack + ".")
    }
}


}
