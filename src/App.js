import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Auth, Home } from 'pages';

function App({ isAuth }) {
  return (
    <div className="wrapper">
      <Switch>
        <Route
          exact
          path={['/signin', '/signup', '/signup/verify']}
          component={Auth}
        />
        <Route
          path="/"
          render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
        />
      </Switch>
    </div>
  );
}

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
