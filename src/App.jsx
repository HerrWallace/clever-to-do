import { Header } from './components/Header/Header';
import { Calendar } from './components/Calendar/Calendar';
import { TaskList } from './components/TaskList/TaskList';
import { NewTaskButton } from './components/NewTask/NewTaskButton';

const App = () => {
  return (
    <div className='container mx-auto block h-screen'>
      <Header />
      <Calendar />
      <TaskList tasksRemain={4} />
      <NewTaskButton />
    </div>
  );
};

export default App;
