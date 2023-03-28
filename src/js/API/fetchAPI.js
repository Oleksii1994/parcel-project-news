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
  #per_page = 5;
  #totalHits = 0;
  #totalButtons = 0;
  #num_results = 0;

  constructor() {
    this.searchQuery = '';
    this.category = 'all';
    this.currentPage = 0;
    this.beginDate = '';
    this.endDate = '';
    this.updateSearchParams = true;
    this.catCurrentPage = 0;
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
    this.incrementPage();
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
    this.setPerCategoryPage();
    const params = new URLSearchParams({
      offset: this.catCurrentPage,
      limit: this.#per_page,
    });
    const SEARCH_BY_CATEGORY_PATH = `news/v3/content/nyt/${this.category}.json?`;
    const URL = `${this.#BASE_URL}${SEARCH_BY_CATEGORY_PATH}api-key=${
      this.#API_KEY
    }&${params}`;
    const response = await fetch(URL);
    // this.incrementCatPage();
    this.errorHandle(response, response.statusText);
    const { results, num_results } = await response.json();
    this.#num_results = num_results;
    this.#totalButtons = this.setTotalButtons();
    this.#newsDataArr = NormalizeData.categoryData(results);
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

  resetCatPage() {
    this.catCurrentPage = 0;
  }

  resetPage() {
    this.currentPage = 0;
  }

  updateParams() {
    if (this.beginDate !== '' && this.endDate !== '') {
      Object.assign(this.#searchParams, {
        q: this.searchQuery,
        page: this.currentPage,
        begin_date: this.beginDate,
        end_date: this.endDate,
      });
    } else if (this.beginDate !== '' && this.endDate === '') {
      Object.assign(this.#searchParams, {
        q: this.searchQuery,
        page: this.currentPage,
        begin_date: this.beginDate,
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
    let totalHits = Math.ceil(this.#hits / 10);
    if (totalHits > 200) {
      totalHits = 200;
      return totalHits;
    } else {
      return totalHits;
    }
  }

  setTotalButtons() {
    let totalButtons = Math.floor(this.#num_results);
    if (totalButtons > 200) {
      totalButtons = 200;
      return totalButtons;
    } else {
      return totalButtons;
    }
  }

  encodeCategory(category) {
    if (category.includes(' ')) {
      return encodeURIComponent(category);
    } else {
      return category;
    }
  }

  setPerCategoryPage() {
    if (
      window.matchMedia('(min-width: 320px)').matches &&
      window.matchMedia('(max-width: 767px)').matches
    ) {
      return (this.#per_page = 5);
    } else if (
      window.matchMedia('(min-width: 768px)').matches &&
      window.matchMedia('(max-width: 1279px)').matches
    ) {
      return (this.#per_page = 8);
    } else if (window.matchMedia('(min-width: 1280px)').matches) {
      return (this.#per_page = 9);
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

  get totalHits() {
    return this.#totalHits;
  }

  get totalButtons() {
    return this.#totalButtons;
  }

  get catPerPage() {
    return this.#per_page;
  }

  get numResults() {
    return this.#num_results;
  }
}

export const newsApi = new NewsAPIService();
