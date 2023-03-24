import { NormalizeData } from './api-data-normalaizer';
import { selectedDate } from '../newCalendar';

class NewsAPIService {
  #BASE_URL = 'https://api.nytimes.com/svc/';
  #SEARCH_NEWS_PATH = 'search/v2/articlesearch.json?';
  #API_KEY = 'kkEdLmiWAben4vvAV9iKuhykdEAlksXW';
  #MOST_POPULAR_NEWS_PATH = `mostpopular/v2/viewed/7.json?`;

  constructor() {
    this.searchQuery = '';
    this.filterQuery = '';
    this.category = 'all';
    this.currentPage = 1;
    this.selectedDate = '';
    this.period = '7';
    this.date = selectedDate;
  }

  async fetchSearchArticles() {
    const searchParams = new URLSearchParams({
      q: this.searchQuery,
      'api-key': this.#API_KEY,
      page: this.currentPage,
      // begin_date: this.date,
    });

    const URL = `${this.#BASE_URL}${
      this.#SEARCH_NEWS_PATH
    }${new URLSearchParams(searchParams)}`;
    const response = await fetch(URL);
    this.errorHandle(response);
    this.incrementPage();
    const {
      response: { docs, meta },
    } = await response.json();
    return { docs, meta };
  }

  async fetchPopularArticles() {
    const URL = `${this.#BASE_URL}mostpopular/v2/viewed/${
      this.period
    }.json?api-key=${this.#API_KEY}`;
    console.log(URL);
    const response = await fetch(URL);
    this.errorHandle(response, response.statusText);
    const { results } = await response.json();
    return results;
  }

  async fetchArticlesByCategory() {
    const SEARCH_BY_CATEGORY_PATH = `news/v3/content/nyt/${this.category}.json?`;
    const URL = `${this.#BASE_URL}${SEARCH_BY_CATEGORY_PATH}api-key=${
      this.#API_KEY
    }`;
    const response = await fetch(URL);
    this.errorHandle(response, response.statusText);
    const { results } = await response.json();
    console.log(selectedDate);
    return results;
  }

  errorHandle(response, error) {
    if (!response.ok) {
      throw new Error(`Sorry, an error occurred: ${error}`);
    }
  }

  incrementPage() {
    this.currentPage += 1;
  }

  resetPage() {
    this.currentPage = 1;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get query() {
    return this.searchQuery;
  }

  get page() {
    return this.currentPage;
  }

  set page(newPage) {
    this.currentPage = newPage;
  }
}

// tests
// console.log(selectedDate);
export const newsApi = new NewsAPIService();
// newsApi.query = 'covid';
// newsApi.fetchSearchArticles();
// newsApi.fetchCategories();
// newsApi.fetchPopularArticles();
// newsApi.fetchArticlesByCategory();
