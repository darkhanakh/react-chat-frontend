import types from '../types';
import { userApi } from 'utils/api';
import { openNotification } from 'utils/helpers';

const Actions = {
  setUserData: data => ({
    type: types['USER:SET_DATA'],
    payload: data,
  }),
  fetchUserLogin: postData => dispatch => {
    return userApi.login(postData).then(({ data }) => {
      const { status, token } = data;

      if (status === 'error') {
        openNotification({
          text: 'Неверный логин или пароль',
          type: 'error',
          title: 'Ошибка при авторизации',
        });
      } else {
        openNotification({
          text: 'Авторизация прошла успешно!',
          type: 'success',
          title: 'Отлично!',
        });
        window.axios.defaults.headers.common['token'] = token;

        localStorage.setItem('token', token);
        dispatch(Actions.fetchUserData());
      }

      return data;
    });
  },
  fetchUserData: () => dispatch => {
    userApi.getMe().then(({ data }) => dispatch(Actions.setUserData(data)));
  },
};

export default Actions;
