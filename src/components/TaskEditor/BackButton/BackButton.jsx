import { Link } from 'react-router-dom';

export const BackButton = () => {
  return (
    <h2 className='my-5 mx-1'>
      <Link className='pr-3 text-lg font-bold' to='/home'>
        &lt;
      Today's Task
      </Link>
    </h2>
  );
};
