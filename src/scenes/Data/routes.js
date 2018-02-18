import React from 'react';
import { Route } from 'react-router-dom';
import Treatment from './scenes/Treatment';
import StudentBio from './scenes/StudentBio';

const DataRouter = [
  // <Route key="home" exact path="/" component={Home} />,
  <Route
    key="data/treatment"
    path="/data/treatment"
    component={Treatment}
  />,
  <Route
    key="data/student-bio"
    path="/data/student-bio"
    component={StudentBio}
  />,
];

export default DataRouter;
