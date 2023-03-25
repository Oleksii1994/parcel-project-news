import { newsApi } from '../API/fetchAPI';
import { NormalizeData } from '../API/api-data-normalaizer';
import { refs } from '../refs/refs';
import { markup } from '../renderMarkup';
import { Notify } from 'notiflix';
import { input } from '../newCalendar';
import { selectedDate } from '../newCalendar';
import _debounce from 'debounce';

window.addEventListener('load', pageLoadHandler, { once: true });
input.addEventListener('change', _debounce(onCalendarChange, 1500));

async function pageLoadHandler() {
  try {
    const { results, num_results } = await newsApi.fetchPopularArticles();
    newsApi.newsDataArr = NormalizeData.popularData(results);
    refs.galleryEl.insertAdjacentHTML(
      'beforeend',
      markup.createGalleryCardMarkup(NormalizeData.popularData(results))
    );
  } catch (error) {
    console.log(error);
    Notify.failure(`${error}`);
  }
}

function onCalendarChange(e) {
  const filteredNews = newsApi.newsDataArr.filter(item => {
    const dateString = NormalizeData.formatDateToString(item.date);
    if (selectedDate[1] === '') {
      return dateString === selectedDate[0];
    } else {
      return dateString >= selectedDate[0] && dateString <= selectedDate[1];
    }
  });
  markup.clearMarkup(refs.galleryEl);
  markup.renderMarkup(
    refs.galleryEl,
    markup.createGalleryCardMarkup(filteredNews)
  );
}
