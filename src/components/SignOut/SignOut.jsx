import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

export const SignOut = () => {
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
