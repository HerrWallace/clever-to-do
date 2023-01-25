import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { Input } from './SignInComponents/Input';
import { ButtonGoogle } from './SignInComponents/ButtonGoogle';
import { auth } from '../../firebase';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignIn = (props) => {
  const location = useLocation();

  if (props.user) {
    return <Navigate to='/home' replace state={{ path: location.pathname }} />;
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signInWithEmail = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className='mt-36 box-border flex max-h-screen justify-center'>
      <div className='flex h-auto w-[75%] flex-col items-center gap-2 md:w-[45%] lg:w-[30%]'>
        <h1 className='mb-6 text-4xl font-bold'>Tassker</h1>

        <Input handleClick={signInWithEmail} />

        <div className='mt-4 flex text-zinc-500'>OR</div>

        <ButtonGoogle signInWithGoogle={signInWithGoogle} />

        <div className='mt-20 text-lg text-zinc-500'>
          Don't have an Account?{' '}
          <Link to='/register' className='font-medium hover:text-orange-300'>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
