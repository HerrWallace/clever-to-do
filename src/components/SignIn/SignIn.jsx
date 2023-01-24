import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { Input } from './SignInComponents/Input';
import { ButtonGoogle } from './SignInComponents/ButtonGoogle';

export const SignIn = () => {
  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div className='mt-36 box-border flex max-h-screen justify-center'>
      <div className='flex h-auto w-[75%] flex-col items-center gap-2 md:w-[45%] lg:w-[30%]'>
        <h1 className='mb-6 text-4xl font-bold'>Tassker</h1>

        <Input />

        <div className='mt-4 flex text-zinc-500'>OR</div>

        <ButtonGoogle signInWithGoogle={signInWithGoogle} />

        <div className='mt-20 text-lg text-zinc-500'>
          Don't have an Account?{' '}
          <Link to='/register' className='font-medium hover:text-orange-300'>Sign up</Link>
        </div>
      </div>
    </div>
  );
};