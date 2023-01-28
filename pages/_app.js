import '../styles/globals.css';
import { auth, firestore } from "../lib/firebase";

import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';

import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { getFirestore, collection, query, where, onSnapshot, getDocs } from "firebase/firestore";

export default function App({ Component, pageProps }) {

  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;
    
    if (user) {
      const ref = query(collection(firestore, 'user'), where('uid', '==', user.uid));
      console.log('REF' + ref)
      unsubscribe = onSnapshot(ref, (querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          setUsername(doc.data().username);
        })
      })
      // unsubscribe = ref.onSnapshot((doc) => {
      //   setUsername(doc.data()?.username);
      // })
    } else {
      setUsername(null);
    }

    return unsubscribe;

  }, [user]);

  return (
    <UserContext.Provider value={{ user, username }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
    
  )
}
