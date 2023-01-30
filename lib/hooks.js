import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from "../lib/firebase";
import { getFirestore, collection, query, where, onSnapshot, getDocs } from "firebase/firestore";

export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;
    
    // if (user) {
    //   const ref = doc(firestore, `user/${user.uid}`);
    //   unsubscribe = onSnapshot(ref, (querySnapshot) => {
    //     querySnapshot.docs.forEach((doc) => {
    //       setUsername(doc.data().username);
    //     })
    //   })
    //   // unsubscribe = ref.onSnapshot((doc) => {
    //   //   setUsername(doc.data()?.username);
    //   // })
    // } else {
    //   setUsername(null);
    // }

    if (user) {
      const ref = query(collection(firestore, 'user'), where('uid', '==', user.uid));
      unsubscribe = onSnapshot(ref, (querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          setUsername(doc.data().username);
        })
      })
    } else {
      setUsername(null);
    }

    return unsubscribe;

  }, [user]);

  return{ user, username };
}