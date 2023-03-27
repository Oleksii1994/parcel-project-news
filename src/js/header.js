import { refs } from './refs/refs';
import { newsApi } from './API/fetchAPI';
import { Notify } from 'notiflix';
import { markup, markupForFavoritesAndRead } from './renderMarkup';
import { NormalizeData } from './API/api-data-normalaizer';
import { selectedDate } from './newCalendar';
import { makePaginationButtons } from './pagination';
import { showLoader, hideLoader } from './loading';

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

//==========  скрол

const sentinel = document.querySelector('#sentinel');

const onEntry = entries => {
  console.log('awdawd');
  fetchAndRenderSearchNews();
};
const options = {
  rootMargin: '300px',
};
const observer = new IntersectionObserver(onEntry, options);
console.log(observer);

//==========================================================

async function onFormSearchSubmit(event) {
  event.preventDefault();
  //отключение скрола
  observer.unobserve(sentinel);
  //========================================================
  const value = event.currentTarget.elements.searchQuery.value.trim();
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
    // подключение скрола
    observer.observe(sentinel);
    //
    let { docs } = await newsApi.fetchSearchArticles();
    hideLoader();
    if (!docs.length) {
      refs.notFoundBox.innerHTML = `<h2 class="not-found-box__title">We haven’t found news from <br> this categories</h2>
      <img src="https://live.staticflickr.com/65535/52770181328_d91f5366f0_z.jpg">`;
      return;
    }
    markup.renderMarkup(
      refs.galleryEl,
      markupForFavoritesAndRead.createGalleryCardMarkup(
        NormalizeData.searchData(docs)
      )
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
  // console.log(target);
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

// infinity scroll

async function fetchAndRenderSearchNews() {
  console.log(newsApi.page);

  setTimeout(() => {
    if (newsApi.page >= newsApi.totalHits) {
      Notiflix.Notify.failure(
        "We're sorry, but you've reached the end of search results."
      );
      observer.unobserve(sentinel);
      return;
    }
  }, 1000);

  try {
    showLoader();
    const { docs } = await newsApi.fetchSearchArticles();
    hideLoader();
    markup.renderMarkup(
      refs.galleryEl,
      markupForFavoritesAndRead.createGalleryCardMarkup(
        NormalizeData.searchData(docs)
      )
    );
  } catch (error) {
    console.log(error);
    Notify.failure(`${error}`);
  }
}
