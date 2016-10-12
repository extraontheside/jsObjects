alert("Brave villager, you have been choosen to help your village from creatures taking precious food and gold.") 

prompt("But first state your name.")

function player () {
    var name;
    var strength = 10;
    var health = 100;
    var magic = "Strong";
    this.potion = 5;
}

var player1 = new player();

function UpdatePlayer (currentPlayer, healthUpdate, ammo, playerPosition) {
    currentPlayer.name = prompt("Enter name for current player.");
    alert(playerPosition + "'s name is " + currentPlayer.name);
    currentPlayer.health = healthUpdate;
    currentPlayer.healing = "Weak";
    currentPlayer.ReArm(ammo);
    alert(currentPlayer.name + " has " + currentPlayer.ammoCount + " in their arsonal.");
}

UpdatePlayer(player1, 20, 1, "Player 1")