import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
// import { Link } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import NavbarMenu from 'components/NavbarMenu/NavbarMenu';
import NavBarAuth from 'components/NavBarAuth/NavBarAuth';
import NavBarUser from 'components/UserMenu/UserMenu';

const Header = () => {
  const isUserLogin = useAuth();

  return (
    <nav className={styles.Header}>
      <NavLink className={styles.Nav} to="/">
        Home
      </NavLink>
      {isUserLogin && <NavbarMenu />}
      {isUserLogin ? <NavBarUser /> : <NavBarAuth />}
    </nav>
  );
};

export default Header;
