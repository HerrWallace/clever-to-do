import { Header } from './Header/Header';
import { Calendar } from './Calendar/Calendar';
import { TaskList } from './TaskList/TaskList';
import { AddTaskButton } from './AddTaskButton/AddTaskButton';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import {
  query,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

export const Home = () => {
  // Read data from firebase
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'todos'));
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
    await updateDoc(doc(db, 'todos', todo.id), { completed: !todo.completed });
  };

  return (
    <div className='container mx-auto block h-screen overflow-x-hidden'>
      <Header />
      <Calendar />
      <TaskList todos={todos} toggleComplete={toggleComplete} />
      <AddTaskButton buttonText={'+ Add a new task'} link={'/editor'} />
    </div>
  );
};
