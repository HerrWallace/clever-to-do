import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase';

export const Input = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  return (
    <>
      <label className='flex w-full flex-col text-zinc-500'>
        Email
        <input
          className='rounded-md border-2 border-zinc-200 p-1'
          type='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>

      <label className='flex w-full flex-col text-zinc-500'>
        Password
        <input
          className='rounded-md border-2 border-zinc-200 p-1'
          type='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>

      <button
        className='mt-8 w-full rounded-md border-2 bg-orange-400 p-1 font-medium text-white hover:bg-orange-400 hover:text-white'
        onClick={() => {
          props.handleClick(email, password);
          user && navigate('/home');
        }}
      >
        Submit
      </button>
    </>
  );
};
