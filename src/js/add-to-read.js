import { markup } from './renderMarkup';
import { refs } from './refs/refs';
import { setToLS, getFromLS } from './local-storage-logic';
import { sendEmailVerification } from 'firebase/auth';

const listArticlesRef = document.querySelector('#accordion');

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

  renderReadPage() {
    //рендер маркапу
    const dataFromLS = getFromLS(READ_KEY);
    const newMarkup = markup.createGalleryCardMarkup(dataFromLS);
    listArticlesRef.innerHTML = newMarkup;
  }

  #onReadClick(event) {
    const targetItem = event.target.closest('.gallery__item');
    const alreadyReadText = targetItem.querySelector('.gallery-thumb__already');
    targetItem.classList.add('gallery__item--background');
    alreadyReadText.classList.add('gallery-thumb__already--show');

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
      setToLS(READ_KEY, [...dataFromLS, article]); // dataFromLS.push(article) // setToLS(READ_KEY, dataFromLS);
    }
  }
  #createAccordion() {
    $('#accordion').accordion({
      collapsible: true,
      beforeActivate: function (event, ui) {
        let currHeader, currContent, isPanelSelected;
        if (ui.newHeader[0]) {
          currHeader = ui.newHeader;
          currContent = currHeader.next('.ui-accordion-content');
        } else {
          currHeader = ui.oldHeader;
          currContent = currHeader.next('.ui-accordion-content');
        }

        isPanelSelected = currHeader.attr('aria-selected') === 'true';

        currHeader
          .toggleClass('ui-corner-all', isPanelSelected)
          .toggleClass(
            'accordion-header-active ui-state-active ui-corner-top',
            !isPanelSelected
          )
          .attr('aria-selected', (!isPanelSelected).toString());

        currHeader
          .children('.ui-icon')
          .toggleClass('ui-icon-triangle-1-e', isPanelSelected)
          .toggleClass('ui-icon-triangle-1-s', !isPanelSelected);

        currContent.toggleClass('accordion-content-active', !isPanelSelected);

        if (isPanelSelected) {
          currContent.slideUp();
        } else {
          currContent.slideDown();
        }

        return false;
      },
    });
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
