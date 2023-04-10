// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('input#datetime-picker');
const buttonStartEl = document.querySelector('button');
const fieldDaysEl = document.querySelector('[data-days]');
const fieldHoursEl = document.querySelector('[data-hours]');
const fieldMinutesEl = document.querySelector('[data-minutes]');
const fieldSecondsEl = document.querySelector('[data-seconds]');

let intervalId = null;
let timeToEvent = null;

buttonStartEl.setAttribute('disabled', true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        timeToEvent = selectedDates[0];
    // console.log(timeToEvent);
        if (timeToEvent < new Date()) {
        window.alert("Please choose a date in the future");
        } else {
            buttonStartEl.removeAttribute('disabled');
    }
},
};

flatpickr(inputEl, options);

buttonStartEl.addEventListener('click', onClickStartButton);


function onClickStartButton() {

    buttonStartEl.setAttribute('disabled', true);
    intervalId = setInterval(() => {
        const currentDate = Date.now();
        const timeToFinishEvent = timeToEvent - currentDate;
        // console.log(timeToFinishEvent);


        const { days, hours, minutes, seconds } = convertMs(timeToFinishEvent);
        

    fieldDaysEl.textContent = addLeadingZero(days);
    fieldHoursEl.textContent = addLeadingZero(hours);
    fieldMinutesEl.textContent = addLeadingZero(minutes);
    fieldSecondsEl.textContent = addLeadingZero(seconds);

        // console.log(`${days}:${hours}:${minutes}:${seconds}`);
            if (timeToFinishEvent <= 1000) {
                clearInterval(intervalId);
                // console.log(timeToFinishEvent);
    }
    }, 1000)
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}