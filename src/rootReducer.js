import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import treatment from './services/data/treatment/reducers';
import studentBio from './scenes/Data/scenes/StudentBio/reducers';
import login from './scenes/Auth/scenes/Login/reducers';

const rootReducer = combineReducers({
  treatment,
  studentBio,
  login,
  form,
});

export default rootReducer;
