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
import Overlay from 'react-native-modal-overlay';

export default class DiscussionModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      annDesc: '',
      data: [],
      desc: {},
    }
  }
  showOverlay() {
    this.setState({modalVisible: true})
//      this.state.modalVisible=true
  }
  hideOverlay() {
    this.setState({modalVisible: false,
      annDesc: ''})
  }
  componentDidMount = () => {
    fetch(`http://9466b7f3.ngrok.io/announcement/fetchall`, {
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
            centerComponent={{ text: 'Announcements', style: { color: '#fff', fontSize: 22  } }}
            backgroundColor='#00BFFF'
          />
          <ScrollView style={styles.body}>
              {this.state.data.map((element, i) => {
                this.state.desc[i] = element.description
                return (
                  <View style={styles.bodyContent} key={i}>
                    <DetailListItem
                    icon="chat"
                    title={element.title}
//                  subtitle="Tap to check announcement"
                    subtitle={element.description}
                    onPress={this.showOverlay.bind(this)}/>
                    <Overlay visible={this.state.modalVisible} closeOnTouchOutside onClose={this.hideOverlay.bind(this)} animationType="zoomIn">
                      <Text>{this.state.desc[i]}</Text>
                    </Overlay>
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