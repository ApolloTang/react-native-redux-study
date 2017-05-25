import React from 'react';

import {
  View,
  Text
} from 'react-native';

import {Provider} from 'react-redux';
import store from './store';

import Screen_home from '../modules/screen-home';

console.log(store.getState())

class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Screen_home />
      </Provider>
    );
  }
};


export default App;


function rootReducer(state = {'someState': 'sssomeState'}, action) {
  return state
}
