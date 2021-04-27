import { axios } from 'core';

// eslint-disable-next-line
export default {
  login: postData => axios.post(`/user/login`, postData),
  getMe: () => axios.get('/user/me'),
};
