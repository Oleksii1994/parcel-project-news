import { newsApi } from '../API/fetchAPI';
import { NormalizeData } from '../API/api-data-normalaizer';
import { onLoadHomePage } from '../add-to-favorite';
// import { onLoadPageHomeForRead } from '../read';
import { refs } from '../refs/refs';
import { markup } from '../renderMarkup';
import { Notify } from 'notiflix';

import axios from 'axios';
import { format } from 'date-fns';
import { API_KEY } from '../API/weatherAPI';

import { input } from '../newCalendar';
import { selectedDate } from '../newCalendar';
import _debounce from 'debounce';

let latitude = 50.431;
let longitude = 30.532;

window.addEventListener('load', pageLoadHandler, { once: true });
input.addEventListener('change', _debounce(onCalendarChange, 1500));

async function pageLoadHandler() {
  try {
    location();

    let previousViewportWidth = window.innerWidth;

    function onWindowResizeFoo() {
      const currentViewportWidth = window.innerWidth;

      if (currentViewportWidth !== previousViewportWidth) {
        window.location.reload();
      }

      previousViewportWidth = currentViewportWidth;
    }

    window.addEventListener('resize', onWindowResizeFoo);

    const { results, num_results } = await newsApi.fetchPopularArticles();
    newsApi.newsDataArr = NormalizeData.popularData(results);
    markup.renderMarkup(
      refs.galleryEl,
      markup.createGalleryCardMarkup(NormalizeData.popularData(results))
    );
    onLoadHomePage();
    ////////////////////////////////////////////////////// Evant який додається коли генерується markup
    const event = new Event('build');
    refs.galleryEl.dispatchEvent(event);
    //////////////////////////////////////////////////////

    const refsWeather = {
      weatherContainer: document.querySelector('.weather'),
      weatherBox: document.querySelector('.weather-box'),
      weatherButton: document.querySelector('.weather-button'),
    };
    refsWeather.weatherButton.addEventListener('click', changeButtonWheater);

    async function weather(latitude = 50.431, longitude = 30.532) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        );
        const data = response.data;
        setTimeout(() => {
          refsWeather.weatherBox.innerHTML = renderWeather(data);
        }, 1000);
      } catch (error) {
        console.error(error);
        Notify.failure(`${error}`);
      }
    }

    async function weatherForFive(latitude = 50.431, longitude = 30.532) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        );
        const data = response.data;
        const weaterArrayForWeek = onWeatherForFive(data);
        const stringToRender = renderWeatherForWeek(
          weaterArrayForWeek,
          data.city.name
        );
        refsWeather.weatherBox.innerHTML = stringToRender;
      } catch (error) {
        console.error(error);
      }
    }

    function renderWeather(data) {
      const weather = data.weather[0];
      return `
  <div class="weather__main">
    <p class="main-temp">${Math.round(data.main.temp - 273) + '&deg;'}</p>
    <div class="weather-line"></div>
    <div class="weather__main-position">
      <p class="weather-name">${weather.main}</p>
      <div class="weather__main-position--name-icon">
        <svg class="wheather__icon-position" viewBox="0 0 19 25" fill="" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.50001 0.6875C7.03936 0.690403 4.68032 1.66918 2.94038 3.40912C1.20044 5.14906 0.221663 7.5081 0.21876 9.96875C0.215813 11.9796 0.87265 13.9359 2.08851 15.5375C2.08851 15.5375 2.34163 15.8708 2.38298 15.9189L9.50001 24.3125L16.6204 15.9147C16.6575 15.8699 16.9115 15.5375 16.9115 15.5375L16.9124 15.535C18.1276 13.934 18.7841 11.9787 18.7813 9.96875C18.7784 7.5081 17.7996 5.14906 16.0596 3.40912C14.3197 1.66918 11.9607 0.690403 9.50001 0.6875ZM9.50001 13.3438C8.8325 13.3438 8.17998 13.1458 7.62496 12.775C7.06994 12.4041 6.63736 11.877 6.38192 11.2603C6.12647 10.6436 6.05963 9.96501 6.18986 9.31032C6.32008 8.65563 6.64152 8.05427 7.11352 7.58226C7.58553 7.11026 8.18689 6.78882 8.84158 6.6586C9.49627 6.52837 10.1749 6.59521 10.7916 6.85066C11.4083 7.1061 11.9354 7.53868 12.3062 8.0937C12.6771 8.64872 12.875 9.30124 12.875 9.96875C12.8739 10.8635 12.518 11.7213 11.8853 12.354C11.2526 12.9867 10.3948 13.3426 9.50001 13.3438Z" fill="white"/>
        </svg>
        <p class="position-name">${data.name}</p>
      </div>
    </div>
  </div>
    <div class="weather__picture">
    <img
        src="http://openweathermap.org/img/wn/${weather.icon}@4x.png"
        alt="Weather Icon"
        class="weather__img"
    />
    </div>
    <p class="weather__date-day">${format(new Date(), 'eee')}</p>
    <p class="weather__date-year">${format(new Date(), 'dd LLL y')}</p>
    `;
    }

    function renderWeatherForWeek(arr, city) {
      return arr
        .map(data => {
          const weather = data.weather[0];
          const dt = data.dt_txt.split(' ').splice(0, 1).join();
          const temp = data.main.temp;
          const weatherIcon = weather.icon;
          const weatherDescription = weather.main;

          return `
    <div class="weather-day">
      <p class="weather-day__temp">${Math.round(temp - 273) + '&deg;'}</p>
      <div class="weather-day__icon-box">
        <img 
        src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png"
        alt="Weather Icon"
        class="weather-day__img" />
      </div>
      <p class="weather-day__description">${weatherDescription}</p>
      <div class="weather-day__ds-box">
        <p class="weather-day__date">${dt}</p>
        <div class="weather-day__city-box">
          <svg width="12" height="18" viewBox="0 0 19 25" fill="" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.50001 0.6875C7.03936 0.690403 4.68032 1.66918 2.94038 3.40912C1.20044 5.14906 0.221663 7.5081 0.21876 9.96875C0.215813 11.9796 0.87265 13.9359 2.08851 15.5375C2.08851 15.5375 2.34163 15.8708 2.38298 15.9189L9.50001 24.3125L16.6204 15.9147C16.6575 15.8699 16.9115 15.5375 16.9115 15.5375L16.9124 15.535C18.1276 13.934 18.7841 11.9787 18.7813 9.96875C18.7784 7.5081 17.7996 5.14906 16.0596 3.40912C14.3197 1.66918 11.9607 0.690403 9.50001 0.6875ZM9.50001 13.3438C8.8325 13.3438 8.17998 13.1458 7.62496 12.775C7.06994 12.4041 6.63736 11.877 6.38192 11.2603C6.12647 10.6436 6.05963 9.96501 6.18986 9.31032C6.32008 8.65563 6.64152 8.05427 7.11352 7.58226C7.58553 7.11026 8.18689 6.78882 8.84158 6.6586C9.49627 6.52837 10.1749 6.59521 10.7916 6.85066C11.4083 7.1061 11.9354 7.53868 12.3062 8.0937C12.6771 8.64872 12.875 9.30124 12.875 9.96875C12.8739 10.8635 12.518 11.7213 11.8853 12.354C11.2526 12.9867 10.3948 13.3426 9.50001 13.3438Z" fill="white"/>
          </svg>
          <p class="weather-day__sity">${city}</p>
        </div>
      </div>
    </div>`;
        })
        .join('');
    }

    function onWeatherForFive(data) {
      const arrDate = [];
      arrDate.push(data.list[0]);

      data.list.map(obj => {
        const dt = obj.dt_txt.split(' ').splice(1).join();
        if (dt === '12:00:00') {
          arrDate.push(obj);
        }
      });
      arrDate[0].dt_txt = 'Today';
      return arrDate;
    }

    function successCallback(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      weather(latitude, longitude);
    }

    function errorCallback(error) {
      console.log('Ошибка получения геолокации: ' + error.message);
      weather();
    }

    function location() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          successCallback,
          errorCallback
        );
      } else {
        console.log('Geolocation не поддерживается');
      }
    }

    function changeButtonWheater(e) {
      if (refsWeather.weatherButton.textContent === 'Weather for Week') {
        refsWeather.weatherButton.textContent = 'Weather for Day';
        refsWeather.weatherContainer.style.padding = '15px 10px 15px 10px';
        refsWeather.weatherBox.style.alignItems = 'flex-start';

        weatherForFive(latitude, longitude);
        return;
      }
      refsWeather.weatherContainer.style.padding = '45px 53px 45px 53px';
      refsWeather.weatherButton.textContent = 'Weather for Week';
      refsWeather.weatherBox.style.alignItems = 'center';
      location();
    }
  } catch (error) {
    console.log(error);
    Notify.failure(`${error}`);
  }
}

function onCalendarChange(e) {
  let filteredNews = [];
  filteredNews = newsApi.newsDataArr.filter(item => {
    const dateString = NormalizeData.formatDateToString(item.date);
    if (selectedDate[1] === '') {
      return dateString === selectedDate[0];
    } else {
      return dateString >= selectedDate[0] && dateString <= selectedDate[1];
    }
  });
  if (filteredNews.length === 0) {
    refs.notFoundBox.classList.add('not-found-box');
    refs.notFoundBox.innerHTML = `<h2 class="not-found-box__title">We haven’t found news from <br> this date</h2>
    <img src="https://live.staticflickr.com/65535/52770181328_d91f5366f0_z.jpg">`;
    return;
  }
  markup.clearMarkup(refs.galleryEl);
  markup.renderMarkup(
    refs.galleryEl,
    markup.createGalleryCardMarkup(filteredNews)
  );
}
