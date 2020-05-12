import React from 'react';
import { StyleSheet, Text, Image, ScrollView, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Header, Icon, Card, Button } from 'react-native-elements';
import { DrawerActions } from 'react-navigation-drawer';
import { FontAwesome } from '@expo/vector-icons';
import api from '../utils/api';

export default class Dashboard extends React.Component {
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
  componentDidMount = () => {
    const reqUrl = api.url + '/course/fetchall';
    fetch(reqUrl, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then(responseJson => {
      this.setState({
        data: responseJson
      })
    })
    .catch((error) => {
      console.error(error);
    });
  } 
  render() {
    return (
      <View style={styles.container}>
          <Header style={{ position:'absolute'}}
            leftComponent={< Icon name='menu' color='#fff' onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
            />}
            centerComponent={{ text: 'Courses Dashboard', style: { color: '#fff', fontSize: 20 } }}
            rightComponent={ <FontAwesome name='user-circle' color='#fff' size={21} onPress={() => this.props.navigation.navigate('UserProfile', {name: this.state.name, email: this.state.email, phone: this.state.phone, city: this.state.city})}
            />}
            backgroundColor='#00BFFF'
          />
        <ScrollView>
          {this.state.data.map((coursedetail, i) => {
//            const coursedetail = this.state.data[element]
            return (
              <Card
                title={coursedetail.title}
                key = {i}
                image={require('../assets/course1.jpeg')} >
                <Text style={{marginBottom: 10}}>
                    {coursedetail.description}
                </Text>
                <Button
                  icon={<Icon name='code' color='#ffffff' />}
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10}}
                  title='Launch Course'
                  onPress={() => this.props.navigation.navigate('Playcourse', {course: coursedetail.title, detail: coursedetail.description})} />
                {/*<TouchableOpacity>
                  <Text style={{ fontSize: 15, color: 'blue' }}>Take Assesment</Text>
                </TouchableOpacity>*/}
              </Card>
            );
          })}
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
  loginText:{
    color:"white"
  }
});