import React from 'react';
import PropTypes from 'prop-types';

import {
  connect
} from 'react-redux';


const mapStateToProps = state => ({
  nav: state.nav,
});

@connect(mapStateToProps)
class ConnectedNavigator extends React.Component {
  // static propTypes = {
  //   dispatch: PropTypes.func.isRequired,
  //   nav: PropTypes.object.isRequired,
  // }
  render() {
    console.log("ConnectedNavigator's property: ", this.props)
    return this.props.children;
  }
};

export default ConnectedNavigator;
