export function renderMarkupGalleryCard(arr) {
  return arr
    .map(
      ({
        img,
        title,
        text,
        date,
        id,
        category,
        url,
      }) => `<li id="${id}" class="gallery__item">
  <div class="gallery-thumb" style="background-image: url('${img}')">
      <p class="gallery-thumb__subtitle">${category}</p>
      <p class="gallery-thumb__already">
        Already read
        <svg width="18" height="18">
          <use href="./images/icon-card.svg#icon-check"></use>
        </svg>
      </p>
    <button type="button" class="gallery-thumb__btn">
      <p class="gallery-thumb__name add" 
        >Add to favorite
        <svg width="16" height="16">
          <use href="./images/icon-card.svg#icon-like-icon"></use>
        </svg>
      </p>
      <p class="gallery-thumb__name remove"
        >Remove from favorite
        <svg width="16" height="16">
          <use href="./images/icon-card.svg#icon-like-icon"></use>
        </svg>
      </p>
    </button>
  </div>
    <h3 class="gallery__title">${title}</h3>
    <p class="gallery__text">${text}</p>
      <div class="thumb">
        <p class="thumb__text">${date}</p>
        <a class="thumb__link" href="${url}" target="_blank">Read more</a>
      </div>
</li>`
    )
    .join('');
}

// export { renderMarkupGalleryCard }
// function renderMarkupGalleryCard({ img, title, text, date, id, categorie }) {
//   return `<li id="${id}" class="gallery__item">
//   <div class="box">
//     <img src="${img}" class="box__img"/>
//       <p class="box__subtitle">${categorie}</p>
//       <p class="box__already">
//         Already read
//         <svg width="18" height="18">
//           <use href="./images/icon-card.svg#icon-check"></use>
//         </svg>
//       </p>
//     <button type="button" class="box__btn favorite-btn">
//       <span class="box__text add-button"
//         >Add to favorite
//         <svg width="16" height="16" class="box__icon favorite-icon">
//           <use href="./images/icon-card.svg#icon-like-icon"></use>
//         </svg>
//       </span>
//       <span class="box__text delete-button"
//         >Remove from favorite
//         <svg width="16" height="16" class="box__icon remove-icon">
//           <use href="./images/icon-card.svg#icon-like-icon"></use>
//         </svg>
//       </span>
//     </button>
//   </div>
//     <h3 class="gallery__title">${title}</h3>
//     <p class="gallery__text">${text}</p>
//       <div class="thumb">
//         <p class="thumb__text">${date}</p>
//         <a class="thumb__link" href="" target="_blank">Read more</a>
//       </div>
// </li>`;
// }
