import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
export default class Profile extends Component<Props> {



  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.header}> - Wena wena mijo - </Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3'
  },
  text: {
      color: '#fff'
  }
})
