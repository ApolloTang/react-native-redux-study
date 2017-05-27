import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Screen B
        </Text>
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
