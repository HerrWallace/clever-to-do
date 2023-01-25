import { Header } from './Header/Header';
import { Calendar } from './Calendar/Calendar';
import { TaskList } from './TaskList/TaskList';
import { AddTaskButton } from './AddTaskButton/AddTaskButton';
import { useEffect, useState } from 'react';
import { auth, db } from '../../firebase';
import { query, collection, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

export const Home = () => {
  const [pickedDay, setPickedDay] = useState(new Date().getDate());
  const [pickedMonth, setPickedMonth] = useState(new Date().getMonth());
  const [todos, setTodos] = useState([]);

  const [user] = useAuthState(auth);
  const userId = user.auth.currentUser.uid;

  useEffect(() => {
    const q = query(collection(db, userId));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, userId, todo.id), { completed: !todo.completed });
  };

  const changePickedDay = (day, month) => {
    setPickedDay(day);
    setPickedMonth(month);
  };

  return (
    <div className='container mx-auto block h-screen max-w-5xl overflow-x-hidden'>
      <Header />
      <Calendar
        todos={todos}
        changePickedDay={changePickedDay}
        pickedMonth={pickedMonth}
        pickedDay={pickedDay}
      />
      <TaskList
        todos={todos}
        toggleComplete={toggleComplete}
        pickedDay={pickedDay}
        pickedMonth={pickedMonth}
        userId={userId}
      />
      <AddTaskButton buttonText={'+ Add a new task'} link={'/editor'} />
    </div>
  );
};
