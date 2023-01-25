import { Home } from './components/Home/Home';
import { SignIn } from './components/SignIn/SignIn';
import { TaskEditor } from './components/TaskEditor/TaskEditor';
import { Register } from './components/Register/Register';
import { Routes, Route } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import { RequireAuth } from './components/RequireAuth/RequireAuth';
import { NotFound } from './components/NotFound/NotFound';
import { Loader } from './components/Loader/Loader';

const App = () => {
  const [, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path='/signin' element={<SignIn />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route
        path='/home'
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path='/editor/*'
        element={
          <RequireAuth>
            <TaskEditor />
          </RequireAuth>
        }
      />
      <Route
        path='*'
        element={
          <RequireAuth>
            <NotFound />
          </RequireAuth>
        }
      ></Route>
      <Route path='/loader' element={<Loader />}></Route>
    </Routes>
  );
};

export default App;
