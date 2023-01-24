import { ButtonGoogleSVG } from './ButtonGoogleSVG';

export const ButtonGoogle = (props) => {
  return (
    <>
      <button
        className='mt-4 flex items-center rounded-lg px-2 shadow-md hover:shadow-xl'
        onClick={props.signInWithGoogle}
      >
        <ButtonGoogleSVG />
        Sign in with google
      </button>
    </>
  );
};
