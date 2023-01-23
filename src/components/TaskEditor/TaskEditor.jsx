import { useLocation } from 'react-router';
import { BackButton } from './BackButton/BackButton';
import { EditTask } from './EditTask/EditTask';
import { addDoc, collection, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export const TaskEditor = (props) => {
  const location = useLocation();
  const { todo } = location.state;

  const submitClick = async ({ title, text, completed, date, time }) => {
    if (title !== '') {
      await addDoc(collection(db, props.userId), {
        title,
        text,
        completed,
        date,
        time,
      });
    }
  };

  const editClick = async ({ title, text, date, time }) => {
    await updateDoc(doc(db, props.userId, todo.id), {
      title,
      text,
      date,
      time,
    });
  };

  const deleteClick = async () => {
    await deleteDoc(doc(db, props.userId, todo.id));
  };

  return (
    <div className='container mx-auto flex h-screen max-w-5xl flex-col overflow-x-hidden'>
      <BackButton />
      <EditTask
        todo={todo}
        userId={props.userId}
        submitClick={submitClick}
        editClick={editClick}
        deleteClick={deleteClick}
      />
    </div>
  );
};
