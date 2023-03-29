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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const usersRef = ref(database, 'users');

export function addToReadNews(article, userId) {
  const currentUser = auth.currentUser;

  // console.log(currentUser);

  get(usersRef)
    .then(snapshot => {
      const newsArr = [];
      let articleExists = false;
      snapshot.forEach(childSnapshot => {
        const user = childSnapshot.val();
        if (user.email.toLowerCase() === currentUser.email.toLowerCase()) {
          // check if email matches
          user.newsReadData.forEach(item => {
            if (item.id === article.id) {
              articleExists = true;
            }
          });

          user.newsReadData.forEach(item => {
            newsArr.push(item);
          });
        }
      });

      if (articleExists) {
        console.log('Article already exists');
        Notiflix.Notify.success('News already added to read');
        return;
      }
      newsArr.push(article);
      const filteredNewsArr = newsArr.filter(Boolean);

      Notiflix.Notify.success('News added to read');

      return update(ref(database, `users/${userId}`), {
        newsReadData: filteredNewsArr,
      })
        .then(() => {
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
}
