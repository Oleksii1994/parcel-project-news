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
};

refs.chancgePassword.addEventListener('submit', changeUserPassword);

getNameAndEmail();

function getNameAndEmail() {
  get(usersRef)
    .then(snapshot => {
      snapshot.forEach(childSnapshot => {
        const user = auth.currentUser;
        const userArr = childSnapshot.val();
        if (userArr.email === user.email) {
          //   console.log(userArr);
        }

        const newsFavourite = userArr.newsFavouriteData.filter(
          item => item !== ''
        );
        const newsRead = userArr.newsReadData.filter(item => item !== '');

        refs.userName.innerHTML = userArr.username;
        refs.userEmail.innerHTML = userArr.email;
        refs.favoriteNews.innerHTML = newsFavourite.length;
        refs.readNews.innerHTML = newsRead.length;
      });
    })
    .catch(error => {
      console.error(error);
    });
}

function changeUserPassword(e) {
  e.preventDefault();
  const input = e.target.children[1].value;
  console.log(input);
  if (refs.changePasswordPrg.textContent === 'old password') {
    get(usersRef)
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          const user = auth.currentUser;

          // console.log(user.uid);

          const userArr = childSnapshot.val();
          if (userArr.email === user.email) {
            // console.log(userArr.password);
            if (input === userArr.password) {
              Notiflix.Notify.success('Corect Password');
              refs.changePasswordPrg.innerHTML = 'new password';
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
  if (refs.changePasswordPrg.textContent === 'new password') {
    get(usersRef)
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          const user = auth.currentUser;
          const userArr = childSnapshot.val();
          if (userArr.email === user.email) {
            refs.changePasswordPrg.innerHTML = 'old password';
            // console.log(userArr.password);
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
