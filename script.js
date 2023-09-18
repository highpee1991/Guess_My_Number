'use strict';
const againBtn = document.querySelector('.again');
const numberReveal = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const scoreHolder = document.querySelector('.score');
const message = document.querySelector('.message');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');

let rand,
  checkNum,
  counter = 20,
  checkHighScore = 0;

const manageRandom = () => {
  rand = Math.trunc(Math.random() * 20 + 1);
  numberReveal.textContent = '?';
  guessInput.value = '';
  message.textContent = 'Start guessing...';
  counter = 20;
  scoreHolder.textContent = 20;
  body.style.backgroundColor = '#222222';
};
manageRandom();
againBtn.addEventListener('click', manageRandom);

// guess number function
const handleGuess = () => {
  checkNum = Number(guessInput.value);
  checkNum !== rand
    ? (message.textContent = '?')
    : (message.textContent = rand);

  if (checkNum) {
    if (checkNum > rand) message.textContent = 'Number too high!';
    else if (checkNum < rand) message.textContent = 'Number too low!';
    else {
      message.textContent = 'Correct!!!';
      numberReveal.textContent = rand;

      // hamdle highscore
      if (counter >= checkHighScore) {
        checkHighScore = counter;
        console.log(checkHighScore);

        highScore.textContent = checkHighScore;
      }
      body.style.backgroundColor = '#60b347';
    }
  } else {
    message.textContent = '⛔ Invalid Number';
  }

  // handle counter
  if (checkNum !== rand) {
    scoreHolder.textContent = --counter;
  }
};
// handle guess number
checkBtn.addEventListener('click', handleGuess);
