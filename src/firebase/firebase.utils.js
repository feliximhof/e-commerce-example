import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDI5U0BFrYDZ6-ePRwVBr9QWyOcWyugYq0",
    authDomain: "e-commerce-example-7f2a5.firebaseapp.com",
    projectId: "e-commerce-example-7f2a5",
    storageBucket: "e-commerce-example-7f2a5.appspot.com",
    messagingSenderId: "112881007317",
    appId: "1:112881007317:web:e518f92f4029934896405c"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName, email, createdAt, ...additionalData
        })
        console.log('success')
      } catch (err) {
        console.log(err.message );
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider(); 
  provider.setCustomParameters({ prompt: 'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;