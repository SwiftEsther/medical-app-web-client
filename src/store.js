import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import throttle from 'lodash/throttle';
import startsWith from 'lodash/startsWith';

import rootReducer from './rootReducer';
// import persist from './helpers/persist';

const logger = createLogger({
  collapsed: true,
  predicate: (getState, action) => !startsWith(action.type, '@@redux-form'),
});
const store = createStore(
  rootReducer,
  // persist.loadState(),
  applyMiddleware(logger, thunk),
);

// store.subscribe(throttle(() => persist.saveState(store.getState()), 1000));

export default store;
