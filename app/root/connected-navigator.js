import React from 'react';
import PropTypes from 'prop-types';

import { addNavigationHelpers, } from 'react-navigation';
import { connect } from 'react-redux';

import {AppNavigator} from  './app-navigator';

const mapStateToProps = state => ({
  nav: state.nav,
});

@connect(mapStateToProps)
class ConnectedNavigator extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  }
  render() {
    const { dispatch , nav } = this.props;
    console.log("ConnectedNavigator's property: ", this.props)
    return <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />

  }
};

export default ConnectedNavigator;
