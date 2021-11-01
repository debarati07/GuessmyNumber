'use strict';

let secret_number = Math.trunc(Math.random() * 20) + 1;
console.log(secret_number);
let score = 20;
let high_score = 0;

document.querySelector('.check').addEventListener('click', function () {
  let n = Number(document.querySelector('.guess').value);
  console.log(n);
  if (!n) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (n === secret_number) {
    document.querySelector('.message').textContent = '🌟 Correct Number';
    document.querySelector('.number').textContent = secret_number;

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.score').textContent = score;
    if (score > high_score) {
      high_score = score;
      document.querySelector('.highscore').textContent = high_score;
    }
  } else if (n > secret_number) {
    if (score < 1) {
      score = 0;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (n < secret_number) {
    if (score < 1) {
      score = 0;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secret_number = Math.trunc(Math.random() * 20) + 1;
  console.log(secret_number);
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = 'black';
});
