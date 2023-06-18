import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import React from 'react';
import PublicRoute from 'PublicRoute';
import PrivateRoute from 'PrivateRoute';
import Loader from 'components/Loader/Loader';

const Home = lazy(() => import('./pages/Home/Home'));
const Register = lazy(() => import('./pages/Register/Register'));
const Login = lazy(() => import('./pages/Login/Login'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactPage />} />
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
