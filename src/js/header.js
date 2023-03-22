import { refs } from './refs/refs';

refs.formSearch.addEventListener('submit', onFormSearchSubmit);

function onFormSearchSubmit(event) {
  event.preventDefault();
  console.log('submit');
}

document.addEventListener('click', onDocumentClick);

function onDocumentClick(event) {
  if (!document.body.classList.contains('screen-mobile')) {
    return;
  }
  const target = event.target.closest('.form-search');
  if (!target) {
    if (refs.formSearch.elements.searchValue.value.trim()) {
      return;
    }
    refs.formSearch.elements.searchValue.style.transform = 'scale(0)';
    refs.formSearch.elements.button.style.left = '';
    refs.formSearch.elements.button.style.right = '14px';
    return;
  }
  target.elements.searchValue.style.transform = 'scale(1)';
  target.elements.button.style.left = '14px';
  target.elements.button.style.right = '';
}
