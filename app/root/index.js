import React from 'react';
import PropTypes from 'prop-types';

import {
  Provider,
} from 'react-redux';

import store from './store';

import Screen_home from '../modules/screen-home';

import ConnectedNavigator from './connected-navigator';

class App extends React.Component {
  state = {
    store
    // see https://github.com/reactjs/react-redux/issues/359
  }
  render() {
    return (
      <Provider store={this.state.store} >
        <ConnectedNavigator>
          <Screen_home />
        </ConnectedNavigator>
      </Provider>
    );
  }
};

export default App;


