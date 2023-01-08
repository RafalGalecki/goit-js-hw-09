'use strict';

import Notiflix from 'notiflix';

const form = document.querySelector('.form');
let delayValue;
let stepValue;
let amountValue;

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  fillForm();
  loop();
}

function fillForm() {
  Array.from(form.elements).forEach(el => {
    if (el.name === 'delay') {
      delayValue = parseInt(el.value);
      console.log(delayValue);
    }
    if (el.name === 'step') {
      stepValue = parseInt(el.value);
      console.log(stepValue);
    }
    if (el.name === 'amount') {
      amountValue = parseInt(el.value);
      console.log(amountValue);
    }
  });
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

function loop() {
  let i;
  let delay;
  for (i = 0; i < amountValue; i++) {
    delay = delayValue + stepValue * i;
    Notiflix.Notify.info(`promise number ${i + 1} and delay ${delay}`);
  }
}
