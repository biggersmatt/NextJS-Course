import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCSqNQLnZgw6vOgaKy_enQH7blBk8RF788",
  authDomain: "next-course-3221d.firebaseapp.com",
  projectId: "next-course-3221d",
  storageBucket: "next-course-3221d.appspot.com",
  messagingSenderId: "173003566465",
  appId: "1:173003566465:web:2fc11e57c913a95a778c80"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();