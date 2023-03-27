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
import { refs } from '../refs/refs';
import { profileIcon } from '../refs/profileIconURL';

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
export let LOCALSTORAGE_USER = '';

export const usersRef = ref(database, 'users');

const refses = {
  // body: document.querySelector('body'),
  singUp: document.querySelector('#singUp'),
  login: document.querySelector('#login'),
  logOut: document.querySelector('#logOut'),
  containerSignUp: document.querySelector('.login-box__signUp'),
  containerLogIn: document.querySelector('.login-box__logIn'),
  containerLogOut: document.querySelector('.login-box__logOut'),
  modalAuth: document.querySelector('.modal-auth'),
  exitModal: document.querySelector('.exit-modal'),
  authButton: document.querySelector('#authButton'),
  authButtonMobile: document.querySelector('#authButtonMobile'),
  authButtonMobileText: document.querySelector('#authButtonMobileText'),
};

// Добавление в базу пользователя

refses.singUp.addEventListener('click', singUpFun);
export function singUpFun(e) {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value;

  // console.log(email);

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      //
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email,
        password: password,
        newsFavouriteData: [''],
        newsReadData: [''],
        userPhoto: profileIcon,
      });

      alert('user created');
      location.reload();
      //
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
}

// Вход пользователя в акаунт

refses.login.addEventListener('click', loginFun);
export function loginFun(e) {
  const email = document.getElementById('emailLogin').value;
  const password = document.getElementById('passwordLogin').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;

      const dt = new Date();
      update(ref(database, 'users/' + user.uid), {
        last_login: dt,
      });

      alert('User loged in!');
      location.reload();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
}

// Выход польвателя с акаунта

