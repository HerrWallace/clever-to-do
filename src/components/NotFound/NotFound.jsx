import { Link } from 'react-router-dom';
export const NotFound = () => {
  return (
    <div className='mt-10 flex w-full flex-col items-center'>
      <h3 className='mb-2 text-7xl font-bold'>404</h3>
      <p>Page not found</p>
      <Link className='mt-6' to='/home'>
        Return <span className='font-medium text-orange-300'>Home</span>
      </Link>
    </div>
  );
};
