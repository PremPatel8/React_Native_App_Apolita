import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class RegisterConfirm extends Component {

  render() {
    return (
      <View style={styles.container}>
          <Header style={{ position:'absolute'}}
            leftComponent={< Icon name='arrow-back' color='#fff' onPress={() => this.props.navigation.navigate('Home')}/>}
            centerComponent={{ text: 'Hello!! Almost Done', style: { color: '#fff', fontSize: 22  } }}
            backgroundColor='#00BFFF'
          />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Thanks for joining Apolita!!!</Text>
{/*              <Text style={styles.description}>A Verification code has been sent to your email.</Text>
              <TextField placeHolder=" Please enter verification code"/> */}
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Home')}>
                <Text>Let's Get Started</Text>  
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
    fontSize:18,
    color: "#696969",
    fontWeight: "600"
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center',
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