import { withFormik } from 'formik';

import LoginForm from './../components/LoginForm';
import validateForm from 'utils/validate';
import { userActions } from 'store/actions';
import store from 'store';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validate: values => {
    let errors = {};

    validateForm({ isAuth: true, values, errors });

    return errors;
  },
  handleSubmit: async (values, { setSubmitting, props }) => {
    try {
      const { status } = await store.dispatch(
        userActions.fetchUserLogin(values)
      );

      if (status === 'success') {
        props.history.push('/');
      }
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
    }
  },
  displayName: 'LoginForm',
})(LoginForm);
