import React from 'react';
import { Route } from 'react-router-dom';
import Treatment from './scenes/Treatment';

const DataRouter = [
  // <Route key="home" exact path="/" component={Home} />,
  <Route key="data/treatment" path="/data/treatment" component={Treatment} />,
];

export default DataRouter;
