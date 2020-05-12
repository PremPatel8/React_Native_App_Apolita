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

export default class AddAnnouncement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            errorMessage: '',
        };
    }
  handleSubmit = async () => {
    const reqUrl = api.url + '/admin/addannouncement';
    const response = await fetch(reqUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
      }),
    });
    if (response.status === 200) {
      this.setState({ errorMessage: ' Announcement sent to the students',
                 title: '',
                 description: ''});
//      this.props.navigation.navigate('PassResetSuccess')
    } else if (response.status === 401) {
      this.setState({ errorMessage: 'Please enter Announcement details to send.' });
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
            leftComponent={< Icon name='arrow-back' color='#fff' onPress={() => this.props.navigation.goBack(null)}/>}
            centerComponent={{ text: 'Add an announcement', style: { color: '#fff', fontSize: 18  } }}
            backgroundColor='#00BFFF'
          />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Please provide Announcement details:</Text>
              <TextField style={{  }} value={this.state.title} onChangeText={(title) => this.setState({title})} placeHolder=" Announcement Title"/>
              <TextField style={{  }} value={this.state.description} onChangeText={(description) => this.setState({description})} placeHolder=" Announcement Description"/>
              <Text style={{ color: 'red' }}>{errorMessage}</Text>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.handleSubmit()}>
                <Text>Tap to send announcement</Text>  
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