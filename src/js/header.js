import { refs } from './refs/refs';
import { newsApi } from './API/fetchAPI';
import { Notify } from 'notiflix';
import { markup } from './renderMarkup';
import { NormalizeData } from './API/api-data-normalaizer';
import { selectedDate } from './newCalendar';
import { makePaginationButtons } from './pagination';
import { showLoader, hideLoader } from './loading';

// export let totalButtons = Math.ceil(newsApi.hits / perPage);

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
  newsApi.resetHits();
  newsApi.query = value;
  if (!newsApi.searchQuery) {
    return Notify.failure('Type search query, please');
  }
  markup.clearMarkup(refs.galleryEl);
  showLoader();
  checkDate();

  try {
    let { docs } = await newsApi.fetchSearchArticles();
    hideLoader();
    if (!docs.length) {
      refs.notFoundBox.innerHTML = `<h2 class="not-found-box__title">We haven’t found news from <br> this categories</h2>
      <img src="https://live.staticflickr.com/65535/52770181328_d91f5366f0_z.jpg">`;
      return;
    }
    markup.renderMarkup(
      refs.galleryEl,
      markup.createGalleryCardMarkup(NormalizeData.searchData(docs))
    );
    makePaginationButtons(newsApi.totalHits);
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
  const currentPage = document.querySelector(
    '.nav__link',
    '[href="/index.html"]'
  );
  currentPage.classList.add('current__page');
}
