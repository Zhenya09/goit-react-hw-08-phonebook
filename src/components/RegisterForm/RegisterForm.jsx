import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import css from './RegisterForm.module.css';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'styles/styles';
import TextField from '@mui/material/TextField';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: e.currentTarget.elements['name'].value,
      email: e.currentTarget.elements['email'].value,
      password: e.currentTarget.elements['password'].value,
    };

    dispatch(signup(data));
  };

  return (
    <ThemeProvider theme={theme}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          <TextField type="text" name="name" label="Username" />
        </label>
        <label className={css.label}>
          <TextField type="email" name="email" label="Email" />
        </label>
        <label className={css.label}>
          <TextField type="password" name="password" label="Password" />
        </label>
        <Button variant="contained" type="submit">
          SignUp
        </Button>
      </form>
    </ThemeProvider>
  );
};
