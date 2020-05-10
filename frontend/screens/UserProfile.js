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
  constructor(props) {
    super(props)
  
    this.state = {
      name: this.props.navigation.state.params.name,
      email: this.props.navigation.state.params.email,
      phone: this.props.navigation.state.params.phone,
      city: this.props.navigation.state.params.city,
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity style={{ paddingRight: 330, paddingTop: 50}} onPress={() => this.props.navigation.goBack(null)}>
                  <Icon name='arrow-back' color='#fff' size={30}/>
              </TouchableOpacity>
              <Text style={styles.name}>{this.state.name}</Text>
          </View>
          <Image style={styles.avatar} source={require('../assets/userpp.png')}/>
            <View style={styles.bodyContent}>  
              <DetailListItem
                  icon="mail"
                  title="Email"
                  subtitle={this.state.email}
//                  onPress
              />
              <DetailListItem
                  icon="phone"
                  title="Phone"
                  subtitle={this.state.phone}
//                  onPress
              />
              <DetailListItem
                  icon="home"
                  title="Address"
                  subtitle={this.state.city}
//                  onPress
              />
              <DetailListItem
                  icon="face"
                  title="Courses Instructor"
                  subtitle="Jennifer"
//                  onPress
              />
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
