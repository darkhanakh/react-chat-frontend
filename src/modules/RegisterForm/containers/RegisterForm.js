import { withFormik } from 'formik';

import RegisterForm from '../components/RegisterForm';
import validateForm from 'utils/validate';
import store from 'store';
import { userActions } from 'store/actions';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    fullname: '',
    password: '',
    password_2: '',
  }),
  validate: values => {
    let errors = {};

    validateForm({ isAuth: false, values, errors });

    return errors;
  },
  handleSubmit: async (values, { setSubmitting, props }) => {
    try {
      const { status } = await store.dispatch(
        userActions.fetchUserRegister(values)
      );

      if (status === 'success') {
        props.history.push('/');
      }
      setSubmitting(false);
    } catch (e) {
      setSubmitting(false);
    }
  },
  displayName: 'RegisterForm',
})(RegisterForm);
