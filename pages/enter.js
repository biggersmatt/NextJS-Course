import {auth,provider} from "../lib/firebase";
import {signInWithPopup, signOut, GoogleAuthProvider} from "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function EnterPage () {
  const { user, username } = useContext(UserContext);
  console.log(user, username)

  return (
    <main>
      <SignInButton/>
      <SignOutButton/>
        <h1>EnterPage</h1>
        {/* {user ? 
          !username ? <UsernameForm /> : <SignOutButton /> 
          : 
          <SignInButton />} */}
    </main>
  )
}

function SignInButton() {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src = {'/google.png'}/> Sign in with Google
    </button>
  )
}

function SignOutButton() {
  return <button onClick={() => signOut(auth).then(() => {
    // Sign-out successful
    console.log('success')
  }).catch((error) => {
    // An error happened
    console.log('error')
  })}>Sign Out</button>
}

function UsernameForm() {

}