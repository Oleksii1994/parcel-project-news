import { newsApi } from '../API/fetchAPI';
import { NormalizeData } from '../API/api-data-normalaizer';
import { refs } from '../refs/refs';
import { markup } from '../renderMarkup';
import { Notify } from 'notiflix';
import { input } from '../newCalendar';

window.addEventListener('load', pageLoadHandler, { once: true });
input.addEventListener('change', onCalendarChange);

async function pageLoadHandler() {
  try {
    const { results, num_results } = await newsApi.fetchPopularArticles();
    refs.galleryEl.insertAdjacentHTML(
      'beforeend',
      markup.createGalleryCardMarkup(NormalizeData.popularData(results))
    );
  } catch (error) {
    console.log(error);
    Notify.failure(`${error}`);
  }
}

function onCalendarChange(e) {}
