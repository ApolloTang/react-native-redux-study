import {combineReducers} from 'redux';

import RootNavigator from  './root-navigator';

const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('Home')
);

console.log('in Root reducer: initialState: ', initialState);

const nav = function navReducer(state = initialState, action) {
  console.log('in nav reducer vvvvvvvvvvvvvvvvvvvvvvvvvvv')
  console.log('action: ', action)
  console.log('prev state: ', state)
  const nextState = RootNavigator.router.getStateForAction(action, state);
  console.log('next state: ', nextState)
  console.log('in nav reducer ^^^^^^^^^^^^^^^^^^^^^^^^^^^')
  return nextState;
};

const app = function appReducer(state = {'someState': 'sssomeState'}, action) {
  return state;
};



const rootReducer = combineReducers({
  nav,
  app
})
export default rootReducer;
