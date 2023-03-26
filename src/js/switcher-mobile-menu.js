// import { refs } from './refs/refs.js';
// import { THEMES } from './refs/const.js';
const THEMES = {
  LIGHT_THEME: 'light-theme',
  DARK_THEME: 'dark-theme',
};
const mobileMenu = document.querySelector('.mobile-menu'); //////////// імпортую рефс
const body = document.querySelector('body');
const themeSwitch = document.querySelector('#theme-switch--mobile-menu');
const lightThemeBox = document.querySelector('.light-theme-box--mobile-menu');
const darkThemeBox = document.querySelector('.dark-theme-box--mobile-menu');
// const THEMES = { LIGHT_THEME: 'light-theme', DARK_THEME: 'dark-theme' }; //////////// імпортую конст
themeSwitch.addEventListener('change', changeTheme);

onLoadPage();

function changeTheme() {
  if (mobileMenu.classList.contains(THEMES.LIGHT_THEME)) {
    mobileMenu.classList.replace(THEMES.LIGHT_THEME, THEMES.DARK_THEME);
    body.classList.replace(THEMES.LIGHT_THEME, THEMES.DARK_THEME);
    darkThemeBox.classList.add('mobile-menu--active');
    lightThemeBox.classList.remove('mobile-menu--active');
    saveTheme(THEMES.DARK_THEME);
  } else {
    mobileMenu.classList.replace(THEMES.DARK_THEME, THEMES.LIGHT_THEME);
    body.classList.replace(THEMES.DARK_THEME, THEMES.LIGHT_THEME);
    darkThemeBox.classList.remove('mobile-menu--active');
    lightThemeBox.classList.add('mobile-menu--active');
    saveTheme(THEMES.LIGHT_THEME);
  }
}

function onLoadPage() {
  const theme = getSavedTheme() || THEMES.LIGHT_THEME;

  // body.classList.add(THEMES.LIGHT_THEME);
  if (theme === THEMES.LIGHT_THEME) {
    lightThemeBox.classList.add('mobile-menu--active');
    mobileMenu.classList.add(THEMES.LIGHT_THEME);
  } else {
    themeSwitch.checked = true;
    darkThemeBox.classList.add('mobile-menu--active');
    mobileMenu.classList.add(THEMES.DARK_THEME);
  }
}

// Функція для зберігання теми в локальному сховищі
function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}

// Функція для отримання збереженої теми з локального сховища
function getSavedTheme() {
  return localStorage.getItem('theme');
}
