import { axios } from 'core';

// eslint-disable-next-line
export default {
  getMessagesById: id => axios.get(`/messages?dialog=${id}`),
  send: (text, dialogId) => {
    axios.post('/messages', {
      text: text,
      dialog_id: dialogId,
    });
  },
  removeById: id => axios.delete(`/messages/?id=${id}`),
};
