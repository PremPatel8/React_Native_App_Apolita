import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { Header, Icon, Card, Button } from 'react-native-elements';
import { DrawerActions } from 'react-navigation-drawer';
import { FontAwesome } from '@expo/vector-icons';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: this.props.navigation.state.params.name,
      email: this.props.navigation.state.params.email,
      phone: this.props.navigation.state.params.phone,
      city: this.props.navigation.state.params.city,
      errorMessage: '',
    };
  }
  componentDidMount = async () => {
    const response = await fetch(`http://61a88a7c.ngrok.io/course/fetchall`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      }),
    });
    console.log('inside mounter')
    if (response.status === 200) {
      response.json().then(data => {
      this.setState({ errorMessage: '' });
      const result = Object.keys(data).map(key => ({[key]: data[key]}));
      console.log(result)
      {/*data.forEach(element => {
        <Card
            title={element.name}
            image={require('../assets/icon.png')}>
            <Text style={{marginBottom: 10}}>
                    {element.description}
            </Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10}}
                title='Launch Course' />
            <TouchableOpacity>
                <Text style={{ fontSize: 15, color: 'blue' }}>Take Assesment</Text>
            </TouchableOpacity>
        </Card>
        });*/}
      });
//      this.props.navigation.navigate('PassResetSuccess')
    } else if (response.status === 401) {
      this.setState({ errorMessage: 'Please enter correct email id.' });
    } else if (response.status === 402) {
      this.setState({ errorMessage: 'Details Missing' });
    } else {
      this.setState({
        errorMessage:
          'There was some error while processing your request. If this continues please contact support. ',
      });
    }
  };
  render(){
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
        {/*  {this.handleSubmit()}
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
        </Card>*/}
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
