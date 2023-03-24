// import { NewsAPIService } from '../API/fetchAPI';
// import { NormalizeData } from '../API/api-data-normalaizer';
import { renderMarkupGalleryCard } from './renderMarkup';
import { refs } from './refs/fav-refs';
import {
  // saveToLocal,
  loadFromLocal,
  // removeFromLocal,
} from './local-storage-logic';
// import { initFavoriteButton } from './changeBtn';

// ідентифікатор ключа, щоб зберігати обрані новини в локальному сховищі
const FAVORITE_KEY = 'favorite_news';

// Функція для додавання новини до обраного списку
function addToFavorite(news) {
  let favoriteNews = loadFromLocal(FAVORITE_KEY) || [];
  favoriteNews.push(news);
  saveToLocal(FAVORITE_KEY, favoriteNews);
}

// Функція для видалення новини з обраного списку
function removeFromFavorite(newsId) {
  let favoriteNews = loadFromLocal(FAVORITE_KEY) || [];
  const updatedFavoriteNews = favoriteNews.filter(news => news.id !== newsId);
  saveToLocal(FAVORITE_KEY, updatedFavoriteNews);
}

// Функція для відображення обраних новин на сторінці
window.addEventListener('load', renderFavoriteNews);
function renderFavoriteNews() {
  const favoriteNews = loadFromLocal(FAVORITE_KEY) || [];
  const markUp = favoriteNews.map(news => renderMarkupGalleryCard(news)).join('');
  refs.galleryEl.innerHTML = markUp;
}

// Додаєм обробник подій для кнопки "Add to favorite"
function onAddToFavoriteClick(event) {
  if (event.target.closest('.box__btn')) {
    const newsElement = event.target.closest('.gallery__item');
    const news = {
      id: newsElement.dataset.id,
      // Add other properties like title, img, etc.
    };
    addToFavorite(news);
    newsElement.querySelector('.add-to-favorite-button').classList.add('hidden');
    newsElement.querySelector('.remove-from-favorite-button').classList.remove('hidden');
  }
}

// Додаєм обробник подій для кнопки "Remove from favorite"
function onRemoveFromFavoriteClick(event) {
  if (event.target.closest('.remove-from-favorite-button')) {
    const newsElement = event.target.closest('.gallery__item');
    const newsId = newsElement.dataset.id;
    removeFromFavorite(newsId);
    newsElement.remove();
  }
}

refs.galleryEl.addEventListener('click', event => {
  onAddToFavoriteClick(event);
  onRemoveFromFavoriteClick(event);
});



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
