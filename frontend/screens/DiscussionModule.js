import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class DiscussionModule extends Component {

  render() {
    return (
      <View style={styles.container}>
          <Header style={{ position:'absolute'}}
            leftComponent={< Icon name='arrow-back' color='#fff' onPress={() => this.props.navigation.goBack(null)}/>}
            centerComponent={{ text: 'Discussion', style: { color: '#fff', fontSize: 22  } }}
            backgroundColor='#00BFFF'
          />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Discussion not open.</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{ fontSize:40, color: '#fff'  }}>+</Text>  
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
    marginTop:500,
    marginLeft: 250,
    height:60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
//    marginBottom:20,
    width:60,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});