import { Navigate, Outlet } from 'react-router-dom';

import useAuth from 'hooks/useAuth';

const PrivateRoute = () => {
  const isUserLogin = useAuth();

  if (!isUserLogin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
