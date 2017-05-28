import React from 'react';
import PropTypes from 'prop-types';
import Reactotron from 'reactotron-react-native'

import {
  Provider,
} from 'react-redux';

import Screen_home from '../modules/screen-home';

import store from './store';

import ConnectedNavigator from './connected-navigator';

class App extends React.Component {
  state = {
    store
    // see https://github.com/reactjs/react-redux/issues/359
  }
  render() {
    // Test drive Reactotron
    //
    Reactotron.log('hello rendering world');
    Reactotron.log({ numbers: [1, 2, 3], boolean: false, nested: { here: 'we go' } })
    Reactotron.warn('*glares*')
    Reactotron.error('Now you\'ve done it.')
    Reactotron.display({
      name: 'KNOCK KNOCK',
      preview: 'Who\'s there?',
      value: 'Orange.'
    })

    Reactotron.display({
      name: 'ORANGE',
      preview: 'Who?',
      value: 'Orange you glad you don\'t know me in real life?',
      important: true
    })

    return (
      <Provider store={this.state.store} >
        <ConnectedNavigator/>
        {/* <Screen_home/> */}
      </Provider>
    );
  }
};

export default App;


