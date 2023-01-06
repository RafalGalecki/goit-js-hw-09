'use strict';

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let colorChange = null;

btnStart.addEventListener('click', () => {
  colorChange = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
});

btnStop.addEventListener('click', () => {
  clearInterval(colorChange);
  btnStart.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
