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

export function addOrDeleteFavoriteNews(article, userId, targetBtn) {
  const currentUser = auth.currentUser;

  get(usersRef)
    .then(snapshot => {
      const newsArr = [];
      let articleExists = false;
      snapshot.forEach(childSnapshot => {
        const user = childSnapshot.val();

        if (user.email === currentUser.email) {
          // check if email matches
          user.newsFavouriteData.forEach(item => {
            if (item.id === article.id) {
              articleExists = true;
            }
            newsArr.push(item);
          });
        }
      });

      if (articleExists) {
        console.log('Article already exists');

        const filteredNewsArr = newsArr.filter(item => {
          return item.id !== article.id;
        });

        const finalNewsArr = filteredNewsArr.filter(Boolean); // remove empty strings

        if (finalNewsArr.length === 0) {
          finalNewsArr.push('');
        }

        return update(ref(database, `users/${userId}`), {
          newsFavouriteData: finalNewsArr,
        })
          .then(() => {
            Notiflix.Notify.success('News removed from favorites');
            targetBtn.innerHTML =
              '<p class="gallery-thumb__name add">Add to favorite<span class="gallery-thumb__icon">&#9825;</span></p>';
          })
          .catch(error => {
            Notiflix.Notify.failure('Something went wrong, please try again');
            console.error(error);
          });
      } else {
        newsArr.push(article);
        const filteredNewsArr = newsArr.filter(Boolean);

        const finalNewsArr = filteredNewsArr.filter(Boolean); // remove empty strings

        return update(ref(database, `users/${userId}`), {
          newsFavouriteData: finalNewsArr,
        })
          .then(() => {
            Notiflix.Notify.success('News added to favorites');
            newsArr.splice(0, newsArr.length);
            targetBtn.innerHTML =
              '<p class="gallery-thumb__name add">Remove from favorite<span class="gallery-thumb__icon">&#10084;</span></p>';
          })
          .catch(error => {
            Notiflix.Notify.failure('Something went wrong, please try again');
            console.error(error);
          });
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Something went wrong, please try again');
      console.error(error);
    });
}

export function renderFavoriteFromFirebace(id) {
  const newsArr = {};
  return get(usersRef)
    .then(snapshot => {
      snapshot.forEach(childSnapshot => {
        const user = childSnapshot.val();
        if (user.id !== id) {
          // populate the newsArr object with the articles
          newsArr.articles = user.favoriteArticles;
        }
      });
      return newsArr;
    })
    .catch(error => {
      Notiflix.Notify.failure('Something went wrong, please try again');
      console.error(error);
    });
}

export async function getFavNews() {
  const favNewsArr = [];

  try {
    const snapshot = await get(usersRef);

    const user = auth.currentUser;
    if (user === null) {
      return;
    }

    snapshot.forEach(childSnapshot => {
      const userArr = childSnapshot.val();

      if (userArr.email === user.email) {
        favNewsArr.push(
          ...userArr.newsFavouriteData.filter(item => item !== '')
        );
      }
    });

    return favNewsArr;
  } catch (error) {
    console.error(error);
  }
}
