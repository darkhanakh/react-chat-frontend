import RegisterForm from '../components/RegisterForm';
import { withFormik } from 'formik';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    fullname: '',
    password: '',
    password2: '',
  }),
  validate: values => {
    let errors = {};
    // validateForm({ isAuth: false, values, errors });
    if (!values.email) {
      errors.email = 'Введите E-Mail';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Неверный E-Mail';
    }

    if (!values.password) {
      errors.password = 'Введите пароль';
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(values.password)
    ) {
      errors.password = `Введите корректный пароль (1 цифра, 
          1 строчная буква, 
          1 заглавная буква,
          8 символов минимум)`;
    }

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'RegisterForm',
})(RegisterForm);
