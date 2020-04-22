import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import TextField from '../components/TextField';

export default class PasswordReset extends Component {

  render() {
    return (
      <View style={styles.container}>
          <Header style={{ position:'absolute'}}
            leftComponent={< Icon name='arrow-back' color='#fff' onPress={() => this.props.navigation.navigate('Home')}/>}
            centerComponent={{ text: 'Reset your password', style: { color: '#fff', fontSize: 22  } }}
            backgroundColor='#00BFFF'
          />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Please provide your registered email id:</Text>
              <TextField style={{  }} placeHolder=" Enter Email id..."/>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('PassResetSuccess')}>
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