// export const KEY_FAVORITE = 'favorite'; в константи

// import { renderNews } from './js/renderNews';
// import { fatchNews } from './js/fetchNews';
// import Notiflix from 'notiflix';
// import './css/styles.css';
// import { initFavoriteButton } from './path/to/favorite-button';

// const buttonElement = document.querySelector('.favorite-button');
const favBtn = initFavoriteButton(buttonElement);

// const readMoreLink = document.querySelector('.news-card-read-more a');
favBtn.addEventListener('click', addToFavorite);

// Отримуємо список збережених новин з локального сховища браузера
let favorites = JSON.parse(localStorage.getItem(KEY_FAVORITE)) || [];

// Функція для додавання новини до списку збережених новин
function addToFavorites() {
  // Перевіряємо, чи новина вже додана до списку збережених новин
  const index = favorites.findIndex(item => item.id === news.id);

  if (index === -1) {
    // Якщо новина не додана до списку, то додаємо її
    favorites.push({
      id: news.id,
      date: new Date(),
    });
    // Змінюємо текст кнопки на "RemoveFromFavorite"
    // favBtn.textContent = 'Remove from favorite';
  } else {
    // Якщо новина вже додана до списку, то видаляємо її
    favorites.splice(index, 1);
    // Змінюємо текст кнопки на "AddToFavorite"
    // favBtn.textContent = 'Add to favorite';
  }

  // Зберігаємо список збережених новин в локальному сховищі браузера
  localStorage.setItem(KEY_FAVORITE, JSON.stringify(favorites));
}
renderNews(favorites);
onChangeButton(favorites);
