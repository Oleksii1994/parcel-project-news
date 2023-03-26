import { checkPresentArticle } from './add-to-favorite';
import { setToLS, getFromLS } from './local-storage-logic';

export const markup = {
  createGalleryCardMarkup(arr) {
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
      </p>
    ${
      checkPresentArticle(id)
        ? '<button type="button" class="gallery-thumb__btn"><p class="gallery-thumb__name add">Remove from favorite<span class="gallery-thumb__icon">&#10084;</span></p></button>'
        : '<button type="button" class="gallery-thumb__btn"><p class="gallery-thumb__name add">Add to favorite<span class="gallery-thumb__icon">&#9825;</span></p></button>'
    }
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
  },

  clearMarkup(ref) {
    ref.innerHTML = '';
  },

  renderMarkup(ref, markup) {
    ref.insertAdjacentHTML('beforeend', markup);
  },
};

// export const markup = {
//   createGalleryCardMarkup(arr) {
//     return arr
//       .map(
//         ({
//           img,
//           title,
//           text,
//           date,
//           id,
//           category,
//           url,
//         }) => `<li id="${id}" class="gallery__item">
//   <div class="gallery-thumb" style="background-image: url('${img}')">
//       <p class="gallery-thumb__subtitle">${category}</p>
//       <p class="gallery-thumb__already">
//         Already read
//         <svg width="18" height="18">
//           <use href="./images/icon-card.svg#icon-check"></use>
//         </svg>
//       </p>
//     <button type="button" class="gallery-thumb__btn">
//       <p class="gallery-thumb__name add"
//         >Add to favorite
//         <svg width="16" height="16">
//           <use href="./images/icon-card.svg#icon-like-icon"></use>
//         </svg>
//       </p>
//       <p class="gallery-thumb__name remove"
//         >Remove from favorite
//         <svg width="16" height="16">
//           <use href="./images/icon-card.svg#icon-like-icon"></use>
//         </svg>
//       </p>
//     </button>
//   </div>
//     <h3 class="gallery__title">${title}</h3>
//     <p class="gallery__text">${text}</p>
//       <div class="thumb">
//         <p class="thumb__text">${date}</p>
//         <a class="thumb__link" href="${url}" target="_blank">Read more</a>
//       </div>
// </li>`
//       )
//       .join('');
//   },

//   clearMarkup(ref) {
//     ref.innerHTML = '';
//   },

//   renderMarkup(ref, markup) {
//     ref.insertAdjacentHTML('beforeend', markup);
//   },
// };
