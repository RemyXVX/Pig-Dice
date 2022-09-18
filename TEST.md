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