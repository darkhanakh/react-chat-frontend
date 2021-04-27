import { axios } from 'core';

// eslint-disable-next-line
export default {
  getAll: () => axios.get('/dialogs'),
};
