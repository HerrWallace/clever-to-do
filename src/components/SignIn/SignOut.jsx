import { getAuth, signOut } from 'firebase/auth';

export const SignOut = () => {
  const auth = getAuth();
  return (
    <>
      <button
        className='shrink-0 p-1 font-bold hover:text-orange-400'
        onClick={() => signOut(auth)}
      >
        Sign out
      </button>
    </>
  );
};
