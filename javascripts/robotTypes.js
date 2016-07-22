"use strict";

var RNG = require("./randomNumbers.js");

//base robot function
function Robot () {
  this.name = null;
  this.health = "TEST";
}

function Drone(minHealthPoints, maxHealthPoints, minDamagePoints, maxDamagePoints) {
  this.name = "Drone";
  this.minPoints = minHealthPoints;
  this.maxPoints = maxHealthPoints;
  this.minDamage = minDamagePoints;
  this.maxDamage = maxDamagePoints;
  this.evasionChance = RNG.randomRange(0, 10);
  this.healthPoints = RNG.randomRange(minHealthPoints, maxHealthPoints);
}

Drone.prototype = new Robot();

function Bipedal(minHealthPoints, maxHealthPoints, minDamagePoints, maxDamagePoints) {
  this.name = "Bipedal";
  this.minPoints = minHealthPoints;
  this.maxPoints = maxHealthPoints;
  this.minDamage = minDamagePoints;
  this.maxDamage = maxDamagePoints;
  this.evasionChance = RNG.randomRange(0, 10);
  this.healthPoints = RNG.randomRange(minHealthPoints, maxHealthPoints);
}

Drone.prototype = new Robot();

function ATV(minHealthPoints, maxHealthPoints, minDamagePoints, maxDamagePoints) {
  this.name = "ATV";
  this.minPoints = minHealthPoints;
  this.maxPoints = maxHealthPoints;
  this.minDamage = minDamagePoints;
  this.maxDamage = maxDamagePoints;
  this.evasionChance = RNG.randomRange(0, 10);
  this.healthPoints = RNG.randomRange(minHealthPoints, maxHealthPoints);
}

Drone.prototype = new Robot();

let robotTypesArray = [Drone, Bipedal, ATV];

module.exports = {robotTypesArray};
