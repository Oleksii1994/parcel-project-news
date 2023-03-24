// Budna Elvira
import { disableBodyScroll } from 'body-scroll-lock';
import { enableBodyScroll } from 'body-scroll-lock';

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    !isMenuOpen
      ? disableBodyScroll(document.body)
      : enableBodyScroll(document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// import { THEMES } from './refs/const.js';

// const mobileMenu = document.querySelector('.mobile-menu');

// function changeTheme() {
//   if (mobileMenu.classList.contains(THEMES.LIGHT_THEME)) {
//     mobileMenu.classList.replace(THEMES.LIGHT_THEME, THEMES.DARK_THEME);
//     refs.darkThemeBox.classList.add('active');
//     refs.lightThemeBox.classList.remove('active');
//     saveTheme(THEMES.DARK_THEME);
//   } else {
//     mobileMenu.classList.replace(THEMES.DARK_THEME, THEMES.LIGHT_THEME);
//     refs.darkThemeBox.classList.remove('active');
//     refs.lightThemeBox.classList.add('active');
//     saveTheme(THEMES.LIGHT_THEME);
//   }
// }
