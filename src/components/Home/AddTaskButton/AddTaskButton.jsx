import { Link } from 'react-router-dom';

export const AddTaskButton = (props) => {
  return (
    <div
      className=' sticky bottom-5 mt-20 flex items-end justify-center 2xl:bottom-16'
      onClick={props.onClick}
    >
      <Link to={props.link}>
        <button className='h-14 w-80 rounded-full bg-orange-500 text-lg text-white hover:bg-orange-400'>
          {props.buttonText}
        </button>
      </Link>
    </div>
  );
};
