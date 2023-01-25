import { Link } from 'react-router-dom';
export const NotFound = () => {
  return (
    <div className='flex flex-col items-center w-full mt-10'>
      <h3 className="font-bold ">404</h3>
      <p>Page not found</p>
      <Link className='mt-5' to='/home'>Return <span className='text-orange-300 font-medium'>Home</span></Link>
    </div>
  );
};