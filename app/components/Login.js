import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  ImageBackground,
} from 'react-native';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      correo: '',
      password: '',
    };
  }
componentDidMount(){
    this._loadInitialState().done();
}
_loadInitialState = async () =>{
  var value = await AsyncStorage.getItem('user');
  if(value !==null){
    this.props.navigation.navigate('Profile');
  }


}
  render() {
    const resizeMode = 'center';
    const text ='Welcome to myTray'
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <ImageBackground
        style={{width:null,height:null,flex:1}}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1SWFwt7QxlMClQMr79a5wTVMpqpa9g9eXRGqYIJThJJA-hbY9dw' }}
        >
        <View style={styles.container}>
           <Text
          style={{
            backgroundColor: 'transparent',
            textAlign: 'center',
            fontSize: 30,
            padding: 40,
          }}
        >
      {text}
      </Text>
          <TextInput
            style={styles.textInput} placeholder = 'correo'
            onChangeText={(correo) => this.setState({correo})}
            underlineColorAndroid = 'transparent'
          />
          <TextInput
            style={styles.textInput} placeholder = 'Password'
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true} underlineColorAndroid = 'transparent'
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={this.login}>
            <Text> Log In </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnreg}
            onPress={this.login}>
            <Text> Register </Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
  login = () =>{
    fetch('http://192.168.1.114', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',  
        },
        body: JSON.stringify({
          correo: this.state.correo,
          password: this.state.password,
        })
      })
      .then((response) => response.text())
      .then((res) => {
        alert(res.message);
        if(res.success === true){
          AsyncStorage.setItem('user', res.user);
          this.props.navigation.navigate('Profile');
        }
        else{
          alert(res.message);
        }
      })
      .done();
  }
}
const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
  },
  container:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor:'#fff',
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
  },
    btnreg: {
    alignSelf: 'stretch',
    backgroundColor: '#00BFFF',
    padding: 20,
    alignItems: 'center',
  },
  mainContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   width: null,
   height: null,
 },
});