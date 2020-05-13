// App.js
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Linking } from 'react-native';
import { Icon, SocialIcon, Divider } from 'react-native-elements';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, NavigationEvents} from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
//import CustomDrawerContentComponent from './components/CustomDrawerContentComponent';
import LoginScreen from "./screens/LoginScreen";
import SignUp from "./screens/SignUp";
import Dashboard from "./screens/Dashboard";
import UserProfile from "./screens/UserProfile";
import RegisterConfirm from "./screens/RegisterConfirm";
import PasswordReset from "./screens/PasswordReset";
import PassResetSuccess from "./screens/PassResetSuccess";
import PersonalityTest from "./screens/PersonalityTest";
import DiscussionModule from "./screens/DiscussionModule";
import Playcourse from "./screens/Playcourse";
import AdminDashboard from "./screens/AdminDashboard";
import StudentsEnrolled from "./screens/StudentsEnrolled";
import AddAnnouncement from "./screens/AddAnnouncement";
import AddCourse from "./screens/AddCourse";

const CustomDrawerContentComponent = (props) => (
  <SafeAreaView style={{ flex:1 }}>
    <View style={{ height:150, backgroundColor: '#00BFFF', alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{ height: 120, width: 120, borderRadius: 60 }}
      source={require('./assets/apolita1.png')}
      />
    </View>
    <ScrollView>
    <DrawerItems {...props}/>
    <Divider style={{ marginTop: 140,  backgroundColor: '#2471A3', height: 2}}/>
    <Text style={{ marginTop: 10, marginLeft: 10, marginBottom: 20, fontSize:18 }}>Connect with us on:</Text>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <SocialIcon style={{ marginLeft: 20 }} type='facebook'
      onPress={ ()=>{ Linking.openURL('https://en-gb.facebook.com/login/')}}
      />
      <SocialIcon style={{ marginLeft: 10 }} type='instagram'
      onPress={ ()=>{ Linking.openURL('https://www.instagram.com/accounts/login/?hl=en')}}
      />
      <SocialIcon style={{ marginLeft: 10 }} type='twitter' 
      onPress={ ()=>{ Linking.openURL('https://twitter.com/login')}} 
      />
      <SocialIcon style={{ marginLeft: 10 }} type='youtube'
      onPress={ ()=>{ Linking.openURL('https://www.youtube.com/')}}
      />
    </View>
    </ScrollView>
  </SafeAreaView>
)
const AppDrawerDashboard = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      drawerIcon: (
        <Icon name='dashboard'/>
      ),
    },
  },
  Announcements: {
    screen: DiscussionModule,
    navigationOptions: {
      drawerIcon: (
        <Icon name='chat'/>
      ),
    },
  },
  'Personality Test': {
     screen: PersonalityTest,
     navigationOptions: {
      drawerIcon: (
        <Icon name='description'/>
      ),
    },
  },
  Logout: {
    screen: LoginScreen,
    navigationOptions: {
      drawerIcon: (
        <Icon name='exit-to-app'/>
      ),
    },
  },
},
  {
    initialRouteName: 'Dashboard',
    drawerWidth: 300,
    hideStatusBar: false,
//    edgeWidth: 0,
    contentComponent: CustomDrawerContentComponent,
    
  }

);

const AppNavigator = createStackNavigator({
  Home: {
    screen: LoginScreen
  },
  SignUp: {
    screen: SignUp
  },
  Dashboard: {
    screen: AppDrawerDashboard,
    navigationOptions: {
      gestureEnabled: false
    },
  },
  UserProfile: {
    screen: UserProfile
  },
  RegisterConfirm: {
    screen: RegisterConfirm
  },
  PasswordReset: {
    screen: PasswordReset
  },
  PassResetSuccess: {
    screen: PassResetSuccess
  },
  PersonalityTest: {
    screen: PersonalityTest
  },
  DiscussionModule: {
    screen: DiscussionModule
  },
  Playcourse: {
    screen: Playcourse
  },
  AdminDashboard: {
    screen: AdminDashboard
  },
  StudentsEnrolled: {
    screen: StudentsEnrolled
  },
  AddAnnouncement: {
    screen: AddAnnouncement
  },
  AddCourse: {
    screen: AddCourse
  },
//  Drawer: {
//    screen: AppDrawerDashboard
//  },
},
  {
    headerMode: 'none',
//    cardStyle: {backgroundColor: 'red'},
//    navigationOptions: {
//      headerStyle: {
//        backgroundColor: 'red',
//      },
//    },
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default createAppContainer(AppNavigator);