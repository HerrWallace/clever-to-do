import { Home } from './components/Tasks/Home';
import { SignIn } from './components/SignIn/SignIn';
import { Routes, Route } from 'react-router';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import { TaskEditor } from './components/TaskEditor/TaskEditor';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Routes>
      <Route path='/' element={user ? <Home /> : <SignIn />} />
      <Route path='/editor/*' element={user ? <TaskEditor /> : <SignIn />} />
    </Routes>
  );
};

export default App;
