import React from 'react';
import PropTypes from 'prop-types';

import {
  Provider,
  connect
} from 'react-redux';

import store from './store';

import Screen_home from '../modules/screen-home';

console.log(store.getState())

// class App extends React.Component {
//   render() {
//     return (
//       <Provider store={store} >
//         <Screen_home />
//       </Provider>
//     );
//   }
// };

const mapStateToProps = state => ({
  nav: state.nav,
});

@connect(mapStateToProps)
class ConnectedNavigator extends React.Component {
  render() {
    console.log('xxxxx: ', this.props)
    return this.props.children;
  }
};
// ConnectedNavigator.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   nav: PropTypes.object.isRequired,
// };

class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <ConnectedNavigator>
          <Screen_home />
        </ConnectedNavigator>
      </Provider>
    );
  }
};

export default App;


