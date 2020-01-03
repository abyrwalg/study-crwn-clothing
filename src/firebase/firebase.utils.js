import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBI3GC8scz9HBOHy9BiN_4gDKu8Q1-2uA4',
  authDomain: 'crwn-db-d1984.firebaseapp.com',
  databaseURL: 'https://crwn-db-d1984.firebaseio.com',
  projectId: 'crwn-db-d1984',
  storageBucket: 'crwn-db-d1984.appspot.com',
  messagingSenderId: '999193307679',
  appId: '1:999193307679:web:4b66f907610d73292f432a',
};

export async function createUserProfileDocument(userAuth, additionalData) {
  if (userAuth) {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log(error);
      }
    }
    return userRef;
  }
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export function signInWithGoogle() {
  auth.signInWithPopup(provider);
}

export default firebase;
