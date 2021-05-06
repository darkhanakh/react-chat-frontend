import { dialogsApi } from 'utils/api';
import types from '../types';
import socket from 'core/socket';

const actions = {
  setDialogs: items => ({
    type: types['DIALOGS:SET_ITEMS'],
    payload: items,
  }),
  setCurrentDialogId: id => dispatch => {
    socket.emit('DIALOGS:JOIN', id);
    dispatch({
      type: types['DIALOGS:SET_CURRENT_DIALOG_ID'],
      payload: id,
    });
  },
  fetchAllDialogs: () => dispatch => {
    dialogsApi.getAll().then(({ data }) => {
      dispatch(actions.setDialogs(data));
    });
  },
};

export default actions;
