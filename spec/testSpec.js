"use strict";

const test = require('tape');
const robotTypesArray = require('../javascripts/robotTypes.js').robotTypesArray
const randomNumbers = require('../javascripts/randomNumbers.js')
const specificRobotArray = require('../javascripts/specificRobots.js').specificRobotArray

//robotTypes
test('Drone Constructor', function(t){
  
  t.ok(robotTypesArray, "should return ok");
  t.equal(robotTypesArray.length, 3, "length should be 3");
  t.end();
});

//randomNumbers
test('Random Numbers', function(t){
  
  t.ok(randomNumbers.d3Random, "should return ok");
  t.ok(randomNumbers.d20Random, "should return ok");
  t.ok(randomNumbers.randomRange, "should return ok");
  t.equal(typeof randomNumbers.d3Random, "number", "d3Random should return a number");
  t.end();
});

// specificRobots

test('Specific Robot Array', function(t){
  
  t.ok(specificRobotArray, "should return ok");
  t.equal(specificRobotArray.length, 6, "length should be 6");
  t.equal(typeof specificRobotArray[0].attack, "string", `robot attack should be a string`);
  t.equal(typeof specificRobotArray[0].name, "string", `robot name should be a string`);
  t.equal(typeof specificRobotArray[0].evasionChance, "number", `robot evasion chance should be a string`);
  t.end();
});


