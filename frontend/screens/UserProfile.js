import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import DetailListItem from '../components/DetailListItem';

export default class UserProfile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity style={{ paddingRight: 330, paddingTop: 50}} onPress={() => this.props.navigation.goBack(null)}>
                  <Icon name='arrow-back' color='#fff' size={30}/>
              </TouchableOpacity>
              <Text style={styles.name}>User name</Text>
          </View>
          <Image style={styles.avatar} source={require('../assets/userpp.png')}/>
            <View style={styles.bodyContent}>  
              <DetailListItem
                  icon="mail"
                  title="Email"
                  subtitle="email@gmail.com"/>
              <DetailListItem
                  icon="phone"
                  title="Phone"
                  subtitle="+9999999999"/>
              <DetailListItem
                  icon="home"
                  title="Address"
                  subtitle="Arlington, Texas, USA"/>
              <DetailListItem
                  icon="face"
                  title="Courses Instructor"
                  subtitle="Jennifer"/>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: "#00BFFF",
    height:300,
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
    flex: 1,
    backgroundColor: 'white'
  },
  name:{
    fontSize:28,
    color: "#fff",
    fontWeight: "600",
    alignSelf: 'center',
    marginTop:170,
  },
});
