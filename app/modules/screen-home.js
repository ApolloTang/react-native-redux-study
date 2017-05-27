import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


import {NavigationActions} from 'react-navigation';

const Action_navigateToRoute = (routeName) => NavigationActions.navigate({ routeName });
const mapStateToProps = state => ({ 'someState': 'someState' });

class Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Home Screen
        </Text>
        <TouchableOpacity
          onPress={ ()=>{
            console.log('TouchableOpacity pressed', Action_navigateToRoute('ScreenA') );
            this.props.navigation.dispatch(
              Action_navigateToRoute('ScreenA')
            )
          } }>
          <View>
            <Text>Navigate to Screen A</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  Title: {
    fontSize: 30,
    color: 'red'
  }
});

export default Screen;
