import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header, Divider } from 'react-native-elements';
import api from '../utils/api';

export default class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
    errorMessage: '',
    name: '',
    email1: '',
    phone: '',
    city: '',
    role: '',
  };

  handleSubmit = async () => {
    const reqUrl = api.url + '/student/login';
//    evt.preventDefault();
//    console.debug('trying to connect')
//    const reqUrl = `http://72240015.ngrok.io/student/login`;
    try {
      const response = await fetch(reqUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      });
      if (response.status === 200) {
        response.json().then(data => {
        this.setState({ errorMessage: '',
          name: data.firstname + ' ' + data.lastname,
          email1 : data.email,
          phone: data.phonenumber,
          city: data.city + ',' + data.state + ',' + data.country,
          role: data.role_id,
          });
//        console.log(data.city + ',' + data.state + ',' + data.country)
        if (this.state.role == '2') {
          this.props.navigation.navigate('Dashboard', {name: this.state.name, email: this.state.email1, phone: this.state.phone, city: this.state.city});
        } else {
          this.props.navigation.navigate('AdminDashboard', {name: this.state.name, email: this.state.email1, phone: this.state.phone, city: this.state.city});
        }
        });
      } else if (response.status === 401) {
        this.setState({ errorMessage: 'Invalid Email and/or Password' });
      } else {
        this.setState({
          errorMessage:
            'There was some error while processing your request. If this contiunes please contact support. ',
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { errorMessage } = this.state;
    return (
      <View style={styles.container}>
        <Header
          style={{ position: 'absolute' }}
          centerComponent={{
            text: 'Welcome to Apolita',
            style: { color: '#fff', fontSize: 25 },
          }}
          backgroundColor='#00BFFF'
        />
        <Text style={styles.logo}></Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='Email...'
            name='email'
            placeholderTextColor='#003f5c'
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            name='password'
            placeholder='Password...'
            placeholderTextColor='#003f5c'
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <Text style={{ color: 'red' }}>{errorMessage}</Text>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.handleSubmit()}
//            onPress={() => this.props.navigation.navigate('Dashboard')}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('PasswordReset')}
        >
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={{ padding: 20 }}></View>
        <Divider
          style={{
            backgroundColor: '#2471A3',
            height: 1,
            width: 290,
          }}
        />
        <TouchableOpacity
          style={styles.signupBtn}
          onPress={() => this.props.navigation.navigate('SignUp')}
        >
          <Text style={styles.loginText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //    justifyContent: 'center',
  },
  logo: {
    //    fontWeight:"bold",
    fontSize: 40,
    color: '#2471A3',
    marginBottom: 40,
    textAlignVertical: 'top',
    justifyContent: 'flex-start',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    height: 50,
    marginBottom: 40,
    borderBottomColor: '#2471A3',
    borderBottomWidth: 2,
    padding: 1,
  },
  inputText: {
    height: 50,
    fontSize: 15,
    color: '#003f5c',
  },
  forgot: {
    color: '#2471A3',
    fontSize: 14,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#00BFFF',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: 210,
    marginBottom: 20,
  },
  signupBtn: {
    width: '80%',
    backgroundColor: '#00BFFF',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: 210,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  },
});
