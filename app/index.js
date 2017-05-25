import React from 'react';

import {
  View,
  Text
} from 'react-native';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Screen_home from './screen-home';

const store = createStore(rootReducer);
console.log(store.getState())

class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Screen_home />
      <Provide />
    );
  }
}

export default App;


function rootReducer(state = {someState: 'hellostate'}, action) {
  return state
}
