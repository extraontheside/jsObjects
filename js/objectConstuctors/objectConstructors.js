function player () {
    var name;
    var speed = 10;
    var health = 100;
    var healing = "Strong";
    this.ammoCount = 100;

    this.ReArm = function (ammo) {
        this.ammoCount += ammo;
    }
}

var player1 = new player();
var player2 = new player();

function UpdatePlayer (currentPlayer, healthUpdate, ammo, playerPosition) {
    currentPlayer.name = prompt("Enter name for current player.");
    alert(playerPosition + "'s name is " + currentPlayer.name);
    currentPlayer.health = healthUpdate;
    currentPlayer.healing = "Weak";
    currentPlayer.ReArm(ammo);
    alert(currentPlayer.name + " has " + currentPlayer.ammoCount + " in their arsonal.");
}

UpdatePlayer(player1, 20, 1, "Player 1")
UpdatePlayer(player2, 60, 1000, "Player 2")

//player2.name = prompt("Enter name for player2.");
//alert("player2 name is " + player2.name);
//player2.speed = 45;
//player2.healing = "Moderate";
//player2.ReArm(50);
//alert("player2 has " + player1.ammoCount + " in their arsonal.");