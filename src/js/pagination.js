// логіка ще дуже неточна, поки зациклювався на стилях
let perPage = 8;
let totalItems = 88;
let currentPage = 1;

const totalButtons = Math.ceil(totalItems / perPage);

const pagWrap = document.querySelector('.pagination');
const pagBtnPrev = document.querySelector('.pagination__prev-btn');
const pagBtnNext = document.querySelector('.pagination__next-btn');

// ЗАМІСТЬ КОНСОЛЯ ТУТ ТРЕБА ПРОПИСАТИ ФУНКЦІЮ, ЯКА БУДЕ РЕНДЕРИТИ СТОРНІКУ НОВИН ЗА ЇЇ НОМЕРОМ
console.log('currentPage ' + currentPage);
console.log(`render NewsPage By Number - ${currentPage}`);

if (currentPage === 1) {
  disablePrevPaginationButton();
}

// ЦИКЛ ЩОБ СТВОРИТИ КНОПКИ totalButtons РАЗІВ
makePaginationButtons(totalButtons);

// з самого початку робимо активною першу кнопку
if (currentPage === 1) {
  pagWrap.firstElementChild.classList.add('active');
}

pagBtnPrev.addEventListener('click', handlePaginationButtonPrev);
pagBtnNext.addEventListener('click', handlePaginationButtonNext);

function makePaginationButtons(totalButtons) {
  // варіант взагалі без точок
  if (totalButtons < 8) {
    for (let i = 1; i <= totalButtons; i++) {
      // -------СТВОРЮВАННЯ КНОПКИ

      const pageNumberBtn = document.createElement('button');
      pageNumberBtn.textContent = `${i}`;
      pageNumberBtn.className = 'pagination__page-number-btn';
      if (currentPage === i) {
        pageNumberBtn.classList.add('active');
      }

      // ВІШАЄМО НА КОЖНУ КНОПКУ ЛІСЕНЕР

      pageNumberBtn.addEventListener('click', e => {
        // це логіка щоб забирати додавати класи
        pagWrap
          .querySelectorAll('.pagination__page-number-btn')
          .forEach(btn =>
            btn.classList.toggle('active', btn === e.currentTarget)
          );

        // ЗАМІСТЬ КОНСОЛЯ ТУТ ТРЕБА ПРОПИСАТИ ФУНКЦІЮ, ЯКА БУДЕ РЕНДЕРИТИ СТОРНІКУ НОВИН ЗА ЇЇ НОМЕРОМ
        console.log(`render NewsPage By Number - ${i}`);

        // міняю поточну сторінку
        currentPage = i;

        if (currentPage !== 1) {
          ablePrevPaginationButton();
        } else {
          disablePrevPaginationButton();
        }
        if (currentPage !== totalButtons) {
          ableNextPaginationButton();
        } else {
          disableNextPaginationButton();
        }
        console.log('currentPage ' + currentPage);
      });
      pagWrap.append(pageNumberBtn);
    }
  }
  // варіант з точками
  if (totalButtons >= 8) {
    //варіант точок на кінці
    if (currentPage <= 3) {
      for (let i = 1; i <= totalButtons; i++) {
        const pageNumberBtn = document.createElement('button');
        if ((i >= 6) & (i != totalButtons)) {
          continue;
        } else {
          pageNumberBtn.textContent = `${i}`;
        }

        pageNumberBtn.className = 'pagination__page-number-btn';
        if (currentPage === i) {
          pageNumberBtn.classList.add('active');
        }

        // ВІШАЄМО НА КОЖНУ КНОПКУ ЛІСЕНЕР

        pageNumberBtn.addEventListener('click', e => {
          // це логіка щоб забирати додавати класи
          pagWrap
            .querySelectorAll('.pagination__page-number-btn')
            .forEach(btn =>
              btn.classList.toggle('active', btn === e.currentTarget)
            );

          // ЗАМІСТЬ КОНСОЛЯ ТУТ ТРЕБА ПРОПИСАТИ ФУНКЦІЮ, ЯКА БУДЕ РЕНДЕРИТИ СТОРНІКУ НОВИН ЗА ЇЇ НОМЕРОМ
          console.log(`render NewsPage By Number - ${i}`);

          // міняю поточну сторінку
          currentPage = i;

          if (currentPage !== 1) {
            ablePrevPaginationButton();
          } else {
            disablePrevPaginationButton();
          }
          if (currentPage !== totalButtons) {
            ableNextPaginationButton();
          } else {
            disableNextPaginationButton();
          }
          console.log('currentPage ' + currentPage);
        });
        pagWrap.append(pageNumberBtn);
      }
      pagWrap.lastElementChild.insertAdjacentHTML('beforebegin', '<p>...</p>');
    }
    // варіант точок на початку та в кінці
    if ((currentPage >= 4) & (currentPage < totalButtons - 3)) {
      for (let i = 1; i <= totalButtons; i++) {
        const pageNumberBtn = document.createElement('button');
        if (
          i === currentPage - 1 ||
          i === currentPage ||
          i === currentPage + 1 ||
          i === 1 ||
          i === totalButtons
        ) {
          pageNumberBtn.textContent = `${i}`;
        } else {
          continue;
        }

        pageNumberBtn.className = 'pagination__page-number-btn';
        if (currentPage === i) {
          pageNumberBtn.classList.add('active');
        }

        // ВІШАЄМО НА КОЖНУ КНОПКУ ЛІСЕНЕР

        pageNumberBtn.addEventListener('click', e => {
          // це логіка щоб забирати додавати класи
          pagWrap
            .querySelectorAll('.pagination__page-number-btn')
            .forEach(btn =>
              btn.classList.toggle('active', btn === e.currentTarget)
            );

          // ЗАМІСТЬ КОНСОЛЯ ТУТ ТРЕБА ПРОПИСАТИ ФУНКЦІЮ, ЯКА БУДЕ РЕНДЕРИТИ СТОРНІКУ НОВИН ЗА ЇЇ НОМЕРОМ
          console.log(`render NewsPage By Number - ${i}`);

          // міняю поточну сторінку
          currentPage = i;

          if (currentPage !== 1) {
            ablePrevPaginationButton();
          } else {
            disablePrevPaginationButton();
          }
          if (currentPage !== totalButtons) {
            ableNextPaginationButton();
          } else {
            disableNextPaginationButton();
          }
          console.log('currentPage ' + currentPage);
        });
        pagWrap.append(pageNumberBtn);
      }
      pagWrap.firstElementChild.insertAdjacentHTML('afterend', '<p>...</p>');
      pagWrap.lastElementChild.insertAdjacentHTML('beforebegin', '<p>...</p>');
    }
    //варіант точок на початку
    if (currentPage >= totalButtons - 3) {
      for (let i = 1; i <= totalButtons; i++) {
        const pageNumberBtn = document.createElement('button');
        if ((i < totalButtons - 4) & (i != 1)) {
          continue;
        } else {
          pageNumberBtn.textContent = `${i}`;
        }

        pageNumberBtn.className = 'pagination__page-number-btn';
        if (currentPage === i) {
          pageNumberBtn.classList.add('active');
        }

        // ВІШАЄМО НА КОЖНУ КНОПКУ ЛІСЕНЕР

        pageNumberBtn.addEventListener('click', e => {
          // це логіка щоб забирати додавати класи
          pagWrap
            .querySelectorAll('.pagination__page-number-btn')
            .forEach(btn =>
              btn.classList.toggle('active', btn === e.currentTarget)
            );

          // ЗАМІСТЬ КОНСОЛЯ ТУТ ТРЕБА ПРОПИСАТИ ФУНКЦІЮ, ЯКА БУДЕ РЕНДЕРИТИ СТОРНІКУ НОВИН ЗА ЇЇ НОМЕРОМ
          console.log(`render NewsPage By Number - ${i}`);

          // міняю поточну сторінку
          currentPage = i;

          if (currentPage !== 1) {
            ablePrevPaginationButton();
          } else {
            disablePrevPaginationButton();
          }
          if (currentPage !== totalButtons) {
            ableNextPaginationButton();
          } else {
            disableNextPaginationButton();
          }
          console.log('currentPage ' + currentPage);
        });
        pagWrap.append(pageNumberBtn);
      }
      pagWrap.firstElementChild.insertAdjacentHTML('afterend', '<p>...</p>');
    }
  }
}

