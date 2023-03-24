import format from 'date-fns/format';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
export let selectedDate;
let open = false;
let inputOpen = false;
const input = document.querySelector('#calendar');
const calendar = document.querySelector('.calendar__icon');

const options = {
  minuteIncrement: 1,
  dateFormat: 'Y-m-d',
  maxDate: 'today',
  mode: 'range',
  onClose(selectedDates, dateStr, instance) {
    let deg = 0;
    open = false;
    if (!selectedDates[0]) {
      arrowToggle(deg);
      return;
    }
    // selectedDate = format(new Date(selectedDates[0]), 'yyyyMMdd');
    // console.log(selectedDate);
    arrowToggle(deg);
    selectedDate = input.value;
    console.log(input.value);
    // console.log(selectedDate);
  },
  onOpen() {
    let deg = 180;
    arrowToggle(deg);
  },
};

const fp = flatpickr(input, options);

function arrowToggle(deg) {
  const arrow = document.querySelector('.calendar__arrow');
  arrow.style.transform = `rotate(${deg}deg)`;

  const calendarInput = document.querySelector('.calendar__input');
  if (calendar.classList.contains('opened')) {
    calendar.classList.remove('opened');
    calendarInput.classList.remove('opened');
  } else {
    calendar.classList.add('opened');
    calendarInput.classList.add('opened');
  }
}

input.addEventListener('click', () => {
  if (open === false) {
    open = true;
    console.log(open);
    return;
  } else {
    fp.close();
    open = false;
    console.log(open);
  }
});

input.addEventListener('change', e => {
  if (inputOpen === false) {
    inputOpen = true;
    return;
  } else {
    console.log(e);
    inputOpen = false;
  }
});
