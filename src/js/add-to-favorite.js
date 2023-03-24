// import { NewsAPIService } from './API/fetchAPI';
// import { NormalizeData } from './API/api-data-normalaizer';
// import { renderMarkupGalleryCard } from './renderMarkup';
// import { refs } from './refs/fav-refs';
// // import { pageLoadHandler } from './render news gallery/render-news-gallery';
// import { saveToLocal, loadFromLocal } from './local-storage-logic';

// const FAVORITE_KEY = 'favorite_news';

// window.addEventListener('load', () => {
//   if (refs.newBtn) {
//     refs.newBtn.addEventListener('click', addToFavorite);
//   } else {
//     console.error('Element with id "newBtn" not found');
//   }
// });
// function addToFavorite(news) {
//   let favoriteNews = loadFromLocal(FAVORITE_KEY) || [];
//    favoriteNews.push(news);
//   saveToLocal(FAVORITE_KEY, favoriteNews);
// }

// function removeFromFavorite(newsId) {
//   let favoriteNews = loadFromLocal(FAVORITE_KEY) || [];
//   const updatedFavoriteNews = favoriteNews.filter(news => news.id !== newsId);
//   saveToLocal(FAVORITE_KEY, updatedFavoriteNews);
// }

// function renderFavoriteNews() {
//   const favoriteNews = loadFromLocal(FAVORITE_KEY) || [];
//   const markUp = favoriteNews.map(news => renderMarkupGalleryCard(news)).join('');
//   refs.newsList.innerHTML = markUp;
// }

// function onAddToFavoriteClick(event) {
//   const btn = event.target.closest('.gallery-thumb__btn');
//   if (!btn) return;

//   const newsElement = btn.closest('.gallery__item');
//   const news = {
//     id: newsElement.dataset.id,
//     // id: btn.parentNode.parentNode.id,
//     // img: btn.parentNode.childNodes[1].attributes.src.nodeValue,
//     // category: btn.parentNode.childNodes[3].innerText,
//     // title: btn.parentNode.parentNode.childNodes[3].children[0].innerText,
//     // description: btn.parentNode.parentNode.childNodes[3].children[1].innerText,
//     // date: btn.parentNode.parentNode.lastElementChild.children[0].innerText,
//     // link: btn.parentNode.parentNode.lastElementChild.children[1].attributes[2]
//     //   .value,
//   };

//   addToFavorite(news);
//   btn.classList.add('remove');
// }

// function onRemoveFromFavoriteClick(event) {
//   const btn = event.target.closest('.gallery-thumb__btn');
//   if (!btn) return;

//   const newsElement = btn.closest('.gallery__item');
//   const newsId = newsElement.dataset.id;
  
//   removeFromFavorite(newsId);
//   newsElement.remove();
// }

// // refs.galleryEl.addEventListener('click', event => {
// //   onAddToFavoriteClick(event);
// //   onRemoveFromFavoriteClick(event);
// // });

// renderFavoriteNews();
// onAddToFavoriteClick(event);
// onRemoveFromFavoriteClick(event);










// newsList.addEventListener('click', btnAddToFavorite);
// let newLocalStorage = [];

// function isLocalEmpty() {
//   if (JSON.parse(localStorage.getItem('newsSection')) === null) {
//     newLocalStorage = [];
//     return;
//   }
//   newLocalStorage = JSON.parse(localStorage.getItem('newsSection'));
// }
// isLocalEmpty();

// function addToFavorite(event) {
//   const btn = event.target.closest(`.gallery-thumb__btn`);
//   if (!btn) return;
//   isLocalEmpty();
//   let uri =
//     btn.parentNode.nextElementSibling.nextElementSibling.lastElementChild
//       .textContent;
//   if (!btn.classList.contains('remove')) {
//     btn.classList.add('remove');
//     addToFavoriteLocal(btn);
//     return;
//   }
//   btn.classList.remove('remove');
//   for (let i = 0; i < newLocalStorage.length; i += 1) {
//     if (newLocalStorage[i].uri === uri) {
//       newLocalStorage.splice(i, 1);
//     }
//   }
//   localStorage.setItem(`newsSection`, JSON.stringify(newLocalStorage));
// }

// function addToFavoriteLocal(btn) {
//   const newsSection = {
//     id: btn.parentNode.parentNode.id,
//     img: btn.parentNode.childNodes[1].attributes.src.nodeValue,
//     category: btn.parentNode.childNodes[3].innerText,
//     title: btn.parentNode.parentNode.childNodes[3].children[0].innerText,
//     description: btn.parentNode.parentNode.childNodes[3].children[1].innerText,
//     date: btn.parentNode.parentNode.lastElementChild.children[0].innerText,
//     link: btn.parentNode.parentNode.lastElementChild.children[1].attributes[2]
//       .value,
//     favorite: 'true',
//     uri: btn.parentNode.nextElementSibling.nextElementSibling.lastElementChild
//       .textContent,
//   };
//   for (let i = 0; i < newLocalStorage.length; i += 1) {
//     if (newLocalStorage[i].uri === newsSection.uri) return;
//   }

