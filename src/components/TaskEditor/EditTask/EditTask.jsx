import { useState } from 'react';
import { AddTaskButton } from '../../Home/AddTaskButton/AddTaskButton';
import { TrashCanSVG } from './TrashCanSVG';

export const EditTask = (props) => {
  const isTodoExists = props.todo !== null;

  const [title, setTitle] = useState(!isTodoExists ? '' : props.todo.title);
  const [text, setText] = useState(!isTodoExists ? '' : props.todo.text);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [year, month, day] = date.split('-').map((i) => Number(i));

  const returnTaskInfo = () => {
    return {
      title,
      text,
      completed: false,
      date: {
        day,
        month,
        year,
      },
      time: new Date().getTime(),
    };
  };

  return (
    <>
      <form>
        <input
          type='text'
          className='mb-4 h-12 w-full resize-none p-2 text-xl font-bold'
          value={title}
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </form>

      <form className='mb-4 border-b-2 border-t-2'>
        <textarea
          className='h-[60vh] w-full resize-none p-2 text-gray-400'
          placeholder='Text here'
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </form>

      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <p className='p-2 font-bold'>Date:</p>
          <input
            className='max-w-2xl cursor-pointer rounded-xl border-2 border-zinc-200 pl-1'
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>

        <div className='pr-5'>
          <TrashCanSVG deleteClick={props.deleteClick} />
        </div>
      </div>

      <AddTaskButton
        buttonText={isTodoExists ? 'Edit task' : 'Submit task'}
        link={'/home'}
        onClick={
          isTodoExists
            ? () => props.editClick(returnTaskInfo())
            : () => props.submitClick(returnTaskInfo())
        }
      />
    </>
  );
};
