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
player1.name = prompt("Enter name for player1.");
alert("player1 name is " + player1.name);
player1.health = 8;
player1.healing = "Weak";
player1.ReArm(300);
alert("player1 has " + player1.ammoCount + " in their arsonal.");

var player2 = new player();
player2.name = prompt("Enter name for player2.");
alert("player2 name is " + player2.name);
player2.speed = 45;
player2.healing = "Moderate";
player2.ReArm(50);
alert("player2 has " + player1.ammoCount + " in their arsonal.");