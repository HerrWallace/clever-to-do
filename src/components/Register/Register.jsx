import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { Input } from './../SignIn/SignInComponents/Input';
import { auth } from './../../firebase';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = (props) => {
  const location = useLocation();

  if (props.user) {
    return <Navigate to='/home' replace state={{ path: location.pathname }} />;
  }

  const registerWithEmail = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className='mt-36 box-border flex max-h-screen justify-center'>
      <div className='flex h-auto w-[75%] flex-col items-center gap-2 md:w-[45%] lg:w-[30%]'>
        <h1 className='mb-6 text-4xl font-bold'>Registration</h1>

        <Input handleClick={registerWithEmail} />

        <div className='mt-20 text-lg text-zinc-500'>
          Already have an Account?{' '}
          <Link to='/home' className='font-medium hover:text-orange-300'>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};
