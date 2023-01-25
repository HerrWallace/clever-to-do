import { LoaderSVG } from './LoaderSVG';

export const Loader = () => {
  return (
    <div className='flex h-screen items-center justify-center text-orange-500'>
      <div className='animate-spin'>
        <LoaderSVG />
      </div>
    </div>
  );
};
