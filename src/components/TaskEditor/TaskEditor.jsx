import { useLocation } from 'react-router';
import { BackButton } from './BackButton';
import { EditTask } from './EditTask';

export const TaskEditor = () => {
  const location = useLocation();
  const todo = location.state;

  return (
    <div className='container mx-auto flex h-screen flex-col overflow-x-hidden'>
      <BackButton />
      <EditTask todo={todo} />
    </div>
  );
};

// TODO: move all functions from <EditTask /> to parent (here), put funcs into props
