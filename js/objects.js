//Objects lesson.
var Robot = {
    fuel: 100,
    Weapon: "laser",
    Speed: 10,
    Strength: 5,
    Armor: "light",

    AddFuel: function (tank){
        fuel += tank;
    },

    UpgradeArmor: function (change) {
        armor = change;
    },

    ChangeWeapon: function (change) {
        weapon = change;
    },
}

Robot.speed += parseInt(prompt("Increase Robot speed."));
alert("Robot now has a speed of " + Robot.speed);
Robot.UpgradeArmor(prompt("What should we upgrade the armor to?"));