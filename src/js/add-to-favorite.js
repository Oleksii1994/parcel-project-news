import { markupForFavoritesAndRead } from './renderMarkup';
// import { pageLoadHandler } from './render news gallery/render-news-gallery';
import { setToLS, getFromLS } from './local-storage-logic';
import { refs } from './refs/refs';
import _debounce from 'debounce';
import Aos from 'aos';
import 'aos/dist/aos.css';
// =====================================================Юра
import Notiflix from 'notiflix';
import { initializeApp, firebase } from 'firebase/app';
import {
  getDatabase,
  set,
  ref,
  update,
  get,
  child,
  userId,
} from 'firebase/database';
import { getAuth } from 'firebase/auth';
import {
  addOrDeleteFavoriteNews,
  getFavNews,
} from './firebace/firebace-for-favorite';

Aos.init();

const firebaseConfig = {
  apiKey: 'AIzaSyDD_Eh4tyvM30ivpTHWqfHo7r2h0gDev4Y',
  authDomain: 'project-goit2023-js.firebaseapp.com',
  databaseURL: 'https://project-goit2023-js-default-rtdb.firebaseio.com',
  projectId: 'project-goit2023-js',
  storageBucket: 'project-goit2023-js.appspot.com',
  messagingSenderId: '407142734195',
  appId: '1:407142734195:web:6d45ec3cdde16415370d06',
  measurementId: 'G-VMY0EQ75TG',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const usersRef = ref(database, 'users');
// ===========================================================
const favorPage = document.querySelector('.favorite');
export const notFoundRef = document.querySelector('.not-found-box');
const listArticlesRef = document.querySelector('#news-list');

export const FAVORITE_KEY = 'favorite_news';

export function onLoadHomePage() {
  const FAVORITE_KEY = 'favorite_news';
  const svgA = new URL('../images/icon-card.svg', import.meta.url);
  const svgB = 'icon-like';
  const svgC = 'icon-like-icon';

  refs.galleryEl.addEventListener('click', onGalleryClick);

  function onGalleryClick(event) {
    const targetBtn = event.target.closest('.gallery-thumb__btn');
    if (!targetBtn) {
      return;
    }

    const targetItem = event.target.closest('.gallery__item');

    const img = () => {
      const resWithoutStart = targetItem
        .querySelector('.gallery-thumb')
        .style.backgroundImage.split('');

      resWithoutStart.splice(0, 5);
      resWithoutStart.splice(-2, 2);

      return resWithoutStart.join('');
    };
    const title = targetItem.querySelector('.gallery__title').textContent;
    const text = targetItem.querySelector('.gallery__text').textContent;
    const date = targetItem.querySelector('.thumb__text').textContent;
    const id = targetItem.id;
    const category = targetItem.querySelector(
      '.gallery-thumb__subtitle'
    ).textContent;
    const url = targetItem.querySelector('.thumb__link').href;
    const article = { img: img(), title, text, date, id, category, url };
    const dataFromLS = getFromLS(FAVORITE_KEY);
    // добавляємо в localStorage
    const present = dataFromLS.find(article => article.id === id);

    // ===========================================================
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;
      addOrDeleteFavoriteNews(article, userId, targetBtn);
    }
    // ===========================================================

    if (present) {
      const newData = dataFromLS.filter(article => article.id !== id);
      setToLS(FAVORITE_KEY, newData);

      // ===========================================================
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        addOrDeleteFavoriteNews(article, userId, targetBtn);
      }
      // ===========================================================

      targetBtn.innerHTML = `<p class="gallery-thumb__name add">Add to favorite<svg width="16" height="16"><use href="${svgA}#${svgC}"></use></svg></p>`;
      return;
    }

    const newData = [...dataFromLS, { ...article }];
    setToLS(FAVORITE_KEY, newData);
    targetBtn.innerHTML = `<p class="gallery-thumb__name add">Remove from favorite<svg width="16" height="16"><use href="${svgA}#${svgB}"></svg></p>`;
  }
}

export function checkPresentArticle(id) {
  //кожен хто імпортує собі цю функцію, має також імпортувати ось це
  // import { setToLS, getFromLS } from './local-storage-logic';
  const dataFromLS = getFromLS(FAVORITE_KEY);
  const present = dataFromLS.find(article => article.id === id);
  return present;
}

function onLoadFavoritesPage(ref) {
  const dataFromLS = getFromLS(FAVORITE_KEY);

  if (!dataFromLS.length) {
    notFoundRef.classList.remove('not-found-box-hidden');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    return;
  }

  notFoundRef.classList.add('not-found-box-hidden');
  if (ref === null) return;

  ref.innerHTML = markupForFavoritesAndRead.createGalleryCardMarkup(dataFromLS);
  dataFromLS.forEach(obj => checkAlreadyReadArticle(obj.id));
  ref.addEventListener('click', onListArticlesClick);
}

function checkAlreadyReadArticle(id) {
  //кожен хто імпортує собі цю функцію, має також імпортувати ось це
  // import { setToLS, getFromLS } from './local-storage-logic';
  const READ_KEY = 'read_news';
  const dataFromLS = getFromLS(READ_KEY);
  const present = dataFromLS.find(article => article.id === id);
  if (!present) {
    return;
  } else {
    const targetItem = document.getElementById(present.id);
    const alreadyReadText = targetItem.querySelector('.gallery-thumb__already');
    targetItem.style.opacity = '0.7';
    alreadyReadText.classList.add('gallery-thumb__already--show');
  }
}

function onListArticlesClick(event) {
  const targetBtn = event.target.closest('.gallery-thumb__btn');

  if (!targetBtn) {
    return;
  }

  const targetItem = event.target.closest('.gallery__item');
  const id = targetItem.id;
  const dataFromLS = getFromLS(FAVORITE_KEY);
  const present = dataFromLS.find(article => article.id === id);
  if (present) {
    const newData = dataFromLS.filter(article => article.id !== id);
    setToLS(FAVORITE_KEY, newData);

    if (!newData.length) {
      checkLS();
    }

    const newMarkup =
      markupForFavoritesAndRead.createGalleryCardMarkup(newData);

    listArticlesRef.innerHTML = newMarkup;
    newData.forEach(obj => checkAlreadyReadArticle(obj.id));
    return;
  }
}

export function checkLS() {
  setTimeout(() => {
    const dataFromLS = getFromLS(FAVORITE_KEY);

    if (!dataFromLS.length) {
      notFoundRef.classList.remove('not-found-box-hidden');

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, 100);
}

if (document.title === 'Favorite') {
  onLoadFavoritesPage(listArticlesRef);
}
