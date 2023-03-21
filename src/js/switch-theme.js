const body = document.querySelector('body'); //////////// імпортую рефс
const themeSwitch = document.querySelector('#theme-switch');
const lightThemeBox = document.querySelector('.light-theme-box');
const darkThemeBox = document.querySelector('.dark-theme-box');
const THEMES = { LIGHT_THEME: 'light-theme', DARK_THEME: 'dark-theme' }; //////////// імпортую конст
themeSwitch.addEventListener('change', changeTheme);

onLoadPage();

function changeTheme() {
  if (body.classList.contains(THEMES.LIGHT_THEME)) {
    body.classList.replace(THEMES.LIGHT_THEME, THEMES.DARK_THEME);
    darkThemeBox.classList.add('active');
    lightThemeBox.classList.remove('active');
    saveTheme(THEMES.DARK_THEME);
  } else {
    body.classList.replace(THEMES.DARK_THEME, THEMES.LIGHT_THEME);
    darkThemeBox.classList.remove('active');
    lightThemeBox.classList.add('active');
    saveTheme(THEMES.LIGHT_THEME);
  }
}

function onLoadPage() {
  const theme = getSavedTheme() || THEMES.LIGHT_THEME;

  // body.classList.add(THEMES.LIGHT_THEME);
  if (theme === THEMES.LIGHT_THEME) {
    lightThemeBox.classList.add('active');
    body.classList.add(THEMES.LIGHT_THEME);
  } else {
    themeSwitch.checked = true;
    darkThemeBox.classList.add('active');
    body.classList.add(THEMES.DARK_THEME);
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
