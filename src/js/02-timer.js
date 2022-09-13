// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

const convertMs = ms => {
  // Number of milliseconds per unit of time//
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days//
  const days = Math.floor(ms / day);
  // Remaining hours//
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes//
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds//
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

let selectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selected = selectedDates[0].getTime();
    if (selected < options.defaultDate.getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      console.log(selectedDates[0]);
      return (selectedDate = selectedDates[0]);
    }
  },
};

flatpickr('#datetime-picker', options);
function addLeadingZero(value) {
  if (value < 10) {
    return value.toString().padStart(2, '0');
  } else {
    return value;
  }
}

let daysEl = document.querySelector('[data-days]');
let hoursEl = document.querySelector('[data-hours]');
let minuteEl = document.querySelector('[data-minutes]');
let secondsEl = document.querySelector('[data-seconds]');

const minusDay = () => {
  const minus = selectedDate.getTime() - new Date();
  console.log(convertMs(minus));
  const time = convertMs(minus);
  daysEl.textContent = time.days;
  hoursEl.textContent = time.hours;
  minuteEl.textContent = time.minutes;
  secondsEl.textContent = time.seconds;

  // const resultDays = convertMs(minus).days;
  // daysEl.textContent = addLeadingZero(resultDays);

  // const resultHours = convertMs(minus).hours;
  // hoursEl.textContent = addLeadingZero(resultHours);

  // const resultMinutes = convertMs(minus).minutes;
  // minuteEl.textContent = addLeadingZero(resultMinutes);

  // const resultSeconds = convertMs(minus).seconds;
  // secondsEl.textContent = addLeadingZero(resultSeconds);
};

let timer = null;
startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  minusDay();
  timer = setInterval(() => {
    minusDay();
  }, 1000);
});
