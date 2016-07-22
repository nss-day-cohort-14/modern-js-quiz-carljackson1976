"use strict";

let robotTypesArray = require("./robotTypes").robotTypesArray;

let Drone = robotTypesArray[0];
let Bipedal = robotTypesArray[1];
let ATV = robotTypesArray[2];

//specific robots//
function Drone01() {
    this.name = "Drone01";
    this.attack = "Ionizer";
}
Drone01.prototype = new Drone(50, 80, 4, 8);

function Drone02() {
    this.name = "Drone02";
    this.attack = "Disintegrator";
}
Drone02.prototype = new Drone(80, 90, 2, 3);

function Bipedal01() {
    this.name = "Bipedal01";
    this.attack = "Missiles";
}
Bipedal01.prototype = new Bipedal(30, 80, 3, 7);

function Bipedal02() {
    this.name = "Bipedal02";
    this.attack = "Smart Bomb";
}
Bipedal02.prototype = new Bipedal(40, 60, 8, 9);

function ATV01() {
    this.name = "ATV01";
    this.attack = "Black Hole";
}
ATV01.prototype = new ATV(30, 80, 3, 7);

function ATV02() {
    this.name = "ATV02";
    this.attack = "Angry Letter";
}
ATV02.prototype = new ATV(40, 60, 8, 9);

let drone01 = new Drone01();
let drone02 = new Drone02();
let bipedal01 = new Bipedal01();
let bipedal02 = new Bipedal02();
let atv01 = new ATV01();
let atv02 = new ATV02();

let specificRobotArray = [drone01, drone02, bipedal01, bipedal02, atv01, atv02];

module.exports = {specificRobotArray};


