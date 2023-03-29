import Notiflix from 'notiflix';
import { initializeApp, firebase } from 'firebase/app';
import {
  getDatabase,
  set,
  ref,
  update,
  get,
  child,
  userId,
} from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDD_Eh4tyvM30ivpTHWqfHo7r2h0gDev4Y',
  authDomain: 'project-goit2023-js.firebaseapp.com',
  databaseURL: 'https://project-goit2023-js-default-rtdb.firebaseio.com',
  projectId: 'project-goit2023-js',
  storageBucket: 'project-goit2023-js.appspot.com',
  messagingSenderId: '407142734195',
  appId: '1:407142734195:web:6d45ec3cdde16415370d06',
  measurementId: 'G-VMY0EQ75TG',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
export let LOCALSTORAGE_USER = '';

export const usersRef = ref(database, 'users');

const refs = {
  userName: document.querySelector('.user-profile-name'),
  userEmail: document.querySelector('.user-profile-email'),
  chancgePassword: document.querySelector('.change-password'),
  changePasswordPrg: document.querySelector('.change-password--prg'),
  favoriteNews: document.querySelector('.favorite-news-render'),
  readNews: document.querySelector('.read-news-render'),
  profileImg: document.querySelector('.profile-img'),
  editPhoto: document.querySelector('.profile-button'),
  profileImgCard: document.querySelector('.profile-img__card'),
};

refs.chancgePassword.addEventListener('submit', changeUserPassword);
refs.editPhoto.addEventListener('click', editPhotoFun);

getNameAndEmail();

function getNameAndEmail() {
  get(usersRef)
    .then(snapshot => {
      snapshot.forEach(childSnapshot => {
        const user = auth.currentUser;

        if (!user) {
          return;
        }
        const userArr = childSnapshot.val();

        if (userArr.email.toLowerCase() === user.email.toLowerCase()) {
          const newsFavourite = userArr.newsFavouriteData.filter(
            item => item !== ''
          );
          const newsRead = userArr.newsReadData.filter(item => item !== '');

          refs.profileImgCard.src = `${userArr.userPhoto}`;
          refs.userName.innerHTML = userArr.username;
          refs.userEmail.innerHTML = userArr.email;
          refs.favoriteNews.innerHTML = newsFavourite.length;
          refs.readNews.innerHTML = newsRead.length;
        }
      });
    })
    .catch(error => {
      console.error(error);
    });
}

function changeUserPassword(e) {
  e.preventDefault();
  const input = e.target.children[1].value;

  if (refs.changePasswordPrg.textContent === 'Old password:') {
    get(usersRef)
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          const user = auth.currentUser;

          const userArr = childSnapshot.val();

          if (userArr.email.toLowerCase() === user.email.toLowerCase()) {
            if (input === userArr.password) {
              Notiflix.Notify.success('Corect Password');
              refs.changePasswordPrg.innerHTML = 'New password:';
            } else {
              Notiflix.Notify.failure('Wrong password, please try again');
            }
          }
        });
      })
      .catch(error => {
        Notiflix.Notify.failure('Something went wrong, please try again');
        console.error(error);
      });
  }
  if (refs.changePasswordPrg.textContent === 'New password:') {
    get(usersRef)
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          const user = auth.currentUser;
          const userArr = childSnapshot.val();
          if (userArr.email.toLowerCase() === user.email.toLowerCase()) {
            refs.changePasswordPrg.innerHTML = 'Old password:';

            Notiflix.Notify.success('Password changed successfully');
            return update(ref(database, `users/${user.uid}`), {
              password: input,
            });
          }
        });
      })
      .catch(error => {
        Notiflix.Notify.failure('Something went wrong, please try again');
        console.error(error);
      });
  }
}

function editPhotoFun() {
  refs.editPhoto.disabled = true;
  const form = `
  <div class="input__wrapper">
    <input name="file" type="file" id="input__file" class="input input__file add-photo-in-data" multiple>
    <label for="input__file" class="input__file-button">
      <span class="input__file-icon-wrapper">
        <svg class="img-download" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          <path d="M61.88,93.12h0a3,3,0,0,0,.44.36l.24.13a1.74,1.74,0,0,0,.59.24l.25.07h0a3,3,0,0,0,1.16,0l.26-.08.3-.09a3,3,0,0,0,.3-.16l.21-.12a3,3,0,0,0,.46-.38L93,66.21A3,3,0,1,0,88.79,62L67,83.76V3a3,3,0,0,0-6,0V83.76L39.21,62A3,3,0,0,0,35,66.21Z"/>
          <path d="M125,88a3,3,0,0,0-3,3v22a9,9,0,0,1-9,9H15a9,9,0,0,1-9-9V91a3,3,0,0,0-6,0v22a15,15,0,0,0,15,15h98a15,15,0,0,0,15-15V91A3,3,0,0,0,125,88Z"/>
        </svg>
      </span>
      <span class="input__file-button-text">Select a file</span>
    </label>
  </div>`;
  refs.profileImg.insertAdjacentHTML('beforeend', form);

  const formPhoto = document.querySelector('.add-photo-in-data');
  formPhoto.addEventListener('change', addUserPhotoInData);

  function addUserPhotoInData(e) {
    e.preventDefault();

    // Читаем содержимое файла
    const fileReader = new FileReader();
    fileReader.readAsDataURL(formPhoto.files[0]);

    // Создаем ссылку на фото после того, как содержимое файла будет прочитано
    fileReader.onload = function () {
      const photoData = fileReader.result;
      refs.profileImgCard.src = `${photoData}`;

      get(usersRef)
        .then(snapshot => {
          snapshot.forEach(childSnapshot => {
            const user = auth.currentUser;
            const userId = user.uid;
            if (!user) {
              return;
            }
            const userArr = childSnapshot.val();

            if (userArr.email.toLowerCase() === user.email.toLowerCase()) {
              return update(ref(database, `users/${userId}`), {
                userPhoto: photoData,
              })
                .then(() => {
                  Notiflix.Notify.success('Photo added to profile');
                })
                .catch(error => {
                  Notiflix.Notify.failure(
                    'Something went wrong, please try again'
                  );
                  console.error(error);
                });
            }
          });
        })
        .catch(error => {
          console.error(error);
        });
    };
  }
}
