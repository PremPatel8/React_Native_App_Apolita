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
import { Header, Divider } from 'react-native-elements';
import Typography from '@material-ui/core/Typography';

export default class SignUp extends React.Component {
  state = {
    data: {},
    errorMessage: '',
  };

  handleChange = (event) => {
    const { data } = this.state;
    this.setState({
      data: {
        ...data,
        [event.target.name]: event.target.value,
      },
    });
    const newState = this.state;
    if (
      newState.data.password &&
      newState.data.confirmPassword &&
      newState.data.password !== newState.data.confirmPassword
    ) {
      this.setState({ errorMessage: 'Please enter the password correctly' });
    } else {
      this.setState({ errorMessage: '' });
    }
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const { data } = this.state;

    const response = await fetch(`URLL`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      this.setState({ errorMessage: '' });
      this.props.navigation.navigate('RegisterConfirm');
    } else if (response.status === 401) {
      this.setState({ errorMessage: 'User already exists.' });
    } else {
      this.setState({
        errorMessage:
          'There was some error while processing your request. If this continues please contact support. ',
      });
    }
  };

  render() {
    const { data, errorMessage } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Header
          style={{ position: 'absolute' }}
          //            leftComponent={< Icon name='menu' color='#fff' />}
          //                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>}
          centerComponent={{
            text: 'SignUp with Apolita',
            style: { color: '#fff', fontSize: 25 },
          }}
          backgroundColor='#00BFFF'
        />
        <ScrollView>
          <Text style={{ marginBottom: 40 }}></Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder='First Name...'
              placeholderTextColor='#003f5c'
              required
              name='firstname'
              value={data.firstname}
              onChangeText={this.handleChange}
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
              onChangeText={this.handleChange}
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
                width: 150,
              }}
              onValueChange={this.handleChange}
              name='gender'
              value={data.gender || ''}
              placeholder='Select Gender'
              placeholderTextColor='#003f5c'
              selected={this.state.data.gender}
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
              onChangeText={this.handleChange}
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
              value={data.password}
              onChangeText={this.handleChange}
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
              value={data.confirmPassword}
              onChangeText={this.handleChange}
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
              onChangeText={this.handleChange}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder='City, Country...'
              placeholderTextColor='#003f5c'
              required
              name='location'
              value={data.location}
              onChangeText={this.handleChange}
            />
          </View>
          {errorMessage && (
            <Typography
              variant='caption'
              component='p'
              style={{ color: 'red', padding: 10 }}
            >
              {errorMessage}
            </Typography>
          )}
        </ScrollView>
        <TouchableOpacity
          style={styles.signupBtn}
          onPress={() => this.handleSubmit}
        >
          <Text style={styles.loginText}>Register with Apolita</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    height: 50,
    marginBottom: 30,
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
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  },
});
