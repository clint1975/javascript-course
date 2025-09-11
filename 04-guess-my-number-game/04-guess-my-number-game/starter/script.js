// // Game Development Hour 1 - Game Foundation & DOM Basics
// 'use strict';

// console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

// console.log('Goal: Build a complete interactive game from scratch');
// console.log('Focus: DOM manipulation, game state, and user interaction');

// ////////////////////////////////////
// // DOM Element Selection - The Foundation
// console.log('=== DOM ELEMENT SELECTION ===');

// // Select elements by class name
// const messageEl = document.querySelector('.message');
// console.log(messageEl); // Shows the HTML element

// // Select elements by class name
// const scoreEl = document.querySelector('.score');
// console.log(scoreEl);

// // Select input elements
// const guessEl = document.querySelector('.guess');
// console.log(guessEl);

// // Reading element content
// console.log('Current message:', messageEl.textContent);
// console.log('Current score:', scoreEl.textContent);

// // Modifying element content
// messageEl.textContent = 'Hello from JavaScript!';
// scoreEl.textContent = '15';

// console.log('Elements updated!');

// // Input elements use .value property
// const guessInput = document.querySelector('.guess');

// // Reading input value
// console.log('Current guess:', guessInput.value);

// // Setting input value
// guessInput.value = '10';
// console.log('Guess set to:', guessInput.value);

// //////////////////////////

// const numberEl = document.querySelector('.number');
// const highscoreEl = document.querySelector('.highscore');
// //const guessInput = document.querySelector('.guess');

// numberEl.textContent = 15;
// highscoreEl.textContent = 100;
// guessInput.value = 7;

// console.log('Number:', numberEl);
// console.log('Highscore:', highscoreEl);
// console.log('Guess:', guessInput);

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log('Secret number:', secretNumber);

// let score = 20;
// let highscore = 0;

// /////////////////////////////////////
// let playerName = 'Player';
// let attempts = 0;
// let gameActive = true;
// let easySecret = Math.trunc(Math.random() * 10) + 1;

// console.log('Player:', playerName);
// console.log('Attempts:', attempts);
// console.log('Game active:', gameActive);
// console.log('Easy secret number:', easySecret);

// document.querySelector('.check').addEventListener('click', function () {
//   console.log('Check button clicked!');

//   // Get the player's guess and convert to number
//   const guess = Number(document.querySelector('.guess').value);
//   console.log('Player guessed:', guess);

//   // Basic game logic - check if guess is correct
//   if (guess === secretNumber) {
//     console.log('Correct guess!');
//     document.querySelector('.message').textContent = '🎉 Correct Number!';
//     document.querySelector('.number').textContent = secretNumber;
//   } else if (guess > secretNumber) {
//     console.log('Too high!');
//     document.querySelector('.message').textContent = '📈 Too high!';
//   } else if (guess < secretNumber) {
//     console.log('Too low!');
//     document.querySelector('.message').textContent = '📉 Too low!';
//   }
// });

// // Always convert input to number for comparison
// const guess = Number(document.querySelector('.guess').value);

// // Why we need Number():
// console.log('Input as string:', document.querySelector('.guess').value); // "15"
// console.log('Input as number:', Number(document.querySelector('.guess').value)); // 15
// console.log('String comparison:', '15' === 15); // false
// console.log('Number comparison:', 15 === 15); // true

// ////////////////////////////////////
// // Game Foundation Verification

// console.log('🎮 Game Foundation Complete!');
// console.log('✅ DOM element selection working');
// console.log('✅ Game state variables initialized');
// console.log('✅ Event listeners responding');
// console.log('✅ Basic game logic implemented');
// console.log('Ready for advanced features in Hour 2!');

// console.log('Secret number for testing:', secretNumber);
// console.log('Try to guess it!');

// ////////////////////////////////////
// // Score tracking - reduce score for wrong guesses

// // Add this inside your event listener, after the game logic
// if (guess === secretNumber) {
//   // ... existing win logic ...
// } else if (guess > secretNumber) {
//   console.log('Too high!');
//   document.querySelector('.message').textContent = '📈 Too high!';
//   // Say: "Add score decrementing here"
//   score--;
// } else if (guess < secretNumber) {
//   console.log('Too low!');
//   document.querySelector('.message').textContent = '📉 Too low!';
//   // Say: "Add score decrementing here"
//   score--;
// }
// // Update the score display after both wrong guesses
// document.querySelector('.score').textContent = score;

