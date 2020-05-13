import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import SelectPicker from 'react-native-form-select-picker';
import { Header, Icon } from 'react-native-elements';
import Typography from '@material-ui/core/Typography';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../utils/api';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    firstname: '',
    lastname: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileno: '',
    city: '',
    state: '',
    country: '',
    data: {},
    errorMessage: '',
  };
//  this.handleChange = this.handleChange.bind(this);
}
  handleChange = data => {
//    const { data } = this.state;
//    this.setState({
//      data: {
//        ...data,
//        [event.target.name]: event.target.value,
//      },
//    });
//    const newState = this.state;
    if (
      data.password &&
      data.confirmPassword &&
      data.password !== data.confirmPassword
    ) {
      this.setState({ errorMessage: 'Please enter the password correctly' });
    } else {
      this.setState({ errorMessage: '' });
    }
  };

  handleSubmit = async () => {
    if (this.state.password != this.state.confirmPassword) {
      this.setState({ errorMessage: 'Password and confirm password mismatch.' });
    } else {
      const reqUrl = api.url + '/student/signup';
      const response = await fetch(reqUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        gender: this.state.gender,
        email: this.state.email,
        password: this.state.password,
        phonenumber: this.state.mobileno,
        city: this.state.city,
        state: this.state.state,
        country: this.state.country,
        }),
      });
      if (response.status === 200) {
        this.setState({ errorMessage: '' });
        this.props.navigation.navigate('RegisterConfirm');
      } else if (response.status === 409) {
        this.setState({ errorMessage: 'User already exists.' });
      } else if (response.status === 401) {
        this.setState({ errorMessage: 'Missing Details, Please provide all the details.' });
      } else {
        this.setState({
          errorMessage:
          'There was some error while processing your request. If this continues please contact support. ',
        });
      }
    }
  };
  render() {
    const { data, errorMessage } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null}>
        <Header
          style={{ position: 'absolute' }}
          //            leftComponent={< Icon name='menu' color='#fff' />}
          //                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>}
          centerComponent={{
            text: 'SignUp with Apolita',
            style: { color: '#fff', fontSize: 25 },
          }}
          leftComponent={< Icon name='arrow-back' color='#fff' onPress={() => this.props.navigation.navigate('Home')}/>}
          backgroundColor='#00BFFF'
        />
        <ScrollView>
          <Text style={{ marginBottom: 10 }}></Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder='First Name...'
              placeholderTextColor='#003f5c'
              required
              name='firstname'
              value={data.firstname}
              onChangeText={(text) => this.setState({ firstname: text })}
//              onChangeText={this.handleChange}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder='Last name...'
              placeholderTextColor='#003f5c'
              required
              name='lastname'
              value={data.lastname}
              onChangeText={(text) => this.setState({ lastname: text })}
//              onChangeText={this.handleChange}
            />
          </View>
          <View
            style={{
              paddingRight: 150,
              marginBottom: 20,
              marginTop: 10,
            }}
          >
            <SelectPicker
              style={{
                color: '#003f5c',
                borderBottomWidth: 2,
                borderBottomColor: '#2471A3',
                width: 300,
                marginLeft:30
              }}
//              onValueChange={this.handleChange}
              onValueChange={(value) => {this.setState({gender: value})}}
              name='gender'
//              value={data.gender || ''}
              placeholder='Select Gender'
              placeholderTextColor='#003f5c'
              selected={this.state.gender}
            >
              <SelectPicker.Item label='Male' value='male' />
              <SelectPicker.Item label='Female' value='female' />
            </SelectPicker>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder='Email Address...'
              placeholderTextColor='#003f5c'
              required
              name='email'
              value={data.email}
//              onChangeText={this.handleChange}
              onChangeText={(text) => this.setState({ email: text })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder='Password...'
              placeholderTextColor='#003f5c'
              secureTextEntry={true}
              required
              name='password'
              value={this.state.password}
              onChangeText={(password) => this.setState({password})}
//              onChangeText={this.handleChange}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder='Confirm Password...'
              placeholderTextColor='#003f5c'
              secureTextEntry={true}
              required
              name='confirmPassword'
              value={this.state.confirmPassword}
              onChangeText={(confirmPassword) => this.setState({confirmPassword})}
//              onChangeText={this.handleChange}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder='Mobile Number...'
              placeholderTextColor='#003f5c'
              keyboardType='number-pad'
              name='mobileno'
              value={data.mobileno}
              onChangeText={(text) => this.setState({ mobileno: text })}
//              onChangeText={this.handleChange}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder='City...'
              placeholderTextColor='#003f5c'
              required
              name='City'
              value={data.city}
              onChangeText={(text) => this.setState({ city: text })}
//              onChangeText={this.handleChange}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder='State...'
              placeholderTextColor='#003f5c'
              required
              name='State'
              value={data.state}
              onChangeText={(text) => this.setState({ state: text })}
//              onChangeText={this.handleChange}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder='Country...'
              placeholderTextColor='#003f5c'
              required
              name='Country'
              value={data.country}
              onChangeText={(text) => this.setState({ country: text })}
//              onChangeText={this.handleChange}
            />
          </View>
          <Text style={{ color: 'red', marginLeft: 30 }}>{errorMessage}</Text>
        <TouchableOpacity
          style={styles.signupBtn}
          onPress={() => this.handleSubmit()}
        >
          <Text style={styles.loginText}>Register with Apolita</Text>
        </TouchableOpacity>
      </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
//    alignItems:"center",
    //justifyContent:'center',
    //alignItems:'stretch',
  },
  inputView:{
    width:'80%',
    backgroundColor: '#fff',
    height: 50,
    marginBottom: 30,
    borderBottomColor: '#2471A3',
    borderBottomWidth: 2,
    padding:1,
//    justifyContent: 'center',
    marginLeft: 30,
  },
  inputText:{
    height: 50,
    fontSize: 15,
    color: '#003f5c',
  },
  forgot: {
    color: 'white',
    fontSize: 14,
  },
  signupBtn: {
    width: '80%',
    backgroundColor: '#00BFFF',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  },
});
