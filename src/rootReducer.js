import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import treatment from './services/data/treatment/reducers';

const rootReducer = combineReducers({
  treatment,
  form: formReducer,
});

export default rootReducer;
