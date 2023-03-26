import { markup } from './renderMarkup';
import { pageLoadHandler } from './render news gallery/render-news-gallery';
import { setToLS, getFromLS } from './local-storage-logic';

const notFoundRef = document.querySelector('.not-found');
const listArticlesRef = document.querySelector('#accordion');

const READ_KEY = 'read_news';

class AddToRead {
  isHomePage() {
    const homePage = document.querySelector('.homepage');
    if (homePage) {
      return true;
    }
    return false;
  }
  addListenersToHomePage(){
if(pageLoadHandler){
  const linkReadMore = document.querySelector('.thumb__link');
  linkReadMore.addEventListener('click', this.#onReadClick(evant))
  //(ev) => this.#onReadClick(ev);
}

  }
  renderReadPage(){ //рендер маркапу
  const dataFromLS = getFromLS(READ_KEY)
  const newMarkup = markup.createGalleryCardMarkup(dataFromLS);
  listArticlesRef.innerHTML = newMarkup;
  }

  #onReadClick(event) {
    const targetItem = event.target.closest('.gallery__item');

    const img = () => {
      const resWithoutStart = targetItem
        .querySelector('.gallery-thumb')
        .style.backgroundImage.split('');

      resWithoutStart.splice(0, 5);
      resWithoutStart.splice(-2, 2);
      return resWithoutStart.join('');
    };
    const title = targetItem.querySelector('.gallery__title').textContent;
    const text = targetItem.querySelector('.gallery__text').textContent;
    const date = targetItem.querySelector('.thumb__text').textContent;
    const id = targetItem.id;
    const category = targetItem.querySelector(
      '.gallery-thumb__subtitle'
    ).textContent;
    const url = targetItem.querySelector('.thumb__link').href;
    const article = { img: img(), title, text, date, id, category, url };
    const dataFromLS = getFromLS(READ_KEY) || [];
    // добавляємо в localStorage
    const present = dataFromLS.find(article => article.id === id);
    if (!present) { 
      setToLS(READ_KEY, [...dataFromLS, article]);   // dataFromLS.push(article) // setToLS(READ_KEY, dataFromLS);
    }
  }

}

const instance = new AddToRead(); // створює об'єкт  AddToRead

if(instance.isHomePage()){ //перевірка чи знаходишся на homePage
  instance.addListenersToHomePage(); //опрацьовую клік на readMore
}
else{
  instance.renderReadPage(); //малюю readPage
}





// if (!dataFromLS.length && notFoundRef !== null) {
//   notFoundRef.innerHTML = `<h2 class="not-found-title hidden">You haven't added anything to favorite!</h2><img src="https://live.staticflickr.com/65535/52770181328_d91f5366f0_z.jpg">`;
//   return;
// }
