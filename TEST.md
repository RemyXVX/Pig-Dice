**Describe: Player()**

**Test 1**: "It should create a new player object."<br>
```javascript
Code: function Player() {}
```
Expected output: Player {}

**Test 2**: "It should create a new player object with the property of total score."<br>
```javascript
Code: function Player() {
  this.totalscore = 0;
}
```
Expected output: Player {totalscore: 0}

**Test 3**: "It should create a new player object with the properties roll value, turn score, playerName."
```javascript
Code: function Player() {
  this.roll = 0;
  this.scoreForNow = 0
  this.totalScore = 0
  this.playerName;
}
```
Expected output: Player {roll: 0, scoreForNow: 0, totalScore: 0}

**Describe: diceGoVroom()**

**Test 1**: "It will generate a random number."
```javascript
Code: function diceGoVroom() {
  return Math.random();
}
```
Expected output: (a random number)

**Test 2**: "It will return a random number between 1 and 6."
```javascript
Code: function diceGoVroom() {
  return Math.random() * 6;
}
```
Expected output: ( a random number between 0 and 6)

**Test 3**: "It will return a random interger between 1 and 6.
```javascript
Code: function diceGoVroom() {
  return Math.floor(Math.random() * 6);
}
```
Expected output: (a random _interger_ between 0 and 6)

**Test 4**: "It will return a random interger between 1 and 6.
```javascript
Code: function diceGoVroom() {
  return Math.floor(Math.random() * 6) + 1;
}
```
Expected output: (a random interger between 1 and 6)