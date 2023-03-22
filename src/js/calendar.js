import CalendarDates from 'calendar-dates';
import { months, refs } from './refs/calendar';

let dateNow = new Date();
let currYear = dateNow.getFullYear();
let currMonth = dateNow.getMonth();
let currDay = dateNow.getDate();
let selectData = '';
let liTag = '';

console.log(refs.inputEl);

const calendarDates = new CalendarDates();
refs.inputEl.addEventListener('click', onInputEl);

const main = async () => {
  const currentYear = new Date(currYear, currMonth);
  refs.daysTag.innerHTML = '';
  liTag = '';
  for (const { date, iso, type } of await calendarDates.getDates(currentYear)) {
    renderCalendar(date, iso, type);
  }
  refs.daysTag.innerHTML = liTag;
  refs.currentDate.innerText = `${months[currMonth]} ${currYear}`;
};

function renderCalendar(date, iso, type) {
  if (type === 'previous') {
    liTag += `<li class="day__item inactive--prev">${date}</li>`;
  } else if (type === 'current') {
    liTag += `<li class="day__item">${date}</li>`;
  } else {
    liTag += `<li class="day__item inactive--next">${date}</li>`;
  }
}

function onInputEl(e) {
  main();
  refs.pickerEl.classList.toggle('hidden');
  refs.iconDownEl.classList.toggle('hidden');
  refs.iconUpEl.classList.toggle('hidden');
  if (!refs.pickerEl.classList.contains('hidden')) {
    refs.inputEl.classList.add('calendar__open');
    refs.iconUpEl.classList.add('calendar__open');
    refs.iconStartEl.classList.add('calendar__open');
  }
}

refs.prevIcon.addEventListener('click', () => {
  currMonth = currMonth - 1;
  if (currMonth < 0 || currMonth > 11) {
    date = new Date(currYear, currMonth, new Date().getDate());
    currYear = date.getFullYear();
    currMonth = date.getMonth();
  } else {
    dateNow = new Date();
  }
  main();
});

refs.nextIcon.addEventListener('click', () => {
  currMonth = currMonth + 1;
  if (currMonth < 0 || currMonth > 11) {
    date = new Date(currYear, currMonth, new Date().getDate());
    currYear = date.getFullYear();
    currMonth = date.getMonth();
  } else {
    dateNow = new Date();
  }
  main();
});

refs.daysTag.addEventListener('click', e => {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  if (e.target.classList.contains('inactive--prev')) {
    refs.currDay = +e.target.textContent;
    return getDate(currYear, currMonth - 1, currDay);
  }
  if (e.target.classList.contains('inactive--next')) {
    refs.currDay = +e.target.textContent;
    return getDate(currYear, currMonth + 1, currDay);
  } else currDay = +e.target.textContent;
  return getDate(currYear, currMonth, currDay);
});

function getDate(currYear, currMonth, currDay) {
  if (currMonth === -1) {
    currMonth = 11;
    currYear = currYear - 1;
  }
  if (currMonth === 12) {
    currMonth = 0;
    currYear = currYear + 1;
  }
  refs.dataEl.textContent = `${currDay.toString().padStart(2, '0')}/${(
    currMonth + 1
  )
    .toString()
    .padStart(2, '0')}/${currYear}`;

  selectData = refs.dataEl.textContent;
  refs.pickerEl.classList.add('hidden');
  refs.iconDownEl.classList.remove('hidden');
  refs.iconUpEl.classList.add('hidden');
  refs.inputEl.classList.remove('calendar__open');
  refs.iconUpEl.classList.remove('calendar__open');
  refs.iconStartEl.classList.remove('calendar__open');
  localStorage.setItem('CURRENT_DATA', JSON.stringify(selectData));

  return selectData;
}
