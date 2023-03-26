import { refs } from './refs/refs';

const hideLoader = () => {
  refs.loader.classList.remove('show');
};

const showLoader = () => {
  refs.loader.classList.add('show');
};

export { hideLoader, showLoader };

