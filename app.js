// Elements
const currentScoreEl = document.getElementById('score');
const highscoreEl = document.getElementById('highscore');
const tile1 = document.getElementById('tile1');
const tile2 = document.getElementById('tile2');
const tile3 = document.getElementById('tile3');
const tile4 = document.getElementById('tile4');
const beginBtn = document.getElementById('begin');
const beep = document.getElementById('beep');

// Global Variable
let answerPattern = [];
let playerPattern = [];
let currentPlayerNum;
let currentScore = 0;
let highscore = 0;
console.log(highscore);

// Check if the two arrays are equal and if the player clicked the right button
let index = 0;

function checkIfRight() {
  if (answerPattern[index] === currentPlayerNum) {
    index++;
    playerPattern.push(currentPlayerNum);
    if (answerPattern.length === playerPattern.length) {
      currentScore += 10;
      updateScore(currentScore);
      newRound();
      nextCue();
      answerCounter = 0;
      showAnswer();
    }
  } else {
    // local storage if statement to set new high score if one is reached.
    if (currentScore > highscore) {
      highscore = currentScore;
      highscoreEl.innerText = highscore;
      localStorage.setItem('highscore', highscore);
    }
    resetGame();
    beginBtn.disabled = false;
    beginBtn.classList.remove('disabled');
    beginBtn.innerText = 'Try Again';
    answerCounter = 0;
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
  showAnswer();
}

// Generate the next number on successful round
function nextCue() {
  answerPattern.push(Math.floor(Math.random() * 4) + 1);
}

let showTime = 1000; // In ms

// Function to make the tiles light up for the code
function showAnswer() {
  answerLoop();
}

var answerCounter = 0; // This is to count the items in the array
function answerLoop() {
  setTimeout(() => {
    if (answerPattern[answerCounter] === 1) {
      setTimeout(() => {
        tile1.classList.add('activeColor');
        setTimeout(() => {
          tile1.classList.remove('activeColor');
        }, showTime);
      }, showTime * answerCounter);
    } else if (answerPattern[answerCounter] === 2) {
      setTimeout(() => {
        tile2.classList.add('activeColor');
        setTimeout(() => {
          tile2.classList.remove('activeColor');
        }, showTime);
      }, showTime * answerCounter);
    } else if (answerPattern[answerCounter] === 3) {
      setTimeout(() => {
        tile3.classList.add('activeColor');
        setTimeout(() => {
          tile3.classList.remove('activeColor');
        }, showTime);
      }, showTime * answerCounter);
    } else if (answerPattern[answerCounter] === 4) {
      setTimeout(() => {
        tile4.classList.add('activeColor');
        setTimeout(() => {
          tile4.classList.remove('activeColor');
        }, showTime);
      }, showTime * answerCounter);
    }
    // beep.play();
    answerCounter++;
    if (answerCounter < answerPattern.length) {
      answerLoop();
    }
  }, showTime);
}

// Events Listeners
tile1.addEventListener('click', () => {
  currentPlayerNum = 1;
  // beep.play();
  checkIfRight();
});
tile2.addEventListener('click', () => {
  currentPlayerNum = 2;
  // beep.play();
  checkIfRight();
});
tile3.addEventListener('click', () => {
  currentPlayerNum = 3;
  // beep.play();
  checkIfRight();
});
tile4.addEventListener('click', () => {
  currentPlayerNum = 4;
  // beep.play();
  checkIfRight();
});

beginBtn.addEventListener('click', () => {
  generateNewGame(3);
  beginBtn.disabled = true;
  beginBtn.classList.add('disabled');
});

// Onload check if there is a high score in local storage
if (localStorage.getItem('highscore')) {
  highscoreEl.innerText = localStorage.getItem('highscore');
} else {
  highscoreEl.innerText = 0;
}