refses.logOut.addEventListener('click', logOutFun);
export function logOutFun(e) {
  signOut(auth)
    .then(() => {
      alert('User loged out!');
      // location.reload();
      window.location.href = './index.html';
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
}

// Функция которая делает что угодно после того как пользователь
// или залогинился или вышел с акаунтта

const user = auth.currentUser;
onAuthStateChanged(auth, user => {
  if (user) {
    refses.containerSignUp.style.display = 'none';
    refses.containerLogIn.style.display = 'none';
    refses.authButton.textContent = 'Profile/LogOut';
    refses.authButtonMobileText.textContent = `Profile/LogOut`;

    // console.log(user.uid);
  } else {
    refses.authButton.textContent = 'LogIn';
    refses.authButtonMobileText.textContent = 'LogIn';
    refses.containerLogOut.style.display = 'none';
  }
});

// Получение масива пользователей

get(usersRef)
  .then(snapshot => {
    const users = [];
    snapshot.forEach(childSnapshot => {
      const user = childSnapshot.val();
      // console.log(user.username);
      user.id = childSnapshot.key;
      users.push(user);
    });
    // console.log(users);
  })
  .catch(error => {
    // console.error(error);
  });

//  Открытие и закрытие модалки ...........................................

refses.authButton.addEventListener('click', modalAuthOpen);
refses.authButtonMobile.addEventListener('click', modalAuthOpen);
refses.modalAuth.addEventListener('click', onCloseModal);

function modalAuthOpen() {
  refses.modalAuth.style.display = 'block';
}

function onCloseModal(e) {
  if (
    e.target.className === 'modal-auth' ||
    e.target.className === 'exit-modal' ||
    e.target.className === 'exit-modal-in-box'
  ) {
    refses.modalAuth.style.display = 'none';
  }
}

// Добавление и удаление вкладка любимое

function addToFavouriteNews(article) {
  // const inputObj = {
  //   name: input,
  //   id: Math.round(Math.random() * 100000),
  // };
  const user = auth.currentUser;
  // console.log(user);

  if (user) {
    const userId = user.uid;

    get(usersRef)
      .then(snapshot => {
        const newsArr = [];
        snapshot.forEach(childSnapshot => {
          const user = childSnapshot.val();
          newsArr.push(...user.newsFavouriteData);
          newsArr.push(article);
        });

        const filteredNewsArr = newsArr.filter(Boolean);
        // console.log(filteredNewsArr);

        // addToFavourite.reset();

        return update(ref(database, `users/${userId}`), {
          newsFavouriteData: filteredNewsArr,
        })
          .then(() => {
            // console.log('News added to favorites');
            Notiflix.Notify.success('News added to favorites');
            newsArr.splice(0, newsArr.length);
          })
          .catch(error => {
            Notiflix.Notify.failure('Something went wrong, please try again');
            console.error(error);
          });
      })
      .catch(error => {
        Notiflix.Notify.failure('Something went wrong, please try again');
        console.error(error);
      });
  } else {
    console.log('User not authenticated');
  }
}

function deliteFromFavouriteNews(e) {
  e.preventDefault();

  const input = e.target.children[0].value;
  const idToDelete = parseFloat(input); // преобразуем строку в число

  const user = auth.currentUser;

  if (user) {
    const userId = user.uid;

    get(usersRef)
      .then(snapshot => {
        const newsArr = [];
        snapshot.forEach(childSnapshot => {
          const user = childSnapshot.val();
          newsArr.push(...user.newsFavouriteData);
        });

        const filteredNewsArr = newsArr.filter(newsObj => {
          return newsObj.id !== idToDelete;
        });

        if (filteredNewsArr.length === 0) {
          filteredNewsArr.push('');
        }

        return update(ref(database, `users/${userId}`), {
          newsFavouriteData: filteredNewsArr,
        })
          .then(() => {
            // console.log('News deleted successfully');
            Notiflix.Notify.success('News removed from favorites');
          })
          .catch(error => {
            Notiflix.Notify.failure('Something went wrong, please try again');
            console.error(error);
          });
      })
      .catch(error => {
        Notiflix.Notify.failure('Something went wrong, please try again');
        console.error(error);
      });
  } else {
    console.log('User not authenticated');
  }
}

function getFavNews() {
  const favNewsArr = [];
  get(usersRef)
    .then(snapshot => {
      const user = auth.currentUser;
      if (user === null) {
        return;
      }
      // console.log(user.email);

      snapshot.forEach(childSnapshot => {
        const userArr = childSnapshot.val();
        // console.log(userArr.email);
        if (userArr.email === user.email) {
          // console.log(userArr.newsFavouriteData);
          favNewsArr.push(
            ...userArr.newsFavouriteData.filter(item => item !== '')
          );
          // console.log(favNewsArr);
        }
      });
    })
    .catch(error => {
      console.error(error);
    });

  return favNewsArr;
}

// Добавление и удаление вкладка прочитаное

function addToReadNews(e) {
  e.preventDefault();

  const input = e.target.children[0].value;
  const inputObj = {
    name: input,
    id: Math.round(Math.random() * 100000),
  };
  const user = auth.currentUser;
  // console.log(user);

  if (user) {
    const userId = user.uid;

    get(usersRef)
      .then(snapshot => {
        const newsArr = [];
        snapshot.forEach(childSnapshot => {
          const user = childSnapshot.val();
          newsArr.push(...user.newsReadData);
          newsArr.push(inputObj);
        });

        const filteredNewsArr = newsArr.filter(Boolean);
        console.log(filteredNewsArr);

        return update(ref(database, `users/${userId}`), {
          newsReadData: filteredNewsArr,
        })
          .then(() => {
            // console.log('News updated successfully');
            Notiflix.Notify.success('News added to read');
            newsArr.splice(0, newsArr.length);
          })
          .catch(error => {
            Notiflix.Notify.failure('Something went wrong, please try again');
            console.error(error);
          });
      })
      .catch(error => {
        Notiflix.Notify.failure('Something went wrong, please try again');
        console.error(error);
      });
  } else {
    console.log('User not authenticated');
  }
}

function deliteFromReadNews(e) {
  e.preventDefault();

  const input = e.target.children[0].value;
  const idToDelete = parseFloat(input); // преобразуем строку в число

  const user = auth.currentUser;

  if (user) {
    const userId = user.uid;

    get(usersRef)
      .then(snapshot => {
        const newsArr = [];
        snapshot.forEach(childSnapshot => {
          const user = childSnapshot.val();
          newsArr.push(...user.newsReadData);
        });

        const filteredNewsArr = newsArr.filter(newsObj => {
          return newsObj.id !== idToDelete;
        });

        if (filteredNewsArr.length === 0) {
          filteredNewsArr.push('');
        }

        return update(ref(database, `users/${userId}`), {
          newsReadData: filteredNewsArr,
        })
          .then(() => {
            console.log('News deleted successfully');
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  } else {
    console.log('User not authenticated');
  }
}

function getReadNews() {
  const readNewsArr = [];
  get(usersRef)
    .then(snapshot => {
      const user = auth.currentUser;
      if (user === null) {
        return;
      }
      // console.log(user.email);

      snapshot.forEach(childSnapshot => {
        const userArr = childSnapshot.val();
        // console.log(userArr.email);
        if (userArr.email === user.email) {
          // console.log(userArr.newsFavouriteData);
          readNewsArr.push(...userArr.newsReadData.filter(item => item !== ''));
          // console.log(favNewsArr);
        }
      });
    })
    .catch(error => {
      console.error(error);
    });

  return readNewsArr;
}

// console.log('fav', getFavNews());

// console.log('read', getReadNews());

// Перенаправление в личный

// const buttonInProfile = document.querySelector('#buttonInProfile');

// buttonInProfile.addEventListener('click', e => {
//   if (auth.currentUser) {
//     window.location.href = './auth-page.html';
//   } else {
//     Notiflix.Notify.info(
//       'To gain access to your personal account you need to log in or register'
//     );
//   }
// });
