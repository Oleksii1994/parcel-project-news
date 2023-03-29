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
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

//========================================================

import { markupForFavoritesAndRead } from './renderMarkup';
import { refs } from './refs/refs';
import { setToLS, getFromLS } from './local-storage-logic';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { notFoundRef, FAVORITE_KEY, checkLS } from './add-to-favorite';
import { addToReadNews } from './firebace/faribece-for-read';

//========================================================

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const usersRef = ref(database, 'users');

//==============================================================

// import { sendEmailVerification } from 'firebase/auth';
Aos.init();

const READ_KEY = 'read_news';

class AddToRead {
  isHomePage() {
    const homePage = refs.galleryEl;
    if (homePage) {
      return true;
    }
    return false;
  }
  addListenersToHomePage() {
    const linkReadMore = document.querySelectorAll('.thumb__link');
    linkReadMore.forEach(link =>
      link.addEventListener('click', this.#onReadClick)
    );
    // console.log(linkReadMore)
  }

  renderReadPage() {
    //рендер маркапу
    const dataFromLS = getFromLS(READ_KEY);
    const markupTemplate = document.querySelector('#markup-template');
    const template = markupTemplate.innerHTML;
    markupTemplate.remove();
    const result = this.#getDateLocalStorege(dataFromLS);
    this.#generateAccordionHTML(result, template);
    this.#createAccordion();
  }

  #getDateLocalStorege(dataFromLS) {
    const objects = dataFromLS;
    const dates = objects.map(obj => obj.LSDate);
    const uniqueDates = dates.filter(
      (LSDate, index) => dates.indexOf(LSDate) === index
    );
    const result = [];

    uniqueDates.forEach(LSDate => {
      const news = objects.filter(obj => obj.LSDate === LSDate);
      result.push({ LSDate: LSDate, news: news });
    });
    // console.log(result);
    return result;
  }

  #generateAccordionHTML(result, template) {
    const listArticlesRef = document.querySelector('#accordion');
    result.forEach(el => {
      const section = template
        .replaceAll('{{title}}', el.LSDate)
        .replaceAll(
          '{{card}}',
          markupForFavoritesAndRead.createGalleryCardMarkup(el.news)
        );

      const div = document.createElement('div');
      listArticlesRef.appendChild(div);
      div.innerHTML = section;
    });
  }

  #onReadClick(event) {
    const targetItem = event.target.closest('.gallery__item');
    const alreadyReadText = targetItem.querySelector('.gallery-thumb__already'); //Додали з Яною стилі на li щоб з'являлась надпис Alredy Read
    // targetItem.classList.add('gallery__item--background'); //додаємо блюр на картку
    targetItem.style.opacity = '0.7';
    alreadyReadText.classList.add('gallery-thumb__already--show'); //opacity на картку

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
    const LSDate = new Date().toLocaleDateString();
    const url = targetItem.querySelector('.thumb__link').href;
    const article = {
      img: img(),
      title,
      text,
      date,
      id,
      category,
      url,
      LSDate,
    };
    const dataFromLS = getFromLS(READ_KEY) || [];
    // console.log(LSDate);
    // добавляємо в localStorage
    const present = dataFromLS.find(article => article.id === id);

    // console.log(article);

    // ========================================================================
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;
      addToReadNews(article, userId);
    }

    //=========================================================================

    if (!present) {
      setToLS(READ_KEY, [...dataFromLS, article], [LSDate]); // dataFromLS.push(article) // setToLS(READ_KEY, dataFromLS);
    }
  }
  #createAccordion() {
    $('#accordion').accordion({ header: 'h2', collapsible: true, heightStyle: 'panel',autoHeight: false, animated: false,});
  }
}

const instance = new AddToRead(); // створює об'єкт  AddToRead

if (instance.isHomePage()) {
  //перевірка чи знаходишся на homePage
  refs.galleryEl.addEventListener('build', () => {
    instance.addListenersToHomePage(); //опрацьовую клік на readMore
  });
} else {
  instance.renderReadPage(); //малюю readPage
}

const readRefs = {
  readGalleryList: document.querySelector('#read-news-list'),
};

if (document.title === 'Read') {
  onLoadReadPage(readRefs.readGalleryList);
}

function onLoadReadPage(ref) {
  const dataFromLS = getFromLS(READ_KEY);
  const svgA = new URL('../images/icon-card.svg', import.meta.url);
  const svgB = 'icon-like';
  const svgC = 'icon-like-icon';
  const svgD = 'icon-check';
  notFoundRef.classList.add('not-found-box-hidden');
  if (!dataFromLS.length) {
    notFoundRef.classList.remove('not-found-box-hidden');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    return;
  }
  if (ref === null) return;
  ref.addEventListener('click', onGalleryClick);

  // ref.innerHTML = markupForFavoritesAndRead.createGalleryCardMarkup(dataFromLS);

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
    // const user = auth.currentUser;
    // if (user) {
    //   const userId = user.uid;
    //   addOrDeleteFavoriteNews(article, userId, targetBtn);
    // }
    // ===========================================================

    if (present) {
      const newData = dataFromLS.filter(article => article.id !== id);
      setToLS(FAVORITE_KEY, newData);

      // ===========================================================
      // const user = auth.currentUser;
      // if (user) {
      //   const userId = user.uid;
      //   addOrDeleteFavoriteNews(article, userId, targetBtn);
      // }
      // ===========================================================

      targetBtn.innerHTML = `<p class="gallery-thumb__name add">Add to favorite<svg width="16" height="16"><use href="${svgA}#${svgC}"></use></svg></p>`;
      return;
    }

    const newData = [...dataFromLS, { ...article }];
    setToLS(FAVORITE_KEY, newData);
    targetBtn.innerHTML = `<p class="gallery-thumb__name add">Remove from favorite<svg width="16" height="16"><use href="${svgA}#${svgB}"></svg></p>`;
  }
}

// if (!dataFromLS.length && notFoundRef !== null) {
//   notFoundRef.innerHTML = `<h2 class="not-found-title hidden">You haven't added anything to favorite!</h2><img src="https://live.staticflickr.com/65535/52770181328_d91f5366f0_z.jpg">`;
//   return;
// }
