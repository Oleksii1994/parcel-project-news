import { newsApi } from '../API/fetchAPI';
import { NormalizeData } from '../API/api-data-normalaizer';
import { refs } from '../refs/refs';
import { markup } from '../renderMarkup';
import { Notify } from 'notiflix';

window.addEventListener('load', pageLoadHandler, { once: true });

async function pageLoadHandler() {
  try {
    const data = await newsApi.fetchPopularArticles();
    markup.renderMarkup(
      refs.galleryEl,
      markup.createGalleryCardMarkup(NormalizeData.popularData(data))
    );
  } catch (error) {
    Notify.failure(`${error}`);
  }
}
