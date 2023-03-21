function noCategory() {
    Notiflix.Notify.failure("We haven't found news from this category.");
  }
    
  function noAddToFavorites() {
    Notiflix.Notify.failure(
      "Sorry, but you haven't added the news to the Favorites."
    );
  }

  function noAddToRead() {
    Notiflix.Notify.failure(
      "Sorry, but you can go to this page when you read the news."
    );
  }

  export {noCategory, noAddToFavorites, noAddToRead}