// Game Development Hour 1 - Game Foundation & DOM Basics
'use strict';

console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

console.log('Goal: Build a complete interactive game from scratch');
console.log('Focus: DOM manipulation, game state, and user interaction');

////////////////////////////////////
// DOM Element Selection - The Foundation
console.log('=== DOM ELEMENT SELECTION ===');

// Select elements by class name
const messageEl = document.querySelector('.message');
console.log(messageEl); // Shows the HTML element

// Select elements by class name
const scoreEl = document.querySelector('.score');
console.log(scoreEl);

// Select input elements
const guessEl = document.querySelector('.guess');
console.log(guessEl);

// Reading element content
console.log('Current message:', messageEl.textContent);
console.log('Current score:', scoreEl.textContent);

// Modifying element content
messageEl.textContent = 'Hello from JavaScript!';
scoreEl.textContent = '15';

console.log('Elements updated!');

// Input elements use .value property
const guessInput = document.querySelector('.guess');

// Reading input value
console.log('Current guess:', guessInput.value);

// Setting input value
guessInput.value = '10';
console.log('Guess set to:', guessInput.value);

//////////////////////////

const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
//const guessInput = document.querySelector('.guess');

numberEl.textContent = 15;
highscoreEl.textContent = 100;
guessInput.value = 7;

console.log('Number:', numberEl);
console.log('Highscore:', highscoreEl);
console.log('Guess:', guessInput);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret number:', secretNumber);

let score = 20;
let highscore = 0;

/////////////////////////////////////
let playerName = 'Player';
let attempts = 0;
let gameActive = true;
let easySecret = Math.trunc(Math.random() * 10) + 1;

console.log('Player:', playerName);
console.log('Attempts:', attempts);
console.log('Game active:', gameActive);
console.log('Easy secret number:', easySecret);

document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');

  // Get the player's guess and convert to number
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

  // Basic game logic - check if guess is correct
  if (guess === secretNumber) {
    console.log('Correct guess!');
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = '📈 Too high!';
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = '📉 Too low!';
  }
});

// Always convert input to number for comparison
const guess = Number(document.querySelector('.guess').value);

// Why we need Number():
console.log('Input as string:', document.querySelector('.guess').value); // "15"
console.log('Input as number:', Number(document.querySelector('.guess').value)); // 15
console.log('String comparison:', '15' === 15); // false
console.log('Number comparison:', 15 === 15); // true

////////////////////////////////////
// Game Foundation Verification

console.log('🎮 Game Foundation Complete!');
console.log('✅ DOM element selection working');
console.log('✅ Game state variables initialized');
console.log('✅ Event listeners responding');
console.log('✅ Basic game logic implemented');
console.log('Ready for advanced features in Hour 2!');

console.log('Secret number for testing:', secretNumber);
console.log('Try to guess it!');

////////////////////////////////////
// Score tracking - reduce score for wrong guesses

// Add this inside your event listener, after the game logic
if (guess === secretNumber) {
  // ... existing win logic ...
} else if (guess > secretNumber) {
  console.log('Too high!');
  document.querySelector('.message').textContent = '📈 Too high!';
  // Say: "Add score decrementing here"
  score--;
} else if (guess < secretNumber) {
  console.log('Too low!');
  document.querySelector('.message').textContent = '📉 Too low!';
  // Say: "Add score decrementing here"
  score--;
}
// Update the score display after both wrong guesses
document.querySelector('.score').textContent = score;

// Win condition - detect when player wins

if (guess === secretNumber) {
  console.log('Correct guess!');
  document.querySelector('.message').textContent = '🎉 Correct Number!';
  document.querySelector('.number').textContent = secretNumber;

  // Check if this is a new high score
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }

  // Show win message and disable further guessing
  document.querySelector('.message').textContent = '🎉 You won!';
  document.querySelector('.guess').disabled = true;
  document.querySelector('.check').disabled = true;
}

// Add this after the score display update
if (score < 1) {
  document.querySelector('.message').textContent = '💥 You lost!';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.guess').disabled = true;
  document.querySelector('.check').disabled = true;
}

// Game restart - reset everything for new game

document.querySelector('.again').addEventListener('click', function () {
  // Reset game state
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset display
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  // Re-enable input and button
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
});

// Enhanced Game Verification

console.log('🎮 Enhanced Game Complete!');
console.log('✅ Score tracking working');
console.log('✅ Win/lose conditions implemented');
console.log('✅ Game restart functionality working');
console.log('✅ Complete game experience ready');
console.log('Ready for visual polish in Hour 3!');

// Test your complete game
console.log('Test: Try to win, try to lose, then restart!');
