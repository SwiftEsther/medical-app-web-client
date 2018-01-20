import React from 'react';
import { Route } from 'react-router-dom';
import Login from './scenes/Login';
import Register from './scenes/Register';

const DataRouter = [
  // <Route key="home" exact path="/" component={Home} />,
  <Route key="auth/login" path="/auth/login" component={Login} />,
  <Route key="auth/register" path="/auth/register" component={Register} />,
];

export default DataRouter;
