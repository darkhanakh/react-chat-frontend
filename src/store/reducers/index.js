import { combineReducers } from 'redux';

import dialogsReducer from './dialogs.reducer';
import messagesReducer from './messages.reducer';

export default combineReducers({
  dialogs: dialogsReducer,
  messages: messagesReducer,
});
