import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import rootReducer from './reducer';
import middlewares from './middlewares';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares)
  )
);

console.log('store state: ', store.getState())

export default store;

