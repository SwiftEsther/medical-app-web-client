import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import throttle from 'lodash/throttle';

import rootReducer from './rootReducer';
import persist from './helpers/persist';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  persist.loadState(),
  // {},
  applyMiddleware(logger,thunk),
);

store.subscribe(throttle(() => persist.saveState(store.getState()), 1000));

export default store;
