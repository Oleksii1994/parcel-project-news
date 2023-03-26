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
  const value = event.currentTarget.elements.searchQuery.value.trim();
  // markup.clearMarkup(refs.galleryEl);
  if (!value) {
    return;
  }
  newsApi.resetPage();

  newsApi.query = value;
  if (!newsApi.searchQuery) {
    return Notify.failure('Type search query, please');
  }

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
  console.log(target);
  if (!target) {
    if (refs.formSearch.elements.searchQuery.value.trim()) {
      return;
    }
    refs.formSearch.elements.searchQuery.style.transform = 'scale(0)';
    refs.formSearch.elements.button.style.left = '';
    refs.formSearch.elements.button.style.right = '14px';
    return;
  }
  target.elements.searchQuery.style.transform = 'scale(1)';
  target.elements.button.style.left = '14px';
  target.elements.button.style.right = '';
}

document.body.classList.remove('screen-desktop', 'screen-tablete');
document.body.classList.add('screen-mobile');

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

const galleryRef = document.querySelector('.gallery');

if (galleryRef) {
  document
    .querySelector('.nav__link[href="/index.html"]')
    .classList.add('current__page');
}
