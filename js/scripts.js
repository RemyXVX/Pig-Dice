//Brain//
const player1 = "";
const player2 = "";

const diceGoVroom = function () {
  return Math.floor(6*Math.random()) + 1;
}

//Constructor//
function Player() {
  this.roll = 0;
  this.scoreForNow = 0
  this.totalScore = 0
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
  (this.totalScore >= 100) {

  }