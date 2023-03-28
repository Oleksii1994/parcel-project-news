import { checkPresentArticle } from './add-to-favorite';
import { setToLS, getFromLS } from './local-storage-logic';

export const markup = {
  createGalleryCardMarkup(arr) {
    const svgA = new URL('../images/icon-card.svg', import.meta.url);
    const svgB = 'icon-like';
    const svgC = 'icon-like-icon';
    const svgD = 'icon-check';
    return arr.map(({ img, title, text, date, id, category, url }, index) => {
      return `
      <li id="${id}" class="gallery__item">
        <div class="gallery-thumb" style="background-image: url('${img}')">
          <p class="gallery-thumb__subtitle">${category}</p>
          <p class="gallery-thumb__already">
            Already read
            <svg width="18" height="18"><use href="${svgA}#${svgD}"></use></svg>
          </p>
          ${
            checkPresentArticle(id)
              ? `<button type="button" class="gallery-thumb__btn"><span class="gallery-thumb__name add">Remove from favorite<svg width="16" height="16"><use href="${svgA}#${svgB}"></use></svg></span></button>`
              : `<button type="button" class="gallery-thumb__btn"><span class="gallery-thumb__name add">Add to favorite<svg width="16" height="16"><use href="${svgA}#${svgC}"></use></svg></span></button>`
          }
        </div>
        <h3 class="gallery__title">${title}</h3>
        <p class="gallery__text">${text}</p>
          <div class="thumb">
            <p class="thumb__text">${date}</p>
            <a class="thumb__link" href="${url}" target="_blank">Read more</a>
          </div>
      </li>`;
    });
  },

  clearMarkup(ref) {
    ref.innerHTML = '';
  },

  renderMarkup(ref, markup) {
    ref.insertAdjacentHTML('beforeend', markup);
  },
};

export const markupForFavoritesAndRead = {
  createGalleryCardMarkup(arr) {
    const svgA = new URL('../images/icon-card.svg', import.meta.url);
    const svgB = 'icon-like';
    const svgC = 'icon-like-icon';
    return arr
      .map(({ img, title, text, date, id, category, url }) => {
        return `<li id="${id}" class="gallery__item">
  <div class="gallery-thumb" style="background-image: url('${img}')">
      <p class="gallery-thumb__subtitle">${category}</p>
      <p class="gallery-thumb__already">
        Already read
      </p>
    ${
      checkPresentArticle(id)
        ? `<button type="button" class="gallery-thumb__btn"><span class="gallery-thumb__name add">Remove from favorite<svg class="gallery-thumb__icon" width="16" height="16"><use href="${svgA}#${svgB}"></use></svg></span></button>`
        : `<button type="button" class="gallery-thumb__btn"><span class="gallery-thumb__name add">Add to favorite<svg class="gallery-thumb__icon" width="16" height="16"><use href="${svgA}#${svgC}"></use></svg></span></button>`
    }
  </div>
    <h3 class="gallery__title">${title}</h3>
    <p class="gallery__text">${text}</p>
      <div class="thumb">
        <p class="thumb__text">${date}</p>
        <a class="thumb__link" href="${url}" target="_blank">Read more</a>
      </div>
</li>`;
      })
      .join('');
  },

  clearMarkup(ref) {
    ref.innerHTML = '';
  },

  renderMarkup(ref, markup) {
    ref.insertAdjacentHTML('beforeend', markup);
  },

  renderMarkupBefore(ref, markup) {
    ref.insertAdjacentHTML('beforebegin', markup);
  },
};

export function addWeatherMarkup(arr) {
  const weatherMarkup = `<li class="weather">
  <div class="weather-box"></div>
  <button class="weather-button">Weather for Week</button>
</li>`;
  if (
    window.matchMedia('(min-width: 320px)').matches &&
    window.matchMedia('(max-width: 767px)').matches
  ) {
    return arr.splice(0, 0, weatherMarkup);
  } else if (
    window.matchMedia('(min-width: 768px)').matches &&
    window.matchMedia('(max-width: 1279px)').matches
  ) {
    return arr.splice(1, 0, weatherMarkup);
  } else if (window.matchMedia('(min-width: 1280px)').matches) {
    return arr.splice(2, 0, weatherMarkup);
  }
}