//   newLocalStorage.push(newsSection);
//   localStorage.setItem(`newsSection`, JSON.stringify(newLocalStorage));
// }

// refs.newBtn.addEventListener('click', addToFavorite);








// // import { NewsAPIService } from '../API/fetchAPI';
// // import { NormalizeData } from '../API/api-data-normalaizer';
// import { renderMarkupGalleryCard } from './renderMarkup';
// import { refs } from './refs/fav-refs';
// import { pageLoadHandler } from './render news gallery/render-news-gallery';
// import {
//   // saveToLocal,
//   loadFromLocal,
//   // removeFromLocal,
// } from './local-storage-logic';
// // import { initFavoriteButton } from './changeBtn';

// // ідентифікатор ключа, щоб зберігати обрані новини в локальному сховищі
// const FAVORITE_KEY = 'favorite_news';

// refs.newBtn.addEventListener('click', addToFavorite);
// // let newLocalStorage = [];
// // Функція для додавання новини до обраного списку
// function addToFavorite(news) {
//   let favoriteNews = loadFromLocal(FAVORITE_KEY) || [];
//   favoriteNews.push(news);
//   saveToLocal(FAVORITE_KEY, favoriteNews);
// }
// renderFavoriteNews();
// // Функція для видалення новини з обраного списку
// function removeFromFavorite(newsId) {
//   let favoriteNews = loadFromLocal(FAVORITE_KEY) || [];
//   const updatedFavoriteNews = favoriteNews.filter(news => news.id !== newsId);
//   saveToLocal(FAVORITE_KEY, updatedFavoriteNews);
// }

// // Функція для відображення обраних новин на сторінці
// // window.addEventListener('load', renderFavoriteNews);
// function renderFavoriteNews() {
//   const favoriteNews = loadFromLocal(FAVORITE_KEY) || [];
//   const markUp = favoriteNews
//     .map(news => renderMarkupGalleryCard(news))
//     .join('');
//   refs.galleryEl.innerHTML = markUp;
// }

// // Додаєм обробник подій для кнопки "Add to favorite"
// function onAddToFavoriteClick(event) {
//   if (event.target.closest('.box__btn')) {
//     const newsElement = event.target.closest('.gallery__item');
//     const news = {
//       id: newsElement.dataset.id,
//       // Add other properties like title, img, etc.
//     };
//     addToFavorite(news);
//     newsElement
//       .querySelector('.gallery-thumb__btn')
//       .classList.add('hidden');
//     newsElement
//       .querySelector('.gallery-thumb__btn')
//       .classList.remove('hidden');
//   }
// }

// // Додаєм обробник подій для кнопки "Remove from favorite"
// function onRemoveFromFavoriteClick(event) {
//   if (event.target.closest('.gallery-thumb__btn')) {
//     const newsElement = event.target.closest('.gallery__item');
//     const newsId = newsElement.dataset.id;
//     removeFromFavorite(newsId);
//     newsElement.remove();
//   }
// }

// refs.galleryEl.addEventListener('click', event => {
//   onAddToFavoriteClick(event);
//   onRemoveFromFavoriteClick(event);
// });

// // const buttonElement = document.querySelector('.favorite-button');
// const favBtn = initFavoriteButton(buttonElement);

// favBtn.addEventListener('click', addToFavorites);

// // Отримуємо список збережених новин з локального сховища браузера
// let favorites = loadFromLocal(KEY_FAVORITE) || [];

// // Функція для додавання новини до списку збережених новин
// function addToFavorites() {
//   if (favorites.length === 0) return;

//   refs.text.classList.add('hidden');
//   // Перевіряємо, чи новина вже додана до списку збережених новин
//   const index = favorites.findIndex(item => item.title === news.id);

//   if (index === -1) {
//     // Якщо новина не додана до списку, то додаємо її
//     favorites.push({
//       id: news.id,
//       date: new Date(),
//     });
//     // Змінюємо текст кнопки на "RemoveFromFavorite"
//     // favBtn.textContent = 'Remove from favorite';
//   } else {
//     // Якщо новина вже додана до списку, то видаляємо її
//     favorites.splice(index, 1);
//     // Змінюємо текст кнопки на "AddToFavorite"
//     // favBtn.textContent = 'Add to favorite';
//   }
//   // Рендерем новину і додаєм її у список
//   let markup = favorites.map(renderMarkupGalleryCard).join('');
//   refs.newList.innerHTML = markup;
// }

// onChangeButton(favorites);

// addToFavorites();

// // Зберігаємо список збережених новин в локальному сховищі браузера
// // localStorage.setItem(KEY_FAVORITE, JSON.stringify(favorites));
