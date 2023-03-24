import { NormalizeData } from './api-data-normalaizer';
import { selectedDate } from '../newCalendar';

export class NewsAPIService {
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
  }

  async fetchSearchArticles() {
    const searchParams = new URLSearchParams({
      q: this.searchQuery,
      fq: this.filterQuery,
      'api-key': this.#API_KEY,
      page: this.currentPage,
    });
    const URL = `${this.#BASE_URL}${
      this.#SEARCH_NEWS_PATH
    }${new URLSearchParams(searchParams)}`;
    const response = await fetch(URL);
    this.errorHandle(response);
    const {
      response: { docs, meta },
    } = await response.json();
    return { docs, meta };
  }

  async fetchPopularArticles() {
    const URL = `${this.#BASE_URL}mostpopular/v2/viewed/${
      this.period
    }.json?api-key=${this.#API_KEY}`;
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
console.log(selectedDate);
const testNewsApi = new NewsAPIService();
testNewsApi.query = 'covid';
// testNewsApi.fetchSearchArticles();
// testNewsApi.fetchCategories();
// testNewsApi.fetchPopularArticles();
testNewsApi.fetchArticlesByCategory();
