import { Home } from './components/Home/Home';
import { SignIn } from './components/SignIn/SignIn';
import { TaskEditor } from './components/TaskEditor/TaskEditor';
import { Register } from './components/Register/Register';
import { Routes, Route } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Routes>
      <Route
        path='/'
        element={user ? <Home userId={user.auth.currentUser.uid} /> : <SignIn />}
      />
      <Route
        path='/editor/*'
        element={
          user ? <TaskEditor userId={user.auth.currentUser.uid} /> : <SignIn />
        }
      />
      <Route path='/register' element={<Register />}></Route>
    </Routes>
  );
};

export default App;
