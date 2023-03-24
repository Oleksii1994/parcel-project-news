import { disableBodyScroll } from 'body-scroll-lock';
import { enableBodyScroll } from 'body-scroll-lock';

(() => {
  const mobileMenu = document.querySelector('.js-menu-container-favorites');
  const openMenuBtn = document.querySelector('.js-open-menu-favorites');
  const closeMenuBtn = document.querySelector('.js-close-menu-favorites');

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
