'use strict';


let lives = 20;
let highscore = 0;
let score = 0;
const compGuess = Math.floor(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Put in a number dickhead';
    // player wins
  } else if (guess == compGuess) {
    document.querySelector('.number').textContent = compGuess;
    document.querySelector('.message').textContent = 'Great guess buddy';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    lives++;
    document.querySelector('.lives').textContent = lives;
    score++;
    document.querySelector('.score').textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // too high
  } else if (guess > compGuess) {
    if (lives > 1) {
      document.querySelector('.message').textContent = 'Too high stupid';
      lives--;
      document.querySelector('.lives').textContent = lives;
      //lives 0
    } else {
      document.querySelector('.message').textContent = 'YOU LOSE';
      lives--;
      document.querySelector('.lives').textContent = lives;
    }
    // too low
  } else if (guess < compGuess) {
    if (lives > 1) {
      document.querySelector('.message').textContent = 'Too low idiot';
      lives--;
      document.querySelector('.lives').textContent = lives;
      //lives 0
    } else {
      document.querySelector('.message').textContent = 'YOU LOSE';
      lives--;
      document.querySelector('.lives').textContent = lives;
      

    }
  } else
    document.querySelector('.message').textContent = 'Something went wrong';
});


if (lives <=0){
  document.querySelector('.again').textContent = 'Reset'
}

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing...'
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  const compGuess = Math.floor(Math.random() * 20) + 1;  
  if (lives <=0){
    score = 20;
    document.querySelector('.score').textContent = score;
    lives = 0;
    document.querySelector('.lives').textContent = lives;
  }
});



