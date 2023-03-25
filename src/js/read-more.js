import { galleryEl } from '../refs';

galleryEl.addEventListener('click', linkReadMore);

// checkLokalStorage();
const LOCAL_KEY = 'readMoreLocal';
let readMoreId = [];
isLocalEmpty();

function isLocalEmpty() {
  if (JSON.parse(localStorage.getItem('LOCAL_KEY')) === null) {
    return;
  }
  readMoreId = JSON.parse(localStorage.getItem('LOCAL_KEY'));
}

function linkReadMore(event) {
  const readMore = event.target.closest(`.thumb__link`);
  if (!readMore) return;
  readMore.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add(
    '.gallery__item--background'
  );
  addReadMore(readMore);
}

function addReadMore(readMore) {
  const evenDateNow = new Date();
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const readDateNow = evenDateNow
    .toLocaleDateString([], options)
    .replaceAll('.', '/');
  const read = {
    uri: readMore.nextElementSibling.textContent,
    date: readMore.parentNode.firstElementChild.innerText,
    img: readMore.parentNode.parentNode.childNodes[1].children[0].currentSrc,
    title: readMore.parentNode.parentNode.childNodes[3].children[0].innerText,
    description:
      readMore.parentNode.parentNode.childNodes[3].children[1].innerText,
    link: readMore.parentNode.children[1].href,
    category:
      readMore.parentNode.parentNode.childNodes[1].children[1].innerHTML,
    dayRead: readDateNow,
  };
  for (let i = 0; i < readMoreId.length; i += 1) {
    if (readMoreId[i].uri === read.uri) {
      return;
    }
  }
  readMoreId.push(read);
  localStorage.setItem(`LOCAL_KEY`, JSON.stringify(readMoreId));
}

// function addOpacityToSavedItems() {
//   const savedItems = JSON.parse(localStorage.getItem('readMoreLocal'));
//   if (!savedItems || !savedItems.length) return;
//   const galleryCards = refs.galleryEl.querySelectorAll('.gallery__item');
//   galleryCards.forEach(card => {
//     const cardLink = card.querySelector('.thumb__link');
//     const cardUri = cardLink.nextElementSibling.textContent;
//     if (savedItems.some(item => item.uri === cardUri)) {
//       card.classList.add('gallery__item--background');
//     }
//   });
// }
