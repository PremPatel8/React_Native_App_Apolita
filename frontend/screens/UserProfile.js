import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Divider, Icon } from 'react-native-elements';

export default class UserProfile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity style={{ paddingRight: 330, paddingTop: 50}} onPress={() => this.props.navigation.goBack(null)}>
                  <Icon name='arrow-back' color='#fff' size={30}/>
              </TouchableOpacity>
          </View>
          <Image style={styles.avatar} source={require('../assets/userpp.png')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Rahul Tevatia</Text>
              <Text style={styles.info}>email@email.com / +9 999999999</Text>
              <Text style={styles.description}>Arlington, Texas, USA</Text>
              <Divider style={{ backgroundColor: '#2471A3', height: 2, width: 290, marginBottom:30 }} />
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Edit Personal Details</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Check Completed courses</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:110
  },
  body:{
    marginTop:20,
  },
  bodyContent: {
//    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
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