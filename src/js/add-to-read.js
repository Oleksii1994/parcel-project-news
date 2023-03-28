import { markup } from './renderMarkup';
import { refs } from './refs/refs';
import { setToLS, getFromLS } from './local-storage-logic';
// import { sendEmailVerification } from 'firebase/auth';

const READ_KEY = 'read_news';

class AddToRead {
  isHomePage() {
    const homePage = refs.galleryEl;
    if (homePage) {
      return true;
    }
    return false;
  }
  addListenersToHomePage() {
    const linkReadMore = document.querySelectorAll('.thumb__link');
    linkReadMore.forEach(link =>
      link.addEventListener('click', this.#onReadClick)
    );
    // console.log(linkReadMore)
  }

  renderReadPage(){ //рендер маркапу
  const dataFromLS = getFromLS(READ_KEY);
  const markupTemplate = document.querySelector('#markup-template');
  const template = markupTemplate.innerHTML;
  markupTemplate.remove();
  const result = this.#getDateLocalStorege(dataFromLS);
  this.#generateAccordionHTML(result, template)
  this.#createAccordion();
  }

#getDateLocalStorege(dataFromLS){
    const objects = dataFromLS; 
    const dates = objects.map(obj => obj.LSDate); 
    const uniqueDates = dates.filter((LSDate, index) => dates.indexOf(LSDate) === index); 
    const result = [];
  
    uniqueDates.forEach(LSDate => {
      const news = objects.filter(obj => obj.LSDate === LSDate)
      result.push({ LSDate: LSDate, news: news });
    });
    console.log(result);
    return result;
  }


#generateAccordionHTML(result, template) {
    const listArticlesRef = document.querySelector('#accordion');
    result.forEach(el => {
      const section = template.replaceAll('{{title}}', el.LSDate).replaceAll('{{card}}',
      markup.createGalleryCardMarkup(el.news))

      const div = document.createElement("div");
      listArticlesRef.appendChild(div);
      div.innerHTML = section
    });
  }


  #onReadClick(event) {
    const targetItem = event.target.closest('.gallery__item');
    const alreadyReadText = targetItem.querySelector('.gallery-thumb__already'); //Додали з Яною стилі на li щоб з'являлась надпис Alredy Read
    targetItem.classList.add('gallery__item--background'); //додаємо блюр на картку
    alreadyReadText.classList.add('gallery-thumb__already--show'); //opacity на картку

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
    const LSDate = new Date().toLocaleDateString()
    const url = targetItem.querySelector('.thumb__link').href;
    const article = { img: img(), title, text, date, id, category, url, LSDate};
    const dataFromLS = getFromLS(READ_KEY) || [];
    console.log(LSDate)
    // добавляємо в localStorage
    const present = dataFromLS.find(article => article.id === id);
    if (!present) { 
      setToLS(READ_KEY, [...dataFromLS, article], [LSDate]);   // dataFromLS.push(article) // setToLS(READ_KEY, dataFromLS);
    }
  }
#createAccordion(){
  $('#accordion').accordion({ header: "h2", collapsible: true });
}
}

const instance = new AddToRead(); // створює об'єкт  AddToRead

if (instance.isHomePage()) {
  //перевірка чи знаходишся на homePage
  refs.galleryEl.addEventListener('build', () => {
    instance.addListenersToHomePage(); //опрацьовую клік на readMore
  });
} else {
  instance.renderReadPage(); //малюю readPage
}

// if (!dataFromLS.length && notFoundRef !== null) {
//   notFoundRef.innerHTML = `<h2 class="not-found-title hidden">You haven't added anything to favorite!</h2><img src="https://live.staticflickr.com/65535/52770181328_d91f5366f0_z.jpg">`;
//   return;
// }
