import { Task } from './Task';

export const TaskList = (props) => {
  const taskElements = [...props.todos]
    .sort((a, b) => a.time - b.time)
    .map((todo) => {
      if (todo.date.day === props.pickedDay) {
        return (
          <Task key={todo.time} todo={todo} toggleComplete={props.toggleComplete} />
        );
      }
    });

  const showTasksToday = () => {
    return props.todos.filter((todo) => todo.date.day === props.pickedDay).length;
  };

  return (
    <div className='mt-8 ml-7 xl:mt-20'>
      <h2 className='mb-2 text-2xl font-bold'>{showTasksToday()} Tasks Today</h2>
      <hr></hr>
      <div className='flex flex-col pl-3 text-lg'>{taskElements}</div>
    </div>
  );
};