function disablePrevPaginationButton() {
  pagBtnPrev.setAttribute('disabled', '');
  pagBtnPrev.classList.add('disabled');
}

function ablePrevPaginationButton() {
  pagBtnPrev.removeAttribute('disabled', '');
  pagBtnPrev.classList.remove('disabled');
}

function disableNextPaginationButton() {
  pagBtnNext.setAttribute('disabled', '');
  pagBtnNext.classList.add('disabled');
}

function ableNextPaginationButton() {
  pagBtnNext.removeAttribute('disabled', '');
  pagBtnNext.classList.remove('disabled');
}

function handlePaginationButtonPrev() {
  clearPagination();
  ableNextPaginationButton();
  // міняю поточну сторінку
  currentPage -= 1;
  if (currentPage === 1) {
    disablePrevPaginationButton();
  }

  console.log('currentPage ' + currentPage);
  // ЗАМІСТЬ КОНСОЛЯ ТУТ ТРЕБА ПРОПИСАТИ ФУНКЦІЮ, ЯКА БУДЕ РЕНДЕРИТИ СТОРНІКУ НОВИН ЗА ЇЇ НОМЕРОМ
  console.log(`render NewsPage By Number - ${currentPage}`);

  // це логіка щоб забирати/додавати класс
  makePaginationButtons(totalButtons);
}

function handlePaginationButtonNext() {
  clearPagination();
  ablePrevPaginationButton();
  // міняю поточну сторінку
  currentPage += 1;
  if (currentPage === totalButtons) {
    disableNextPaginationButton();
  }

  console.log('currentPage ' + currentPage);
  // ЗАМІСТЬ КОНСОЛЯ ТУТ ТРЕБА ПРОПИСАТИ ФУНКЦІЮ, ЯКА БУДЕ РЕНДЕРИТИ СТОРНІКУ НОВИН ЗА ЇЇ НОМЕРОМ
  console.log(`render NewsPage By Number - ${currentPage}`);

  // це логіка щоб забирати/додавати класс
  makePaginationButtons(totalButtons);
}
function clearPagination() {
  pagWrap.innerHTML = '';
}
