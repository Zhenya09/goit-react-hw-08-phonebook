import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import css from './Register.module.css';

const Register = () => {
  return (
    <div className={css.registerWrapper}>
      <RegisterForm />
    </div>
  );
};

export default Register;
