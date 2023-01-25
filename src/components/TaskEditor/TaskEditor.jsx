import { useLocation } from 'react-router';
import { BackButton } from './BackButton/BackButton';
import { EditTask } from './EditTask/EditTask';
import { addDoc, collection, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export const TaskEditor = () => {
  const location = useLocation();
  const todo = location.state;

  const [user] = useAuthState(auth);
  const userId = user.auth.currentUser.uid;

  const submitClick = async ({ title, text, completed, date, time }) => {
    if (title !== '') {
      await addDoc(collection(db, userId), {
        title,
        text,
        completed,
        date,
        time,
      });
    }
  };

  const editClick = async ({ title, text, date, time }) => {
    await updateDoc(doc(db, userId, todo.id), {
      title,
      text,
      date,
      time,
    });
  };

  const deleteClick = async () => {
    await deleteDoc(doc(db, userId, todo.id));
  };

  return (
    <div className='container mx-auto flex h-screen max-w-5xl flex-col overflow-x-hidden'>
      <BackButton />
      <EditTask
        todo={todo}
        userId={userId}
        submitClick={submitClick}
        editClick={editClick}
        deleteClick={deleteClick}
      />
    </div>
  );
};
