import { useSelector, useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';

import { getUser } from 'redux/auth/auth-selectors';

import style from './UserMenu.module.css';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const Logout = () => dispatch(logout());

  return (
    <p>
      {email}
      <button className={style.btn} type="button" onClick={Logout}>
        Logout
      </button>
    </p>
  );
};

export default UserMenu;
