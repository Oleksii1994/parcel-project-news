class NewsAPIService {
  #BASE_URL = 'https://api.nytimes.com/svc/';
  #SEARCH_NEWS_PATH = 'search/v2/articlesearch.json?';
  #CATEGORIES_PATH = 'news/v3/content/section-list.json?';
  #API_KEY = 'kkEdLmiWAben4vvAV9iKuhykdEAlksXW';
  #MOST_POPULAR_NEWS_PATH = `mostpopular/v2/viewed/7.json?`;

  constructor() {
    this.searchQuery = '';
    this.filterQuery = '';
    this.category = 'all';
    this.currentPage = 1;
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

  async fetchCategories() {
    const URL = `${this.#BASE_URL}${this.#CATEGORIES_PATH}api-key=${
      this.#API_KEY
    }`;
    const response = await fetch(URL);
    this.errorHandle(response, response.statusText);
    const { results } = await response.json();
    return results;
  }

  async fetchPopularArticles() {
    const URL = `${this.#BASE_URL}${this.#MOST_POPULAR_NEWS_PATH}api-key=${
      this.#API_KEY
    }`;
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
// const newsApi = new NewsAPIService();
// newsApi.query = 'covid';
// newsApi.fetchSearchArticles();
// newsApi.fetchCategories();
// newsApi.fetchPopularArticles();
// newsApi.fetchArticlesByCategory();
