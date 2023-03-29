import { refs } from './refs/refs.js';
import { THEMES } from './refs/const.js';

refs.themeSwitch.addEventListener('change', changeTheme);

onLoadPage();

function changeTheme() {
  if (refs.body.classList.contains(THEMES.LIGHT_THEME)) {
    refs.body.classList.replace(THEMES.LIGHT_THEME, THEMES.DARK_THEME);
    refs.darkThemeBox.classList.add('active-tablet');
    refs.lightThemeBox.classList.remove('active-tablet');
    saveTheme(THEMES.DARK_THEME);
  } else {
    refs.body.classList.replace(THEMES.DARK_THEME, THEMES.LIGHT_THEME);
    refs.darkThemeBox.classList.remove('active-tablet');
    refs.lightThemeBox.classList.add('active-tablet');
    saveTheme(THEMES.LIGHT_THEME);
  }
}

function onLoadPage() {
  const theme = getSavedTheme() || THEMES.LIGHT_THEME;

  if (theme === THEMES.LIGHT_THEME) {
    refs.lightThemeBox.classList.add('active-tablet');
    refs.body.classList.add(THEMES.LIGHT_THEME);
  } else {
    refs.themeSwitch.checked = true;
    refs.darkThemeBox.classList.add('active-tablet');
    refs.body.classList.add(THEMES.DARK_THEME);
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
