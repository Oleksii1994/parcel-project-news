import { refs } from './refs/refs';
import { newsApi } from './API/fetchAPI';
import { Notify } from 'notiflix';
import { markup } from './renderMarkup';
import { NormalizeData } from './API/api-data-normalaizer';
import { selectedDate } from './newCalendar';

const notifyOptions = {
  width: '450px',
  position: 'right-top',
  distance: '20px',
  timeout: 2000,
  clickToClose: true,
  fontSize: '20px',
  cssAnimationStyle: 'zoom',
  showOnlyTheLastOne: true,
};

Notify.init(notifyOptions);

refs.formSearch.addEventListener('submit', onFormSearchSubmit);

async function onFormSearchSubmit(event) {
  event.preventDefault();
  markup.clearMarkup(refs.galleryEl);
  newsApi.resetPage();
  newsApi.query = event.target.elements.searchQuery.value.trim();
  checkDate();

  try {
    let { docs } = await newsApi.fetchSearchArticles();
    markup.renderMarkup(
      refs.galleryEl,
      markup.createGalleryCardMarkup(NormalizeData.searchData(docs))
    );
  } catch (error) {
    console.log(error);
    Notify.failure(`${error}`);
  }
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

function checkDate() {
  if (!selectedDate) {
    return;
  } else {
    if (selectedDate[1] === '') {
      newsApi.startDate = selectedDate[0];
    } else {
      newsApi.startDate = selectedDate[0];
      newsApi.finishDate = selectedDate[1];
    }
  }
}
