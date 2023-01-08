'use strict';

import Notiflix from 'notiflix';

const form = document.querySelector('.form');
let delayValue;
let stepValue;
let amountValue;

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  formData();
  generatePromise();
}

function formData() {
  Array.from(form.elements).forEach(el => {
    if (el.name === 'delay') {
      delayValue = parseInt(el.value);
    }
    if (el.name === 'step') {
      stepValue = parseInt(el.value);
    }
    if (el.name === 'amount') {
      amountValue = parseInt(el.value);
    }
  });
}

function createPromise(position, delay) {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
}

function generatePromise() {
  let i;
  let delay;
  for (i = 0; i < amountValue; i++) {
    let position = i + 1;
    delay = delayValue + stepValue * i;
    createPromise(position, delay);
  }
}
