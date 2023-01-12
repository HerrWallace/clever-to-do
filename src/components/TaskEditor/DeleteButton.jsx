import { Link } from 'react-router-dom';

export const DeleteButton = (props) => {
  return (
    <div className='flex justify-end'>
      <Link className='mr-2 mt-1 w-[35%]' to={'/'}>
        <button
          onClick={props.deleteClick}
          className='w-full rounded-sm border-2 border-red-500 bg-red-600 p-1 text-white'
        >
          Delete Task
        </button>
      </Link>
    </div>
  );
};
