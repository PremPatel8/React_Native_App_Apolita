import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { Header, Icon, Card, Button } from 'react-native-elements';
import { DrawerActions } from 'react-navigation-drawer';
import { FontAwesome } from '@expo/vector-icons';

export default class Dashboard extends React.Component {
//  toggleDrawer = () => {
//    //Props to open/close the drawer
//    this.props.navigationProps.toggleDrawer();
//  };
//  state={
//    email:"",
//    password:""
//  }
  render(){
    return (
      <View style={styles.container}>
          <Header style={{ position:'absolute'}}
            leftComponent={< Icon name='menu' color='#fff' onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
            />}
            centerComponent={{ text: 'Courses Dashboard', style: { color: '#fff', fontSize: 20 } }}
            rightComponent={ <FontAwesome name='user-circle' color='#fff' size={21} onPress={() => this.props.navigation.navigate('UserProfile')}
            />}
            backgroundColor='#00BFFF'
          />
        <ScrollView>
        <Card
            title='Classroom Course 1'
            image={require('../assets/icon.png')}>
            <Text style={{marginBottom: 10}}>
                    Course Description will be added here.
            </Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10}}
                title='Launch Course' />
            <TouchableOpacity>
                <Text style={{ fontSize: 15, color: 'blue' }}>Take Assesment</Text>
            </TouchableOpacity>
        </Card>
        <Card
            title='Classroom Course 1'
            image={require('../assets/icon.png')}>
            <Text style={{marginBottom: 10}}>
                    Course Description will be added here.
            </Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10}}
                title='Launch Course' />
            <TouchableOpacity>
                <Text style={{ fontSize: 15, color: 'blue' }}>Take Assesment</Text>
            </TouchableOpacity>
        </Card>
        <Card
            title='Classroom Course 1'
            image={require('../assets/icon.png')}>
            <Text style={{marginBottom: 10}}>
                    Course Description will be added here.
            </Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10}}
                title='Launch Course' />
            <TouchableOpacity>
                <Text style={{ fontSize: 15, color: 'blue' }}>Take Assesment</Text>
            </TouchableOpacity>
        </Card>
        </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
//    paddingTop: 10,
    backgroundColor: '#B3B6B7',
//    alignItems: 'center',
 //   justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  logo:{
//    fontWeight:"bold",
    fontSize:30,
    color:"#2471A3",
    marginBottom:40,
    textAlignVertical: 'top',
    justifyContent: 'flex-start',
  },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#003f5c"
  },
  forgot:{
    color:"white",
    fontSize:14
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  signupBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});