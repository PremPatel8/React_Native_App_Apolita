import React from 'react';
import { StyleSheet, Text, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import DetailListItem from '../components/DetailListItem';

export default class AdminDashboard extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: this.props.navigation.state.params.name,
      email: this.props.navigation.state.params.email,
      phone: this.props.navigation.state.params.phone,
      city: this.props.navigation.state.params.city,
      errorMessage: '',
      data: [],
      isLoading: true,
    };
  }
  render() {
    return (
      <View style={styles.container}>
          <Header style={{ position:'absolute'}}
            centerComponent={{ text: 'Instructor Dashboard', style: { color: '#fff', fontSize: 20 } }}
            rightComponent={ <FontAwesome name='user-circle' color='#fff' size={21} onPress={() => this.props.navigation.navigate('UserProfile', {name: this.state.name, email: this.state.email, phone: this.state.phone, city: this.state.city})}
            />}
            backgroundColor='#00BFFF'
          />
        <ScrollView>
        <View style={styles.bodyContent}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('StudentsEnrolled')}>
              <DetailListItem
                  icon="account-circle"
                  title="Students Enrolled"
                  subtitle="Tap to check total students enrolled."
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCourse')}>
              <DetailListItem
                  icon="airplay"
                  title="Add course"
                  subtitle="Tap to add new course."
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('AddAnnouncement')}>
              <DetailListItem
                  icon="announcement"
                  title="Add Announcement"
                  subtitle="Tap to add new announcement"
              /></TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.logoutBtn}
                onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={styles.loginText}>Sign off</Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
//    paddingTop: 10,
    backgroundColor: '#fff',
//    alignItems: 'center',
 //   justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  bodyContent: {
    flex: 1,
    backgroundColor: 'white'
  },
  inputText:{
    height:50,
    color:"#003f5c"
  },
  forgot:{
    color:"white",
    fontSize:14
  },
  logoutBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginLeft: 40,
    marginTop:150,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});