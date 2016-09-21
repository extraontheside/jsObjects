function player() {
    var name = "";
    var speed = 10;
    var health = 100;
}

var player1 = new player();
player1.name = prompt("Enter name for player1.");
alert("player1 name is " + player1.name);
player1.health = 8;

var player2 = new player();
player2.name = prompt("Enter name for player2.");
alert("player2 name is " + player2.name);
player2.speed = 45;