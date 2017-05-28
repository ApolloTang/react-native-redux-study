import {combineReducers} from 'redux';

import RootNavigator from  './root-navigator';

const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('Home')
);

console.log('in Root reducer: initialState: ', initialState);

const nav = function navReducer(state = initialState, action) {
  const state_prev = state;
  const state_next = RootNavigator.router.getStateForAction(action, state_prev);

  // cheapLogger(action, state_prev, state_next, 'from navReducer' );

  return state_next;
};

const app = function appReducer(state = {'someState': 'sssomeState'}, action) {
  return state;
};

const rootReducer = combineReducers({
  nav,
  app
})
export default rootReducer;



function cheapLogger( action, state_prev, state_next, note ) {
  console.log(`vvvvvvvvvvvvvvvvvvvvvvvvvvv`)
  console.log(`Log from: ${note}`)
  console.log('prev state: ', state_prev)
  console.log('action: ', action)
  console.log('next state: ', state_next)
  console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^')
}
