import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import TextField from '../components/TextField';
import api from '../utils/api';

export default class PasswordReset extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: '',
  };

  handleSubmit = async () => {
    const reqUrl = api.url + '/student/reset';
    const response = await fetch(reqUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    });
    if (response.status === 200) {
      this.setState({ errorMessage: '' });
      this.props.navigation.navigate('PassResetSuccess')
    } else if (response.status === 401) {
      this.setState({ errorMessage: 'Please enter correct email id.' });
    } else if (response.status === 402) {
      this.setState({ errorMessage: 'Details Missing' });
    } else {
      this.setState({
        errorMessage:
          'There was some error while processing your request. If this continues please contact support. ',
      });
    }
  };
  render() {
    const { errorMessage } = this.state;
    return (
      <View style={styles.container}>
          <Header style={{ position:'absolute'}}
            leftComponent={< Icon name='arrow-back' color='#fff' onPress={() => this.props.navigation.navigate('Home')}/>}
            centerComponent={{ text: 'Reset your password', style: { color: '#fff', fontSize: 22  } }}
            backgroundColor='#00BFFF'
          />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Please provide details to reset your password:</Text>
              <TextField style={{  }} onChangeText={(text) => this.setState({ email: text })} placeHolder=" Enter Email id..."/>
              <TextField style={{  }} onChangeText={(text) => this.setState({ password: text })} placeHolder=" Enter New Password..."/>
              <Text style={{ color: 'red' }}>{errorMessage}</Text>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.handleSubmit()}>
                <Text>Tap to Reset</Text>  
              </TouchableOpacity>              
            </View>
           </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    marginTop:0,
  },
  bodyContent: {
//    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:17,
    color: "#696969",
    fontWeight: "600",
    marginBottom: 30
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});