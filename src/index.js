import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from 'store';
import { userActions } from 'store/actions';
import './scss/index.scss';

store.dispatch(userActions.fetchUserData());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
