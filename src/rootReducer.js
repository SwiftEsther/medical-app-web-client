import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import treatment from './services/data/treatment/reducers';
import studentBio from './services/data/studentBio/reducers';
import login from './services/auth/login/reducers';

const rootReducer = combineReducers({
  treatment,
  studentBio,
  login,
  form: formReducer,
});

export default rootReducer;
