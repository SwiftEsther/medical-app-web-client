import React from 'react';
import PropTypes from 'prop-types';
import { connect,Provider } from 'react-redux';
import { BrowserRouter, Route, withRouter, Switch } from 'react-router-dom';

import store from './store';
import dataRoutes from './scenes/Data/routes';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={()=>(<h1>Home</h1>)} />
      {dataRoutes}
    </Switch>
    </BrowserRouter>
  </Provider>
);


// export default withRouter(connect(state => ({ user: state.user }))(App));
export default (App);