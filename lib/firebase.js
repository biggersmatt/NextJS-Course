// import { initializeApp } from 'firebase/app';
// import { GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSqNQLnZgw6vOgaKy_enQH7blBk8RF788",
  authDomain: "next-course-3221d.firebaseapp.com",
  projectId: "next-course-3221d",
  storageBucket: "next-course-3221d.appspot.com",
  messagingSenderId: "173003566465",
  appId: "1:173003566465:web:2fc11e57c913a95a778c80"
};

// const app = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider();
// export const auth = getAuth();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();
export { auth, provider, firestore };






// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/storage'

// const firebaseConfig = {
//   apiKey: "AIzaSyCSqNQLnZgw6vOgaKy_enQH7blBk8RF788",
//   authDomain: "next-course-3221d.firebaseapp.com",
//   projectId: "next-course-3221d",
//   storageBucket: "next-course-3221d.appspot.com",
//   messagingSenderId: "173003566465",
//   appId: "1:173003566465:web:2fc11e57c913a95a778c80"
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig)
// }

// export const auth = firebase.auth();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// export const firestore = firebase.firestore();
// export const storage = firebase.storage();

