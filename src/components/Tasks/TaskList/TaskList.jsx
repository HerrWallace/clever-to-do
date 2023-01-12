import { Task } from './Task';

export const TaskList = (props) => {
  const taskElements = props.todos.map((todo, index) => {
    return <Task key={index} todo={todo} toggleComplete={props.toggleComplete} />;
  });

  return (
    <div className='mt-8 ml-7 xl:mt-20'>
      <h2 className='mb-2 text-2xl font-bold'>{props.todos.length} Tasks Today</h2>
      <hr></hr>
      <div className='flex flex-col pl-3 text-lg'>{taskElements}</div>
    </div>
  );
};
