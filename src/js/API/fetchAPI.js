import { NormalizeData } from './api-data-normalaizer';

class NewsAPIService {
  #BASE_URL = 'https://api.nytimes.com/svc/';
  #SEARCH_NEWS_PATH = 'search/v2/articlesearch.json?';
  #API_KEY = 'kkEdLmiWAben4vvAV9iKuhykdEAlksXW';
  #searchParams = {
    q: this.searchQuery,
    'api-key': this.#API_KEY,
    page: this.currentPage,
  };
  #newsDataArr = [];

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
    this.incrementPage();
    const {
      response: { docs, meta },
    } = await response.json();
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
    this.currentPage = 1;
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
