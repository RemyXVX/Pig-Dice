//Brain//
let player1 = "";
let player2 = "";

const diceGoVroom = function () {
  return Math.floor(6*Math.random()) + 1;
}

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
    return console.log("Try again " + this.playerName + ". Maybe you won't suck as much.")
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

function rollDiceOne(event) {
  event.preventDefault()
  player1.roll = diceGoVroom();
  document.querySelector("span#diceRollP1").innerText = player1.roll;
  player1.rollOn();
  document.getElementById("diceTotalP1").innerText = player1.scoreForNow;
}

function rollDiceTwo(event) {
  event.preventDefault()
  player2.roll = diceGoVroom();
  document.querySelector("span#diceRollP2").innerText = player2.roll;
  player2.rollOn();
  document.getElementById("diceTotalP2").innerText = player2.scoreForNow;
}

function holdMyHandOne(event) {
  event.preventDefault()
  player1.hold();
  document.getElementById("totalAllP1").innerText = player1.totalScore;
  document.getElementById("diceTotalP1").innerHTML = "";
  document.getElementById("diceRollP1").innerHTML = "";
}

function holdMyHandTwo(event) {
  event.preventDefault()
  player2.hold();
  document.getElementById("totalAllP2").innerText = player2.totalScore;
  document.getElementById("diceTotalP2").innerHTML = "";
  document.getElementById("diceRollP2").innerHTML = "";
}

function itsOver(event) {
  event.preventDefault()
  player1.newGame();
  document.getElementById("totalAllP1").innerHTML = "";
  document.getElementById("diceTotalP1").innerHTML = "";
  document.getElementById("diceRollP1").innerHTML = "";
  player2.newGame();
  document.getElementById("totalAllP2").innerHTML = "";
  document.getElementById("diceTotalP2").innerHTML = "";
  document.getElementById("diceRollP2").innerHTML = "";
}

window.addEventListener("load", function() {
  document.querySelector("form#players1").addEventListener("submit", startThis);
  document.querySelector("form#players2").addEventListener("submit", startThis)
  document.querySelector("button#playerOneRoll").addEventListener("click", rollDiceOne);
  document.querySelector("button#playerOneHold").addEventListener("click", holdMyHandOne)
  document.querySelector("button#playerTwoRoll").addEventListener("click", rollDiceTwo);
  document.querySelector("button#playerTwoHold").addEventListener("click", holdMyHandTwo)
  document.querySelector("button#newGame").addEventListener("click", itsOver);
})


