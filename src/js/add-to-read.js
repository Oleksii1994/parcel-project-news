import { markup } from './renderMarkup';
import { refs } from './refs/refs';
import { setToLS, getFromLS } from './local-storage-logic';
// import { sendEmailVerification } from 'firebase/auth';

const listArticlesRef = document.querySelector('#accordion');

const READ_KEY = 'read_news';


// const test = [
//   {date: "17/3/2023", news: [{}]},
//   {date: "25/3/2022", news: [{}]},
// ]

/*
1. з localStorage витягнути унікальні даті "date" map
2. перетворити цей масив з датами в об'єкти те що записано в test (news має бути пустим масивом)
3. проходишся по масиву з датами date, фільтр по датам і записати в масив news.
4. генеруєш розмітку для акордіону що є в read, генерую розмітку з масиву який вийшов, приклад test
5. генерую картки функцією createMurcup(для кожної секції стільки раз скільки є дат,
генерувати масив news (масив з картками))
6. згенерувати акордіон.

*/
// const testt = [
//    {date: "17/3/2023", news: [{}]},
//   {date: "25/3/2022", news: [{}]},
//   {date: "23/5/2021", news: [{}]},
//   {date: "15/3/2025", news: [{}]},
//   ]
// const test = document.querySelector('.test')
// test.addEventListener('click', getDateLocalStorege())


// function getDateLocalStorege(){
//   const objects = getFromLS(READ_KEY); // замініть 'getFromLS' на змінну, що містить ваш масив об'єктів
//   const dates = objects.map(obj => obj.date); // створюємо масив зі значеннями "date"
//   const uniqueDates = dates.filter((date, index) => dates.indexOf(date) === index); // відбираємо унікальні значення
//   console.log(uniqueDates)
// }



class AddToRead {
  isHomePage() {
    const homePage = refs.galleryEl
    if (homePage) {
      return true;
    }
    return false;
  }
  addListenersToHomePage(){
      const linkReadMore = document.querySelectorAll('.thumb__link');
      linkReadMore.forEach(link => link.addEventListener('click', this.#onReadClick));
      console.log(linkReadMore)
  }

  renderReadPage(){ //рендер маркапу
  const dataFromLS = getFromLS(READ_KEY);
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
// #createAccordion(){
//   $('#accordion').accordion({
//     collapsible: true,
//     beforeActivate: function (event, ui) {
//       let currHeader, currContent, isPanelSelected;
//       if (ui.newHeader[0]) {
//         currHeader = ui.newHeader;
//         currContent = currHeader.next('.ui-accordion-content');
//       } else {
//         currHeader = ui.oldHeader;
//         currContent = currHeader.next('.ui-accordion-content');
//       }

//       isPanelSelected = currHeader.attr('aria-selected') === 'true';

//       currHeader
//         .toggleClass('ui-corner-all', isPanelSelected)
//         .toggleClass(
//           'accordion-header-active ui-state-active ui-corner-top',
//           !isPanelSelected
//         )
//         .attr('aria-selected', (!isPanelSelected).toString());

//       currHeader
//         .children('.ui-icon')
//         .toggleClass('ui-icon-triangle-1-e', isPanelSelected)
//         .toggleClass('ui-icon-triangle-1-s', !isPanelSelected);

//       currContent.toggleClass('accordion-content-active', !isPanelSelected);

//       if (isPanelSelected) {
//         currContent.slideUp();
//       } else {
//         currContent.slideDown();
//       }

//       return false;
//     },
//   });
// }
}

const instance = new AddToRead(); // створює об'єкт  AddToRead

if(instance.isHomePage()){ //перевірка чи знаходишся на homePage
  refs.galleryEl.addEventListener('build', () =>{
    instance.addListenersToHomePage(); //опрацьовую клік на readMore
  });
  
}
else{
  instance.renderReadPage(); //малюю readPage

}