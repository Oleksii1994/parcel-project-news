import { markup } from './renderMarkup';
// import { pageLoadHandler } from './render news gallery/render-news-gallery';
import { setToLS, getFromLS } from './local-storage-logic';
import { refs } from './refs/refs';
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

const notFoundRef = document.querySelector('.not-found-box');
const listArticlesRef = document.querySelector('#news-list');

// document.body.classList.remove('screen-tablet');
// document.body.classList.add('screen-mobile');
const FAVORITE_KEY = 'favorite_news';

export function onLoadHomePage() {
  const FAVORITE_KEY = 'favorite_news';

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

      targetBtn.innerHTML =
        '<p class="gallery-thumb__name add">Add to favorite<span class="gallery-thumb__icon">&#9825;</span></p>';
      return;
    }

    const newData = [...dataFromLS, { ...article }];
    setToLS(FAVORITE_KEY, newData);
    targetBtn.innerHTML =
      '<p class="gallery-thumb__name add">Remove from favorite<span class="gallery-thumb__icon">&#10084;</span></p>';
  }
}

export function checkPresentArticle(id) {
  //кожен хто імпортує собі цю функцію, має також імпортувати ось це
  // import { setToLS, getFromLS } from './local-storage-logic';
  const dataFromLS = getFromLS(FAVORITE_KEY);
  const present = dataFromLS.find(article => article.id === id);
  return present;
}

function onLoadFavoritesPage() {
  const dataFromLS = getFromLS(FAVORITE_KEY);

  if (!dataFromLS.length) {
    notFoundRef.classList.remove('not-found-box-hidden');
    return;
  }

  const newMarkup = markup.createGalleryCardMarkup(dataFromLS);
  if (listArticlesRef === null) return;

  notFoundRef.classList.add('not-found-box-hidden');
  listArticlesRef.innerHTML = newMarkup;

  listArticlesRef.addEventListener('click', onListArticlesClick);
  console.log('nfdbkhvgdj');
}

function onListArticlesClick(event) {
  const targetBtn = event.target.closest('.gallery-thumb__btn');
  console.log('remove click');
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
    const newMarkup = markup.createGalleryCardMarkup(newData);
    listArticlesRef.innerHTML = newMarkup;
    return;
  } else {
    notFoundRef.classList.remove('not-found-box-hidden');
  }
}

onLoadFavoritesPage(); /////треба викликати цю функцію при клікі на посилання Favorite

// notFoundRef.classList.add('not-found-box-hidden');
// if (!dataFromLS.length && notFoundRef !== null) {
//   notFoundRef.innerHTML = `<h2 class="not-found-box__title hidden">You haven't added anything <br> to favorite!</h2>
//  `;
//   return;
/* <picture><source 
srcset="https://www.flickr.com/photos/197971475@N07/52773618182/in/dateposted-public/ 1x, https://www.flickr.com/photos/197971475@N07/52774411229/in/dateposted-public/" 2x" 
type="image/png" 
media="(max-width: 479.98px)"
alt="underfined-picture"/>
<source 
srcset="https://www.flickr.com/photos/197971475@N07/52773621142/in/dateposted-public/, https://www.flickr.com/photos/197971475@N07/52774569180/in/dateposted-public/ 2x" 
type="image/png" 
media="(max-width:767.98px)" 
alt="underfined-picture"/>
<source 
srcset="https://www.flickr.com/photos/197971475@N07/52774412304/in/dateposted-public/ 1x, https://www.flickr.com/photos/197971475@N07/52774150291/in/dateposted-public/ 2x" 
type="image/png" 
media="(min-width: 1279.98px)"
alt="underfined-picture"/>
<img 
class="underfined___picture"
src="https://www.flickr.com/photos/197971475@N07/52773618182/in/dateposted-public.png" 
alt="underfined-picture" 
width="248" 
height="198"/>
</picture> */
