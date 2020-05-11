import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import DetailListItem from '../components/DetailListItem';

export default class StudentsEnrolled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      annDesc: '',
      data: [],
    }
  }

  componentDidMount = () => {
    fetch(`http://e04bbad6.ngrok.io/admin/fetchall`, {
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
            leftComponent={< Icon name='arrow-back' color='#fff' onPress={() => this.props.navigation.goBack(null)}/>}
            centerComponent={{ text: 'Enrolled Students', style: { color: '#fff', fontSize: 22  } }}
            backgroundColor='#00BFFF'
          />
          <ScrollView style={styles.body}>
              {this.state.data.map((element, i) => {
                return (
                  <View style={styles.bodyContent} key={i}>
                    <DetailListItem
                    icon="account-circle"
                    title={element.firstname + ' ' + element.lastname}
                    subtitle={element.email}
                    />
                  </View>
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
  },
  body:{
    marginTop:0,
  },
  bodyContent: {
    backgroundColor: 'white',
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