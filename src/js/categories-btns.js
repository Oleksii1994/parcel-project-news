const categories = [
  {
    section: 'admin',
    display_name: 'Admin',
  },
  {
    section: 'arts',
    display_name: 'Arts',
  },
  {
    section: 'automobiles',
    display_name: 'Automobiles',
  },
  {
    section: 'books',
    display_name: 'Books',
  },
  {
    section: 'briefing',
    display_name: 'Briefing',
  },
  {
    section: 'business',
    display_name: 'Business',
  },
  {
    section: 'climate',
    display_name: 'Climate',
  },
  {
    section: 'corrections',
    display_name: 'Corrections',
  },
  {
    section: 'crosswords & games',
    display_name: 'Crosswords & Games',
  },
  {
    section: 'education',
    display_name: 'Education',
  },
  {
    section: 'en español',
    display_name: 'En Español',
  },
  {
    section: 'fashion',
    display_name: 'Fashion',
  },
  {
    section: 'food',
    display_name: 'Food',
  },
  {
    section: 'guides',
    display_name: 'Guides',
  },
  {
    section: 'health',
    display_name: 'Health',
  },
  {
    section: 'home & garden',
    display_name: 'Home & Garden',
  },
  {
    section: 'home page',
    display_name: 'Home Page',
  },
  {
    section: 'job market',
    display_name: 'Job Market',
  },
  {
    section: 'lens',
    display_name: 'Lens',
  },
  {
    section: 'magazine',
    display_name: 'Magazine',
  },
  {
    section: 'movies',
    display_name: 'Movies',
  },
  {
    section: 'multimedia/photos',
    display_name: 'Multimedia/Photos',
  },
  {
    section: 'new york',
    display_name: 'New York',
  },
  {
    section: 'obituaries',
    display_name: 'Obituaries',
  },
  {
    section: 'opinion',
    display_name: 'Opinion',
  },
  {
    section: 'parenting',
    display_name: 'Parenting',
  },
  {
    section: 'podcasts',
    display_name: 'Podcasts',
  },
  {
    section: 'reader center',
    display_name: 'Reader Center',
  },
  {
    section: 'real estate',
    display_name: 'Real Estate',
  },
  {
    section: 'science',
    display_name: 'Science',
  },
  {
    section: 'smarter living',
    display_name: 'Smarter Living',
  },
  {
    section: 'sports',
    display_name: 'Sports',
  },
  {
    section: 'style',
    display_name: 'Style',
  },
  {
    section: 'sunday review',
    display_name: 'Sunday Review',
  },
  {
    section: 't brand',
    display_name: 'T Brand',
  },
  {
    section: 't magazine',
    display_name: 'T Magazine',
  },
  {
    section: 'technology',
    display_name: 'Technology',
  },
  {
    section: 'the learning network',
    display_name: 'The Learning Network',
  },
  {
    section: 'the upshot',
    display_name: 'The Upshot',
  },
  {
    section: 'the weekly',
    display_name: 'The Weekly',
  },
  {
    section: 'theater',
    display_name: 'Theater',
  },
  {
    section: 'times insider',
    display_name: 'Times Insider',
  },
  {
    section: 'today’s paper',
    display_name: 'Today’s Paper',
  },
  {
    section: 'travel',
    display_name: 'Travel',
  },
  {
    section: 'u.s.',
    display_name: 'U.S.',
  },
  {
    section: 'universal',
    display_name: 'Universal',
  },
  {
    section: 'video',
    display_name: 'Video',
  },
  {
    section: 'well',
    display_name: 'Well',
  },
  {
    section: 'world',
    display_name: 'World',
  },
  {
    section: 'your money',
    display_name: 'Your Money',
  },
];

const visibleOtherBtn = {
  mobile: 0,
  tablet: 4,
  desktop: 6,
};

const categoriesRef = document.querySelector('.categories');
const otherBoxRef = categoriesRef.querySelector('.categories__other-box');
const categoriesOtherTextRef = document.querySelector(
  '.categories__other-text'
);
const categoriesOtherBtnRef = document.querySelector('.categories__other-btn');
const categoriesBtnListRef = document.querySelector('.categories__btn-list');

const otherBtn = categoriesRef.querySelector('#categories-other');
window.addEventListener('resize', onWindowsResize);
otherBtn.addEventListener('click', onOtherBtnClick);
let visibleListStatus = false;
setTimeout(() => {
  onLoadPage(categories);
}, 0);

otherBoxRef.addEventListener('click', onOtherBoxClick);

