import { NormalizeData } from './api-data-normalaizer';

class NewsAPIService {
  #BASE_URL = 'https://api.nytimes.com/svc/';
  #SEARCH_NEWS_PATH = 'search/v2/articlesearch.json?';
  #API_KEY = 'kkEdLmiWAben4vvAV9iKuhykdEAlksXW';
  #searchParams = {
    q: this.searchQuery,
    'api-key': this.#API_KEY,
    page: this.currentPage,
    sort: 'newest',
  };
  #newsDataArr = [];
  #hits;
  #per_page = 10;
  #totalHits = 0;

  constructor() {
    this.searchQuery = '';
    this.category = 'all';
    this.currentPage = 0;
    this.beginDate = '';
    this.endDate = '';
    this.updateSearchParams = true;
  }

  async fetchSearchArticles() {
    this.updateParams();

    const URL = `${this.#BASE_URL}${
      this.#SEARCH_NEWS_PATH
    }${new URLSearchParams(this.#searchParams)}`;
    const response = await fetch(URL);
    this.errorHandle(response);
    const {
      response: { docs, meta },
    } = await response.json();
    console.log(URL);
    console.log(meta);
    this.#hits = meta.hits;
    this.#totalHits = this.setTotalHits();
    this.#newsDataArr = NormalizeData.searchData(docs);
    return { docs, meta };
  }

  async fetchPopularArticles() {
    const URL = `${this.#BASE_URL}mostpopular/v2/viewed/30.json?api-key=${
      this.#API_KEY
    }`;
    const response = await fetch(URL);
    this.errorHandle(response, response.statusText);
    const { results, num_results } = await response.json();
    return { results, num_results };
  }

  async fetchArticlesByCategory() {
    const SEARCH_BY_CATEGORY_PATH = `news/v3/content/nyt/${this.category}.json?`;
    const URL = `${this.#BASE_URL}${SEARCH_BY_CATEGORY_PATH}api-key=${
      this.#API_KEY
    }`;
    const response = await fetch(URL);
    this.errorHandle(response, response.statusText);
    const { results } = await response.json();
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
    this.currentPage = 0;
  }

  updateParams() {
    if (this.beginDate !== '') {
      Object.assign(this.#searchParams, {
        q: this.searchQuery,
        page: this.currentPage,
        begin_date: this.beginDate,
        end_date: this.endDate,
      });
    } else {
      Object.assign(this.#searchParams, {
        q: this.searchQuery,
        page: this.currentPage,
      });
    }
  }

  resetHits() {
    this.#hits = 0;
  }

  setTotalHits() {
    let totalHits = Math.ceil(this.#hits / this.#per_page);
    if (totalHits > 200) {
      totalHits = 200;
      return totalHits;
    } else {
      return totalHits;
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

  get startDate() {
    return this.beginDate;
  }

  set startDate(newDate) {
    this.beginDate = newDate;
  }

  get finishDate() {
    return this.endDate;
  }

  set finishDate(newDate) {
    this.endDate = newDate;
  }

  get newsDataArr() {
    return this.#newsDataArr;
  }

  set newsDataArr(arr) {
    this.#newsDataArr = arr;
  }

  get currentCategory() {
    return this.category;
  }

  set currentCategory(newCategory) {
    this.category = newCategory;
  }

  get hits() {
    return this.#hits;
  }

  set hits(newHits) {
    this.#hits = newHits;
  }

  get perPage() {
    return this.#per_page;
  }

  set perPage(newPage) {
    this.perPage = newPage;
  }

  get totalHits() {
    return this.#totalHits;
  }
}

export const newsApi = new NewsAPIService();

// tests
// console.log(selectedDate);
// newsApi.query = 'covid';
// newsApi.fetchSearchArticles();
// newsApi.fetchCategories();
// newsApi.fetchPopularArticles();
// newsApi.fetchArticlesByCategory();

// get interval() {
//   return this.period;
// }

// set interval(date) {
//   const currentDate = new Date();
//   const formattedDate = `${currentDate.getFullYear()}${String(
//     currentDate.getMonth() + 1
//   ).padStart(2, '0')}${String(currentDate.getDay() + 1).padStart(2, '0')}`;
//   this.period = formattedDate - date;
// }
