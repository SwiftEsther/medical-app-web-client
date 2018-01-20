import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import treatment from './services/data/treatment/reducers';
import register from './services/auth/register/reducers';
import login from './services/auth/login/reducers';

const rootReducer = combineReducers({
  treatment,
  register,
  login,
  form: formReducer,
});

export default rootReducer;
