import UserRoutes from 'UserRoutes';
import Header from './components/Header/Header';
import style from './App.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from 'redux/auth/auth-operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <section className={style['App']}>
      <Header />
      <UserRoutes />
    </section>
  );
}

export default App;
