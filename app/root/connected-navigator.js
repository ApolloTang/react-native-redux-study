import React from 'react';
import PropTypes from 'prop-types';

import { addNavigationHelpers, } from 'react-navigation';
import { connect } from 'react-redux';

import RootNavigator from  './root-navigator';

const mapStateToProps = state => ({
  nav: state.nav,
});

@connect(mapStateToProps)
class ConnectedNavigator extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  }
  componentDidMount(prevProps, prevState) {
    console.log('componentDidMount: props_rootNavigator: ', this.props_rootNavigator);
  }
  render() {
    console.log("ConnectedNavigator's property: ", this.props);
    const { dispatch , nav } = this.props;
    return (
    <RootNavigator
      ref={props_rootNavigator=>{
        // Make properties of rootNavigator available to this component (ie. ConnectedNavigator).
        // We do this because we might want to have access to these properties in this
        // compoenent.
        this.props_rootNavigator = props_rootNavigator
      }}
      navigation={
        // When navigation propperty is specifed React
        // Navigation state is now store in reducer, React Navigation
        // will no longer keep track of navigation state (nav)
        addNavigationHelpers({ dispatch, state: nav })
      }
      />
    )
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: props_rootNavigator: ', this.props_rootNavigator);
  }
};

export default ConnectedNavigator;
