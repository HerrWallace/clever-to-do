import { Task } from './Task';

export const TaskList = (props) => {
  return (
    <div className='mt-8 ml-7 xl:mt-20'>
      <h2 className='mb-2 text-2xl font-bold'>{props.tasksRemain} Tasks Today</h2>
      <hr></hr>
      <div className='flex flex-col pl-3 text-lg'>
        <Task taskName={'Task 1 and 2'} />
        <Task taskName={'Task 2'} />
        <Task taskName={'Task 3'} />
        <Task taskName={'Task 4'} />
      </div>
    </div>
  );
};
