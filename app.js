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
let currentScore = 0;

// Toggle to check if the player is in an active game
let activeGame = false;

// Check if the two arrays are equal and if the player clicked the right button
let index = 0;

function checkIfRight() {
  if (answerPattern[index] === currentPlayerNum) {
    console.log('Thats right, keep going!');
    index++;
    playerPattern.push(currentPlayerNum);
    if (answerPattern.length === playerPattern.length) {
      console.log('Round Won');
      currentScore++;
      updateScore();
      newRound();
      nextCue();
    }
  } else {
    console.log('WRONG');
    resetGame();
  }
}

// Update the score
function updateScore(score) {
  currentScoreEl.innerText = score;
}

// Function to clear info for new round
function newRound() {
  playerPattern = [];
  index = 0;
}

// Reset the game for the next round or new game
function resetGame() {
  activeGame = false;
  newRound();
  answerPattern = [];
  currentScore = 0;
  updateScore(currentScore);
}

// Generate the answer for the round
function generateNewGame(cues) {
  for (let i = 1; i <= cues; i++) {
    nextCue();
  }
  activeGame = true;
}

// Generate the next number on successful round
function nextCue() {
  answerPattern.push(Math.floor(Math.random() * 4) + 1);
  console.log(answerPattern);
}

// Events Listeners
tile1.addEventListener('click', () => {
  if (activeGame) {
    currentPlayerNum = 1;
    checkIfRight();
  }
});
tile2.addEventListener('click', () => {
  if (activeGame) {
    currentPlayerNum = 2;
    checkIfRight();
  }
});
tile3.addEventListener('click', () => {
  if (activeGame) {
    currentPlayerNum = 3;
    checkIfRight();
  }
});
tile4.addEventListener('click', () => {
  if (activeGame) {
    currentPlayerNum = 4;
    checkIfRight();
  }
});

beginBtn.addEventListener('click', () => {
  generateNewGame(3);
});

// Onload
