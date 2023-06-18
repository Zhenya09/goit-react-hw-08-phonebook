import { NavLink } from 'react-router-dom';

import style from './NavBarAuth.module.css';

const NavBarAuth = () => {
  return (
    <div className={style.linkWrapper}>
      <NavLink to="/register" className={style.link}>
        Signup
      </NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default NavBarAuth;
