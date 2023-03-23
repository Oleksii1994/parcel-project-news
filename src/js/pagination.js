// логіка ще дуже неточна, поки зациклювався на стилях
let perPage = 6;
let totalItems = 50;
const totalButtons = Math.ceil(totalItems / perPage);
const pagWrap = document.querySelector('.pagination');
for (let i = 1; i <= totalButtons; i++) {
  if (totalButtons < 8) {
    pagWrap.insertAdjacentHTML(
      'beforeend',
      `<button class="pagination__page-number-btn">${i}</button>`
    );
  }
}
if (totalButtons >= 8) {
  pagWrap.insertAdjacentHTML(
    'beforeend',
    `<button class="pagination__page-number-btn">${1}</button>
    <button class="pagination__page-number-btn">${'2'}</button>
    <button class="pagination__page-number-btn">${'3'}</button>
    <button class="pagination__page-number-btn">${'4'}</button>
    <button class="pagination__page-number-btn">${'5'}</button>
    <button class="pagination__page-number-btn">${'...'}</button>
    <button class="pagination__page-number-btn">${totalButtons}</button>`
  );
}
