import { Link } from 'react-router-dom';

export const Task = (props) => {
  return (
    <div className='my-5 flex cursor-pointer items-center text-2xl'>
      <input
        className='mr-2 shrink-0'
        type='checkbox'
        onClick={() => props.toggleComplete(props.todo)}
        defaultChecked={props.todo.completed}
      />
      <Link className='h-full w-full' to='/editor' state={props.todo}>
        {props.todo.title}
      </Link>
    </div>
  );
};
