import { newsApi } from '../API/fetchAPI';
import { NormalizeData } from '../API/api-data-normalaizer';
import { refs } from '../refs/refs';
import { markup } from '../renderMarkup';
import { Notify } from 'notiflix';

window.addEventListener('load', pageLoadHandler, { once: true });

async function pageLoadHandler() {
  try {
    const { results, num_results } = await newsApi.fetchPopularArticles();
    markup.renderMarkup(
      refs.galleryEl,
      markup.createGalleryCardMarkup(NormalizeData.popularData(results))
    );
  } catch (error) {
    Notify.failure(`${error}`);
  }
}
