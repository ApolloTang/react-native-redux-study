import {combineReducers} from 'redux';

// import RootNavigator from  './root-navigator';
//
// const initialState = RootNavigator.router.getStateForAction(
//   RootNavigator.router.getActionForPathAndParams('Home')
// );
//
// console.log('in Root reducer: initialState: ', initialState);
//
// const nav = function navReducer(state = initialState, action) {
//   const state_prev = state;
//   const state_next = RootNavigator.router.getStateForAction(action, state_prev);
//
//   // cheapLogger(action, state_prev, state_next, 'from navReducer' );
//
//   return state_next;
// };
//
// const app = function appReducer(state = {'someState': 'sssomeState'}, action) {
//   return state;
// };
//
// const rootReducer = combineReducers({
//   nav,
//   app
// })
//
// export default rootReducer;





////////////////////////////////////////////////////////////////////////////
// Study of log-in log-out example

import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../modules/log-in-out/navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

const RootReducer = combineReducers({
  nav,
  auth,
});

export default RootReducer;
////////////////////////////////////////////////////////////////////////////




function cheapLogger( action, state_prev, state_next, note ) {
  console.log(`vvvvvvvvvvvvvvvvvvvvvvvvvvv`)
  console.log(`Log from: ${note}`)
  console.log('prev state: ', state_prev)
  console.log('action: ', action)
  console.log('next state: ', state_next)
  console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^')
}
