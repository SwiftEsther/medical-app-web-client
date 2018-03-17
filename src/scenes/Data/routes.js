import React from 'react';
import { Route } from 'react-router-dom';
import Treatment from './scenes/Treatment';
import StudentBio from './scenes/StudentBio';
import StudentMedicalExamination from './scenes/StudentMedicalExamination';

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
  <Route
    key="data/student-medical-examination"
    path="/data/student-medical-examination"
    component={StudentMedicalExamination}
  />,
];

export default DataRouter;
