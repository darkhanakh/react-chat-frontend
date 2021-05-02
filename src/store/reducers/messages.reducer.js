import types from '../types';

const initialState = {
  items: null,
  isLoading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types['MESSAGES:SET_ITEMS']:
      return {
        ...state,
        items: payload,
        isLoading: false,
      };
    case types['MESSAGES:SET_IS_LOADING']:
      return {
        ...state,
        isLoading: payload,
      };
    case 'MESSAGE:ADD_MESSAGE':
      return {
        ...state,
        items: [...state.items, payload],
      };
    default:
      return state;
  }
};
