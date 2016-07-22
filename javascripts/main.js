"use strict";

const robotFight = require("./robotFight").robotFight;
const $ = require('jquery'); 
const specificRobots = require("./specificRobots");
const robotTypes = require("./robotTypes");

let $robot1 = $("#robot1");
let $robot2 = $("#robot2");

let $typeRobot1 = $("#typeRobot1");
let $typeRobot2 = $("#typeRobot2");

let $makeRobot1 = $("#makeRobot1");
let $makeRobot2 = $("#makeRobot2");

let $attack = $("#attack");

let robot1Array = null;
let robot2Array = null;

//initializer

$attack.click(function() {
  if ($robot1.val() === "" || $typeRobot1.val() === null || $robot2.val() === "" || $typeRobot2.val() === null) {
    alert("Please fill in all fields")
  }
  else {

    $("#robotMaker").hide();

    let robot1Name = $robot1.val();
    let robot1Type = $typeRobot1.val();
    let robot2Name = $robot2.val();
    let robot2Type = $typeRobot2.val();

    robot1Array = [robot1Name, robot1Type];
    robot2Array = [robot2Name, robot2Type];

    robotFight(robot1Array, robot2Array);

  }
});

