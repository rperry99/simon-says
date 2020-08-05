// Elements
const currentScoreEl = document.getElementById('score');
const highscoreEl = document.getElementById('highscore');
const tile1 = document.getElementById('tile1');
const tile2 = document.getElementById('tile2');
const tile3 = document.getElementById('tile3');
const tile4 = document.getElementById('tile4');
const beginBtn = document.getElementById('begin');

// Global Variable
let answerPattern = [];
let playerPattern = [];
let currentPlayerNum;
let currentRound = 1;
let currentScore = 0;

// Check if the two arrays are equal and if the player clicked the right button
let index = 0;

function checkIfRight() {
  if (answerPattern[index] === currentPlayerNum) {
    console.log('Thats right, keep going!');
    index++;
    playerPattern.push(currentPlayerNum);
  } else {
    console.log('WRONG');
  }
  if (answerPattern.length === playerPattern.length) {
    checkWin(answerPattern, playerPattern);
  }
}

// Check to see if the player has won
function checkWin(answerArr, playerArr) {
  if (
    Array.isArray(answerArr) &&
    Array.isArray(playerArr) &&
    answerArr.length === playerArr.length &&
    answerArr.every((val, index) => val === playerArr[index])
  ) {
    console.log('You win');
    currentRound++;
    updateScore();
    resetGame();
    generateAnswer(currentRound);
  }
}

// Update the score
function updateScore() {
  currentScore += 10;
  currentScoreEl.innerText = currentScore;
}

// Reset the game for the next round or new game
function resetGame() {
  playerPattern = [];
  answerPattern = [];
  index = 0;
}

// Generate the answer for the round
function generateAnswer(round) {
  let answerCount = round + 2;
  for (let i = 1; i <= answerCount; i++) {
    answerPattern.push(Math.floor(Math.random() * 4) + 1);
  }
  console.log(answerPattern);
}

// Events Listeners
tile1.addEventListener('click', () => {
  currentPlayerNum = 1;
  checkIfRight();
});
tile2.addEventListener('click', () => {
  currentPlayerNum = 2;
  checkIfRight();
});
tile3.addEventListener('click', () => {
  currentPlayerNum = 3;
  checkIfRight();
});
tile4.addEventListener('click', () => {
  currentPlayerNum = 4;
  checkIfRight();
});

// Onload
generateAnswer(currentRound);
