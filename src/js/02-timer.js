'use strict';

import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('[data-start]');
btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let timeDifference = selectedDates[0].getTime() - new Date().getTime();
    if (timeDifference <= 0) {
      alert('Please choose a date in the future.');
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
      console.log(1, selectedDates[0]);
      console.log(convertMs(timeDifference));
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
