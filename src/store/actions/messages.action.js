import types from '../types';
import { messagesApi } from 'utils/api';

const actions = {
  setMessages: items => ({
    type: types['MESSAGES:SET_ITEMS'],
    payload: items,
  }),
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
      .catch(e => {
        dispatch(actions.setIsLoading(false));
      });
  },
};

export default actions;
