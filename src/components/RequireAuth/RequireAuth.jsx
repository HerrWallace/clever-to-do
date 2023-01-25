import { Navigate, useLocation } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

export const RequireAuth = ({ children }) => {
  const [user] = useAuthState(auth);
  const location = useLocation();

  return user ? (
    children
  ) : (
    <Navigate to='/signIn' replace state={{ path: location.pathname }} />
  );
};

