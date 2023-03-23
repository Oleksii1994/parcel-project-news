class FavoriteButton {
  constructor(buttonElement) {
    this.button = buttonElement;
    this.button.classList.add('favorite-btn');
    this.button.addEventListener('click', () => this.onChangeButton());
  }
  onChangeButton() {
    if (this.button.classList.contains('delete-button')) {
      this.setToFavorite();
    } else if (this.button.classList.contains('add-button')) {
      this.removeFromFavorite();
    }
  }

  setToFavorite() {
    this.button.textContent = 'Add to favorite';
    this.button.classList.remove('delete-button');
    this.button.classList.add('add-button');
  }

  removeFromFavorite() {
    this.button.textContent = 'Remove from favorite';
    this.button.classList.remove('add-button');
    this.button.classList.add('delete-button');
  }
}

export function initFavoriteButton(buttonElement) {
  return new FavoriteButton(buttonElement);
}


// import { initFavoriteButton } from "../js/changeBtn";

// function renderGalleryCards(cardsData) {
//   const cardsContainer = document.querySelector(".gallery__item-container");
//   cardsContainer.innerHTML = cardsData.map(renderMarkupGalleryCard).join("");

//   cardsData.forEach((cardData) => {
//     const cardElement = document.getElementById(cardData.id);
//     const favoriteButtonElement = cardElement.querySelector(".favorite-btn");
//     initFavoriteButton(favoriteButtonElement);
//   });
// }

// // Замініть `cardsData` на масив об'єктів з даними карточок
// const cardsData = [
//   // ...
// ];

// renderGalleryCards(cardsData);