function onWindowsResize(e) {
  console.log(window.innerWidth);
  if (window.innerWidth < 768) {
    categoriesBtnListRef.innerHTML = '';
    const markup = categories
      .map(
        elem =>
          `<div class="categories__other-btn-box"><button class="categories__other-item" data-categoryName="${elem.section}" type="button">${elem.display_name}</button></div>`
      )
      .join('');
    console.log(markup);
    otherBoxRef.innerHTML = markup;
    return;
  }
  if (window.innerWidth < 1280) {
    console.log(categoriesBtnListRef.innerHTML);
    if (categoriesBtnListRef.children.length === visibleOtherBtn.tablet) {
      return;
    }
    let markupBtns = [];
    for (let index = 0; index < visibleOtherBtn.tablet; index++) {
      markupBtns.push(
        `<div class="categories__other-btn-box"><button class="categories__other-item" data-categoryName="${categories[index].section}" type="button">${categories[index].display_name}</button></div>`
      );
    }
    categoriesBtnListRef.innerHTML = markupBtns.join('');
    let markupOther = [];
    for (let i = visibleOtherBtn.tablet; i < categories.length; i++) {
      markupOther.push(
        `<div class="categories__other-btn-box"><button class="categories__other-item" data-categoryName="${categories[i].section}" type="button">${categories[i].display_name}</button></div>`
      );
    }
    otherBoxRef.innerHTML = markupOther.join('');
    return;
  }
  if (window.innerWidth > 1279) {
    console.log(categoriesBtnListRef.innerHTML);
    if (categoriesBtnListRef.children.length === visibleOtherBtn.desktop) {
      return;
    }
    let markupBtns = [];
    for (let index = 0; index < visibleOtherBtn.desktop; index++) {
      markupBtns.push(
        `<div class="categories__other-btn-box"><button class="categories__other-item" data-categoryName="${categories[index].section}" type="button">${categories[index].display_name}</button></div>`
      );
    }
    categoriesBtnListRef.innerHTML = markupBtns.join('');
    let markupOther = [];
    for (let i = visibleOtherBtn.desktop; i < categories.length; i++) {
      markupOther.push(
        `<div class="categories__other-btn-box"><button class="categories__other-item" data-categoryName="${categories[i].section}" type="button">${categories[i].display_name}</button></div>`
      );
    }
    otherBoxRef.innerHTML = markupOther.join('');
  }
}

function onOtherBtnClick(e) {
  visibleListStatus = !visibleListStatus;

  if (visibleListStatus) {
    otherBoxRef.classList.add('visible');
    categoriesOtherBtnRef.classList.add('visible');
    e.currentTarget.classList.add('active');
  } else {
    otherBoxRef.classList.remove('visible');
    categoriesOtherBtnRef.classList.remove('visible');
    e.currentTarget.classList.remove('active');
  }
}

function onLoadPage(categories) {
  if (window.innerWidth < 768) {
    //  console.log(window.matchMedia('(max-width: 767px)'));
    const markup = categories
      .map(
        elem =>
          `<div class="categories__other-btn-box"><button class="categories__other-item" data-categoryName="${elem.section}" type="button">${elem.display_name}</button></div>`
      )
      .join('');
    // console.log(markup);
    otherBoxRef.innerHTML = markup;
    return;
  }
  if (window.innerWidth < 1280) {
    let markupBtns = [];
    for (let index = 0; index < visibleOtherBtn.tablet; index++) {
      markupBtns.push(
        `<div class="categories__other-btn-box"><button class="categories__other-item" data-categoryName="${categories[index].section}" type="button">${categories[index].display_name}</button></div>`
      );
    }
    categoriesBtnListRef.innerHTML = markupBtns.join('');
    let markupOther = [];
    for (let i = visibleOtherBtn.tablet; i < categories.length; i++) {
      markupOther.push(
        `<div class="categories__other-btn-box"><button class="categories__other-item" data-categoryName="${categories[i].section}" type="button">${categories[i].display_name}</button></div>`
      );
    }
    otherBoxRef.innerHTML = markupOther.join('');
  }
  if (window.innerWidth > 1279) {
    console.log(categoriesBtnListRef.innerHTML);
    if (categoriesBtnListRef.children.length === visibleOtherBtn.desktop) {
      return;
    }
    let markupBtns = [];
    for (let index = 0; index < visibleOtherBtn.desktop; index++) {
      markupBtns.push(
        `<div class="categories__other-btn-box"><button class="categories__other-item" data-categoryName="${categories[index].section}" type="button">${categories[index].display_name}</button></div>`
      );
    }
    categoriesBtnListRef.innerHTML = markupBtns.join('');
    let markupOther = [];
    for (let i = visibleOtherBtn.desktop; i < categories.length; i++) {
      markupOther.push(
        `<div class="categories__other-btn-box"><button class="categories__other-item" data-categoryName="${categories[i].section}" type="button">${categories[i].display_name}</button></div>`
      );
    }
    otherBoxRef.innerHTML = markupOther.join('');
  }
}

function onOtherBoxClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  e.target.classList.add('active');

  visibleListStatus = !visibleListStatus;
  otherBoxRef.classList.remove('visible');
  categoriesOtherTextRef.textContent = e.target.textContent;
  categoriesOtherBtnRef.classList.remove('visible');
}