// // Win condition - detect when player wins

// if (guess === secretNumber) {
//   console.log('Correct guess!');
//   document.querySelector('.message').textContent = '🎉 Correct Number!';
//   document.querySelector('.number').textContent = secretNumber;

//   // Check if this is a new high score
//   if (score > highscore) {
//     highscore = score;
//     document.querySelector('.highscore').textContent = highscore;
//   }

//   // Show win message and disable further guessing
//   document.querySelector('.message').textContent = '🎉 You won!';
//   document.querySelector('.guess').disabled = true;
//   document.querySelector('.check').disabled = true;
// }

// // Add this after the score display update
// if (score < 1) {
//   document.querySelector('.message').textContent = '💥 You lost!';
//   document.querySelector('.number').textContent = secretNumber;
//   document.querySelector('.guess').disabled = true;
//   document.querySelector('.check').disabled = true;
// }

// // Game restart - reset everything for new game

// document.querySelector('.again').addEventListener('click', function () {
//   // Reset game state
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   // Reset display
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.guess').value = '';

//   // Re-enable input and button
//   document.querySelector('.guess').disabled = false;
//   document.querySelector('.check').disabled = false;
// });

// // Enhanced Game Verification

// console.log('🎮 Enhanced Game Complete!');
// console.log('✅ Score tracking working');
// console.log('✅ Win/lose conditions implemented');
// console.log('✅ Game restart functionality working');
// console.log('✅ Complete game experience ready');
// console.log('Ready for visual polish in Hour 3!');

// // Test your complete game
// console.log('Test: Try to win, try to lose, then restart!');

// // WIN: set background to green
// if (guess === secretNumber) {
//   // ... your existing win logic ...
//   document.body.style.backgroundColor = 'green';
// }

// // LOSE: set background to red (place inside your lose condition)
// if (score < 1) {
//   // ... your existing lose logic ...
//   document.body.style.backgroundColor = 'red';
// }

// // RESTART: clear inline background so CSS default applies (inside the Again! handler)
// document.querySelector('.again').addEventListener('click', function () {
//   // ... your existing restart logic ...
//   document.body.style.backgroundColor = '';
// });

// // Input validation - check for valid input

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   // 1) Missing input
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!';
//     return; // stop here
//   }

//   // 2) Out of range
//   if (guess < 1 || guess > 20) {
//     document.querySelector('.message').textContent =
//       'Number must be between 1 and 20!';
//     return; // stop here
//   }

//   // ... your existing game logic (win / too high / too low / update score / lose) ...
// });
// // In WIN block
// if (guess === secretNumber) {
//   // ... existing win logic ...
//   document.querySelector('.message').textContent = '🎉 Game Over!';
//   document.querySelector('.guess').value = '';
// }

// // In LOSE block
// if (score < 1) {
//   // ... existing lose logic ...
//   document.querySelector('.message').textContent = '💀 Game Over!';
//   document.querySelector('.guess').value = '';
// }

// Constants & Selectors

// Ranges and defaults
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// Cached selectors (single source of truth)
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

// UI Helpers

function setMessage(text) {
  messageEl.textContent = text;
}
function setNumber(value) {
  numberEl.textContent = value;
}
function setScore(value) {
  scoreEl.textContent = value;
}
function setHighscore(value) {
  highscoreEl.textContent = value;
}
function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}
function clearInput() {
  guessInputEl.value = '';
}

// Game State & Reset

let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('');
}

// Initial render
renderInitialUI();

// Handlers

checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessInputEl.value);

  // Validation
  if (!guess) return setMessage('No number!');
  if (guess < MIN_NUMBER || guess > MAX_NUMBER)
    return setMessage(
      `Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`
    );

  if (guess === secretNumber) {
    setMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBackground('green');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    disablePlay(true);
    clearInput();
    return; // early exit
  }

  // Wrong guess
  setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
  score--;
  setScore(score);

  if (score < 1) {
    setMessage('💥 You lost!');
    setNumber(secretNumber);
    setBackground('red');
    disablePlay(true);
    clearInput();
  }
});

againBtnEl.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
});

// Enter key submits when possible
window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

// Focus input on restart
againBtnEl.addEventListener('click', function () {
  guessInputEl.focus();
});
