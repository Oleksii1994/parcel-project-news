import { refs } from './refs/refs';

refs.formSearch.addEventListener('submit', onFormSubmit);

const API_KEY = 'BH5G4MmX2hd3Z4GoAlzI5ltMDFoUx3Fe';

async function onFormSubmit(event) {
  event.preventDefault();

  const value = event.currentTarget.elements.searchQuery.value.trim();

  const options = {
    headers: {},
  };

  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&api-key=${API_KEY}`;

  const response = await fetch(url, options).then(r => r.json());
  console.log(response);
}
