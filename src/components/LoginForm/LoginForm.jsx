import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'styles/styles';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      email: e.currentTarget.elements['email'].value,
      password: e.currentTarget.elements['password'].value,
    };

    dispatch(login(data));
  };

  return (
    <ThemeProvider theme={theme}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <TextField
            // id="outlined-name"
            type="email"
            name="email"
            label="Email"
            placeholder="Enter email"
            required
          />
        </label>
        <label className={css.label}>
          <TextField
            type="password"
            name="password"
            label="Password"
            placeholder="Enter password"
            required
          />
        </label>
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </ThemeProvider>
  );
};
