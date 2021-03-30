import React from 'react';
import { Route } from 'react-router-dom';

import { Auth, Home } from 'pages';

function App() {
  return (
    <div className="wrapper">
      <Route exact path={['/', '/login', '/register']} component={Auth} />
      <Route exact path="/im" component={Home} />
    </div>
  );
}

export default App;
