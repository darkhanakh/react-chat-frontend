import { axios } from 'core';

// eslint-disable-next-line
export default {
  signIn: postData => axios.post(`/user/signin`, postData),
  signUp: postData => axios.post('/user/signup', postData),
  verifyHash: hash => axios.get(`/user/verify?hash=${hash}`),
  getMe: () => axios.get('/user/me'),
};
