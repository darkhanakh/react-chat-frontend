import { axios } from 'core';

// eslint-disable-next-line
export default {
  getMessagesById: id => axios.get(`/messages?dialog=${id}`),
};
