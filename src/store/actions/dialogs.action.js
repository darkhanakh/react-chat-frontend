import { dialogsApi } from 'utils/api';
import types from '../types';

const actions = {
  setDialogs: items => ({
    type: types['DIALOGS:SET_ITEMS'],
    payload: items,
  }),
  setCurrentDialogId: id => ({
    type: types['DIALOGS:SET_CURRENT_DIALOG_ID'],
    payload: id,
  }),
  fetchAllDialogs: () => async dispatch => {
    const { data } = await dialogsApi.getAll();
    dispatch(actions.setDialogs(data));
  },
};

export default actions;
