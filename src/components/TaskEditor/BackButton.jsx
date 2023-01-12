import { Link } from 'react-router-dom';

export const BackButton = () => {
  return (
    <h1 className='my-5 mx-5 text-lg font-bold'>
      <Link className=' pr-3 text-lg font-bold' to='/'>
        &lt;
      </Link>
      Today's Task
    </h1>
  );
};
