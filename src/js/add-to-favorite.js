import { refs } from '../js/refs/fav-refs';
import {
  saveToLocal,
  loadFromLocal,
  removeFromLocal,
} from '../js/local-storage-logic';
import { renderMarkupGalleryCard } from '../js/renderMarkup';
// import { fetchSearchArticles } from '../js/API/fetchAPI';
import { initFavoriteButton } from '../js/changeBtn';
const KEY_FAVORITE = 'favorite';

// const buttonElement = document.querySelector('.favorite-button');
const favBtn = initFavoriteButton(buttonElement);

favBtn.addEventListener('click', addToFavorites);

// Отримуємо список збережених новин з локального сховища браузера
let favorites = loadFromLocal(KEY_FAVORITE) || [];

// Функція для додавання новини до списку збережених новин
function addToFavorites() {
  if (favorites.length === 0) return;

  refs.text.classList.add('hidden');
  // Перевіряємо, чи новина вже додана до списку збережених новин
  const index = favorites.findIndex(item => item.title === news.title);

  if (index === -1) {
    // Якщо новина не додана до списку, то додаємо її
    favorites.push({
      title: news.title,
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
  // Рендерем новину і додаєм її у список
  let markup = favorites.map(renderMarkupGalleryCard).join('');
  refs.newList.innerHTML = markup;
}

onChangeButton(favorites);

addToFavorites();

// Зберігаємо список збережених новин в локальному сховищі браузера
// localStorage.setItem(KEY_FAVORITE, JSON.stringify(favorites));
