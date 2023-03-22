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