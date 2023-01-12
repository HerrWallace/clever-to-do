import { useState } from 'react';
import { db } from '../../firebase';
import {
  setDoc,
  getDoc,
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { AddTaskButton } from '../Tasks/AddTaskButton/AddTaskButton';
import { DeleteButton } from './DeleteButton';

export const EditTask = (props) => {
  const isTodoExists = props.todo !== null;
  const [title, setTitle] = useState(!isTodoExists ? '' : props.todo.title);
  const [text, setText] = useState(!isTodoExists ? '' : props.todo.text);

  const submitClick = async () => {
    if (title !== '') {
      await addDoc(collection(db, 'todos'), {
        title,
        text,
        completed: false,
      });
    }
  };

  const editClick = async () => {
    await updateDoc(doc(db, 'todos', props.todo.id), { title: title, text: text });
  };

  const deleteClick = async () => {
    await deleteDoc(doc(db, 'todos', props.todo.id));
  };

  const returnButton = () => {
    if (isTodoExists) {
      return (
        <>
          <DeleteButton deleteClick={deleteClick} />
          <AddTaskButton buttonText={'Edit task'} link={'/'} onClick={editClick} />
        </>
      );
    } else {
      return (
        <AddTaskButton buttonText={'Submit task'} link={'/'} onClick={submitClick} />
      );
    }
  };

  return (
    <>
      <form>
        <input
          type='text'
          className='mb-4 h-12 w-full resize-none p-2 font-bold'
          value={title}
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </form>

      <form className='border-b-2 border-t-2'>
        <textarea
          className=' h-[60vh] w-full resize-none p-2 text-gray-400'
          placeholder='Text here'
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </form>

      {returnButton()}
    </>
  );
};
