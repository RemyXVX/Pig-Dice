//Brain//
const player1 = "";
const player2 = "";

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

function startThis(event) {
  event.preventDefault()
  let player1 = document.getElementById("p1")
  console.log(player1);
  let player2 = document.getElementById("p2")
  let newGame = Player.prototype.newGame
  document.querySelector("span#playerUnNombre").innerHTML = player1.value
  document.querySelector("span#playerDosNombre").innerHTML = player2.value
}

function rollDice(event) {
  event.preventDefault()
  let roll = diceGoVroom();
  document.querySelector("span#diceRollP1").innerText = roll
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", startThis);
  document.querySelector("button#playerOneRoll").addEventListener("click", rollDice);

})

//Ui//

