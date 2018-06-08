/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './app/components/Login'
import Profile from './app/components/Profile'
const Application = StackNavigator({
  Home: {screen: Login},
  Profile: {screen: Profile}
}, {
  navigationOptions:{
    header: false,
  }
});


export default class app extends React.Component {
  render() {
    return (
      <Application />
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   mainContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   width: null,
   height: null,
 },
});
