import {combineReducers} from 'redux';

import {AppNavigator} from  './app-navigator';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Home')
);
console.log('xxxxx initialState: ', initialState);

const nav = function navReducer(state = initialState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);
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
