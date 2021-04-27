import types from '../types';

const initialState = {
  data: null,
  isAuth: localStorage.getItem('token') ? true : false,
  token: localStorage.getItem('token'),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types['USER:SET_DATA']:
      return {
        ...state,
        data: payload,
        isAuth: true,
        token: localStorage.getItem('token'),
      };
    case types['USER:SET_IS_AUTH']:
      return {
        ...state,
        isAuth: payload,
      };
    default:
      return state;
  }
};

/* 1:29:39 */
