import { Navigate, Outlet } from 'react-router-dom';

import useAuth from 'hooks/useAuth';

const PublicRoute = () => {
  const isUserLogin = useAuth();

  if (isUserLogin) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;
