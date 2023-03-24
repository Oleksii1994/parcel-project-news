import { NewsAPIService } from '../API/fetchAPI';
import { NormalizeData } from '../API/api-data-normalaizer';
import { renderMarkupGalleryCard } from '../renderMarkup';
import { refs } from '../refs/refs';

const newsApi = new NewsAPIService();

window.addEventListener('load', pageLoadHandler, { once: true });

async function pageLoadHandler() {
  try {
    const data = await newsApi.fetchPopularArticles();
    const markUp = renderMarkupGalleryCard(NormalizeData.popularData(data));
    refs.galleryEl.innerHTML = markUp;
  } catch (error) {}
}
