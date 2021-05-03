import types from '../types';
import { messagesApi } from 'utils/api';

const actions = {
  setMessages: items => ({
    type: types['MESSAGES:SET_ITEMS'],
    payload: items,
  }),
  addMessage: message => (dispatch, getState) => {
    const { dialogs } = getState();
    const { currentDialogId } = dialogs;

    if (currentDialogId === message.dialog._id) {
      dispatch({
        type: 'MESSAGE:ADD_MESSAGE',
        payload: message,
      });
    }
  },
  setIsLoading: bool => ({
    type: types['MESSAGES:SET_IS_LOADING'],
    payload: bool,
  }),
  fetchAllMessages: dialogId => dispatch => {
    dispatch(actions.setIsLoading(true));

    messagesApi
      .getMessagesById(dialogId)
      .then(({ data }) => {
        dispatch(actions.setMessages(data));
      })
      .catch(() => {
        dispatch(actions.setIsLoading(false));
      });
  },
  fetchSendMessage: (text, dialogId) => dispatch =>
    messagesApi.send(text, dialogId),
  removeMessageById: id => dispatch => {
    if (window.confirm('Вы действительно хотите удалить сообщения?')) {
      messagesApi
        .removeById(id)
        .then(({ data }) => {
          dispatch({
            type: 'MESSAGES:REMOVE_MESSAGE',
            payload: id,
          });
        })
        .catch(() => {
          dispatch(actions.setIsLoading(false));
        });
    }
  },
};

export default actions;
