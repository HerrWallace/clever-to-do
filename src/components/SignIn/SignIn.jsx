import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const SignIn = () => {
  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  );
};
