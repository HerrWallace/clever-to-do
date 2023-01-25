import { Navigate, useLocation } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { Loader } from './../Loader/Loader';

export const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  return user ? (
    children
  ) : (
    <Navigate to='/signIn' replace state={{ path: location.pathname }} />
  );
};
