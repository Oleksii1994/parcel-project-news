import { refs } from './refs/refs';

refs.formSearch.addEventListener('submit', onFormSearchSubmit);

function onFormSearchSubmit(event) {
  event.preventDefault();
  console.log('submit');
}

refs.formSearch.addEventListener('blur', onFormSearchBlur);

function onFormSearchBlur(event) {
  console.log('blur');
}

refs.formSearch.addEventListener('click', onFormSearchClick);

function onFormSearchClick(event) {
  console.log('click');
}
