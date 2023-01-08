'use strict';

import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const btnStart = document.querySelector('[data-start]');

const dayTimer = document.querySelector('[data-days');
const hourTimer = document.querySelector('[data-hours');
const minuteTimer = document.querySelector('[data-minutes');
const secondTimer = document.querySelector('[data-seconds');

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let pickedDate = selectedDates[0].getTime();
    let timeDifference = pickedDate - new Date().getTime();
    if (timeDifference <= 0) {
      Notiflix.Notify.warning('Please choose a date in the future.');
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;

      btnStart.addEventListener('click', () => {
        countdownTimer(pickedDate);
        btnStart.disabled = true;
      });
    }
  },
};
const timePickerInput = document.querySelector('#datetime-picker');

const timePicker = flatpickr(timePickerInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(val) {
  return String(val).padStart(2, '0');
}
//console.log('pickedDate', pickedDate);
function countdownTimer(pickedDate) {
  const countdownUnit = setInterval(() => {
    ms = pickedDate - new Date().getTime();
    const dropTime = convertMs(ms);

    dayTimer.textContent = addLeadingZero(dropTime.days);
    hourTimer.textContent = addLeadingZero(dropTime.hours);
    minuteTimer.textContent = addLeadingZero(dropTime.minutes);
    secondTimer.textContent = addLeadingZero(dropTime.seconds);
    if (ms < 1000) {
      clearInterval(countdownUnit);
    }
  }, 1000);
}
