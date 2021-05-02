import types from '../types';
import { userApi } from 'utils/api';
import { openNotification } from 'utils/helpers';

const Actions = {
  setUserData: data => ({
    type: types['USER:SET_DATA'],
    payload: data,
  }),
  setIsAuth: bool => ({
    type: 'USER:SET_IS_AUTH',
    payload: bool,
  }),
  fetchUserLogin: postData => dispatch => {
    return userApi
      .signIn(postData)
      .then(({ data }) => {
        const { token } = data;

        openNotification({
          title: 'Отлично!',
          text: 'Авторизация успешна.',
          type: 'success',
        });

        window.axios.defaults.headers.common['token'] = token;
        localStorage.setItem('token', token);

        dispatch(Actions.fetchUserData());
        dispatch(Actions.setIsAuth(true));
        return data;
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          openNotification({
            title: 'Ошибка при авторизации',
            text: 'Неверный логин или пароль',
            type: 'error',
          });
        }
      });
  },
  fetchUserRegister: postData => dispatch =>
    userApi.signUp(postData).then(({ data }) => data),
  fetchUserData: () => dispatch => {
    userApi
      .getMe()
      .then(({ data }) => dispatch(Actions.setUserData(data)))
      .catch(({ response }) => {
        if (response.status === 403) {
          dispatch(Actions.setIsAuth(false));
          localStorage.removeItem('token');
        }
      });
  },
};

export default Actions;
