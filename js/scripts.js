//Brain//
let player1 = "";
let player2 = "";

//let person1 = document.getElementsByClassName("playerOnename").value;
//console.log(person1);

const diceGoVroom = function () {
  return Math.floor(6*Math.random()) + 1;
}

//Constructor//
function Player() {
  this.roll = 0;
  this.scoreForNow = 0;
  this.totalScore = 0;
  this.playerName;
}

//BL//
Player.prototype.rollOn = function () {
  if (this.roll === 1) {
    this.scoreForNow = 0;
    return this.scoreForNow.push("Try again" + this.playerName + ". Maybe you won't suck as much.")
  } else {
  this.scoreForNow += this.roll;
  }
}

Player.prototype.hold = function () {
  this.totalScore += this.scoreForNow;
  this.scoreForNow = 0;
  return this.totalScore
}

Player.prototype.winner = function () {
  if (this.totalScore >= 100) {
    return this.totalScore.push("You won" + this.playerName + "!");
  }
}

Player.prototype.newGame = function () {
  this.roll = 0;
  this.scoreForNow = 0;
  this.totalScore = 0;
  this.playerName = "";
}

//UI//
function startThis(event) {
  event.preventDefault()
  player1 = new Player(true);
  player2 = new Player(false);
  player1.playerName = document.getElementById("p1").value;
  player2.playerName = document.getElementById("p2").value;
  document.querySelector("span#playerUnNombre").innerHTML = player1.playerName
  document.querySelector("span#playerDosNombre").innerHTML = player2.playerName
}

///////////////////////////////////////////////////////////////////////////

function rollDice(event) {
  event.preventDefault()
  player1.roll = diceGoVroom();
  document.querySelector("span#diceRollP1").innerText = player1.roll;
  player1.rollOn();
  document.getElementById("diceTotalP1").innerText = player1.scoreForNow;
}

window.addEventListener("load", function() {
  document.querySelector("form#players1").addEventListener("submit", startThis);
  document.querySelector("form#players2").addEventListener("submit", startThis)
  document.querySelector("button#playerOneRoll").addEventListener("click", rollDice);

})


