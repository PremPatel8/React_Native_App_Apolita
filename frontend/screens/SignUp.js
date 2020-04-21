import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import SelectPicker from 'react-native-form-select-picker';
import { Header, Divider } from 'react-native-elements';

export default class SignUp extends React.Component {
  state={
    fname:"",
    lname:"",
    email:"",
    mobnum:"",
    location:"",
    selected:"",
  }
  render(){
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Header style={{ position:'absolute'}}
//            leftComponent={< Icon name='menu' color='#fff' />}
 //                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>}
            centerComponent={{ text: 'SignUp with Apolita', style: { color: '#fff', fontSize: 25  } }}
            backgroundColor='#00BFFF'
        />
        <Text style={{ marginBottom:40}}></Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="First Name..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({fname:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput 
            style={styles.inputText}
            placeholder="Last name..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({lname:text})}/>
        </View>
        <View style={{ paddingRight: 150, marginBottom: 20, marginTop: 10 }}>
        <SelectPicker style={{ color: '#003f5c',borderBottomWidth: 2, borderBottomColor: '#2471A3', width: 150 }} 
                      onValueChange={(value) => {this.setState({selected: value})}}
                      placeholder='Select Gender' placeholderTextColor="#003f5c"
			                selected={this.state.selected}>
            <SelectPicker.Item label="Male" value="male" />	
			      <SelectPicker.Item label="Female" value="female" />	
		    </SelectPicker>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email Address..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Mobile Number..." 
            placeholderTextColor="#003f5c"
            keyboardType = 'number-pad'
            onChangeText={text => this.setState({mobnum:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="City, Country..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({location:text})}/>
        </View>
        <TouchableOpacity style={styles.signupBtn} onPress={() => this.props.navigation.navigate('RegisterConfirm')}>
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
  inputView:{
    width:"80%",
    backgroundColor: '#fff',
    height:50,
    marginBottom:30,
    borderBottomColor: '#2471A3',
    borderBottomWidth: 2,
    padding:1
  },
  inputText:{
    height:50,
    fontSize:15,
    color:"#003f5c"
  },
  forgot:{
    color:"white",
    fontSize:14
  },
  signupBtn:{
    width:"80%",
    backgroundColor:"#00BFFF",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white",
    fontSize: 20
  }
});