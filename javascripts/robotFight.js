"use strict";

const $ = require("jquery");
const d20Random = require("./randomNumbers.js").d20Random;
const d3Random = require("./randomNumbers.js").d3Random;
const randomRange = require("./randomNumbers.js").randomRange;
const specificRobotArray = require("./specificRobots").specificRobotArray;

$("#pickDoor").hide();
let doorClicked = null;
let diceRoll = null;
let oneInThree = null;
let secondCounter = 10;
let builtRobot1 = null;
let builtRobot2 = null;

let counter = 0;

let $door1 = $("#door1"); 
let $door2 = $("#door2"); 
let $door3 = $("#door3"); 




function robotFight(robot1Array, robot2Array) {
  let robot1Name = robot1Array[0];
  let robot2Name = robot2Array[0];
  let robot1Type = robot1Array[1];
  let robot2Type = robot2Array[1];

  //finds robot that the user clicked and assigns it to builtRobot1 & builtRobot2

  for (var x in specificRobotArray) {
    if(robot1Type === specificRobotArray[x].name) {
    builtRobot1 = specificRobotArray[x];
      }
    }

  for (var y in specificRobotArray) {
    if(robot2Type === specificRobotArray[y].name) {
    builtRobot2 = specificRobotArray[y];
      }
    }

  //prints robot names and starting health

  $("#output").append(`<div class="healthUpdate">${robot1Name}(${builtRobot1.name})'s Starting Health: ${builtRobot1.healthPoints} ---- ${robot2Name}(${builtRobot2.name})'s Starting Health: ${builtRobot2.healthPoints}</div>`);

  $("#output").append(`<div class="healthUpdate">${robot1Name} Damage Chance: ${builtRobot1.minDamage} pts / ${builtRobot1.maxDamage} pts ---- ${robot2Name} Damage Chance: ${builtRobot2.minDamage} pts / ${builtRobot2.maxDamage} pts</div>`);
    
  var intervalID = window.setInterval(myCallback, 8000);
  var timerInterval = window.setInterval(myTimer, 800);

  function myTimer() {
    if (secondCounter === 0) {
      secondCounter = 10;
    }

    let player = null;

    if (counter % 2 !== 0) {
      player = `Your (${builtRobot1.name})`;
    } else {
      player = builtRobot2.name;
    }

    if (counter !== 0) {
    secondCounter -= 1;
    $("#timer").html(`<div id="playerTurn">${secondCounter} -- ${player}'s turn.</div>`);
    } else {
      secondCounter -= 1;
      $("#timer").html(`<p class="healthUpdate">Starting game in: ${secondCounter}</p>`);
    }
  }

  function determineWinner() {
    if (builtRobot2.healthPoints <= 0 || builtRobot1.healthPoints <= 0) {
    window.clearInterval(intervalID);
    window.clearInterval(timerInterval);
    $("#timer").html("");
    $("#output").prepend("GAME OVER!");

    $('#healthDiv').html(`<p class="healthUpdate">${robot1Name}(${builtRobot1.name})'s Health: ${builtRobot1.healthPoints} pts. ${robot2Name}(${builtRobot2.name})'s Health: ${builtRobot2.healthPoints} pts. </p>`);

    if (builtRobot1.healthPoints <= 0) {
       $("#output").prepend(`<div id="winner">${builtRobot2.name} WON with its ${builtRobot2.attack}!</div>`);
    } else {
       $("#output").prepend(`<div id="winner">${builtRobot1.name} WON with its ${builtRobot1.attack}!</div>`);
      }
    }
  }

  function extraDamage() {
  $("#pickDoor").hide();
  let $output = $("#output");

  if (oneInThree === doorClicked) {

  $output.prepend(`<div class="player1">`);
  $output.prepend(`<p class="player1">You picked right! You did an extra damage of ${diceRoll} points.</p>`);
  //takes away health from robot2
  builtRobot2.healthPoints -= diceRoll;
  determineWinner();

   $('#healthDiv').html(`<p class="healthUpdate">${robot1Name}(${builtRobot1.name})'s Health: ${builtRobot1.healthPoints} pts. ${robot2Name}(${builtRobot2.name})'s Health: ${builtRobot2.healthPoints} pts. </p>`);

  } else {
    doorClicked = null;
    $output.prepend(`<div class="player1">`);
    $output.prepend(`<p>Sorry, the right choice # was ${oneInThree}</p>`);
    $output.prepend(`</div>`);
    
  }
}

$door1.click(function() {
    doorClicked = 1;
    extraDamage(diceRoll);
  });
$door2.click(function() {
    doorClicked = 2;
    extraDamage(diceRoll);
  });
$door3.click(function() {
    doorClicked = 3;
    extraDamage(diceRoll);
  });


  function myCallback() {
  
    secondCounter = 10;

    let robot1Damage = randomRange(builtRobot1.minDamage, builtRobot1.maxDamage);
    let robot2Damage = randomRange(builtRobot2.minDamage, builtRobot2.maxDamage);

    let $output = $("#output");
    diceRoll = d20Random();

    oneInThree = d3Random();

    counter += 1;
    let doorNotPicked = false;
    
    //determines if it is your turn, then dispays doors
    if (counter % 2 !== 0) {

    builtRobot2.healthPoints -= robot1Damage;
    determineWinner();
  
    $output.prepend(`<p class="yourTurn">Your turn. You did ${robot1Damage} points worth of damage.</p>`);

    // takes away health from robot2

    $('#healthDiv').html(`<p class="healthUpdate">${robot1Name}(${builtRobot1.name})'s Health: ${builtRobot1.healthPoints} pts. ${robot2Name}(${builtRobot2.name})'s Health: ${builtRobot2.healthPoints} pts. </p>`);

    if (builtRobot2.healthPoints > 0 && builtRobot1.healthPoints > 0) {
    $("#pickDoor").toggle();
    $output.prepend(`<p class="player1">Choose a random attack to get your bonus damage points of ${diceRoll} points.</p>`);
  }

    } else {

    $("#pickDoor").hide();  

    $output.prepend(`<p class="player2">${builtRobot2.name}'s turn. ${builtRobot2.name} did ${robot2Damage} points worth of damage.</p>`);

    //takes away health from robot2
    builtRobot1.healthPoints -= robot2Damage;
    determineWinner();

    $('#healthDiv').html(`<p class="healthUpdate">${robot1Name}(${builtRobot1.name})'s Health: ${builtRobot1.healthPoints} pts. ${robot2Name}(${builtRobot2.name})'s Health: ${builtRobot2.healthPoints} pts. </p>`);


    if (builtRobot2.healthPoints > 0 && builtRobot1.healthPoints > 0) {
    let oneInThree = d3Random();

    // opponent's chance to pick the right door
    if(oneInThree === 1) {
    $output.prepend(`<p class = "player2">${builtRobot2.name}chose the correct door. ${builtRobot2.name} did ${diceRoll} points worth of damage.</p>`);
    //takes away health from robot2

    builtRobot1.healthPoints -= diceRoll;
    determineWinner();

    $('#healthDiv').html(`<p class="healthUpdate">${robot1Name}(${builtRobot1.name})'s Health: ${builtRobot1.healthPoints} pts. ${robot2Name}(${builtRobot2.name})'s Health: ${builtRobot2.healthPoints} pts. </p>`);
    } else {
      $output.prepend(`<p class="player2">${builtRobot2.name} did not choose the correct door..</p>`);
        }
      }
    }
    
  }
}


module.exports = {robotFight};