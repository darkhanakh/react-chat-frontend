import types from '../types';

const initialState = {
  items: [],
  currentDialogId: null,
  isLoading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types['DIALOGS:SET_ITEMS']:
      return {
        ...state,
        items: payload,
      };
    case types['DIALOGS:SET_CURRENT_DIALOG_ID']:
      return {
        ...state,
        currentDialogId: payload,
      };
    default:
      return state;
  }
};
