import format from 'date-fns/format';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { NormalizeData } from './API/api-data-normalaizer';
import { Notify } from 'notiflix';
export let selectedDate = '';
let open = false;
let inputOpen = false;
export const input = document.querySelector('#calendar');
const calendar = document.querySelector('.calendar__icon');

const options = {
  minuteIncrement: 1,
  dateFormat: 'Y-m-d',
  minDate: '2021-01',
  maxDate: 'today',
  mode: 'range',
  onClose(selectedDates, dateStr, instance) {
    let deg = 0;
    open = false;
    if (!selectedDates[0]) {
      arrowToggle(deg);
      return;
    }

    arrowToggle(deg);
    selectedDate = NormalizeData.convertDates(input.value);
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
    Notify.info('Please select a starting date');
    open = true;

    return;
  } else {
    fp.close();
    open = false;
  }
});
