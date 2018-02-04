import React from 'react';
import { Route } from 'react-router-dom';
import Login from './scenes/Login';

const DataRouter = [
  // <Route key="home" exact path="/" component={Home} />,
  <Route key="auth/login" path="/auth/login" component={Login} />,
];

export default DataRouter;
