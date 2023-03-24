import { refs } from './refs/refs';

refs.formSearch.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();

  const value = event.currentTarget.elements.searchValue.value.trim();

  const options = {
    headers: {},
  };

  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&api-key=yourkey`;

  const response = await fetch(url, options).then(r => r.json());
}
