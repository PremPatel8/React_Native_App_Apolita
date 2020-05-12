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
import api from '../utils/api';

export default class DiscussionModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      annDesc: '',
      data: [],
    }
    this.showOverlay = this.showOverlay.bind(this)
  }
  showOverlay(key) {
//    console.log(key)
    this.setState({modalVisible: true,
      annDesc: key})
  }
  hideOverlay() {
    this.setState({modalVisible: false})
  }
  componentDidMount = () => {
    const reqUrl = api.url + '/announcement/fetchall';
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
            leftComponent={< Icon name='arrow-back' color='#fff' onPress={() => this.props.navigation.goBack(null)}/>}
            centerComponent={{ text: 'Announcements', style: { color: '#fff', fontSize: 22  } }}
            backgroundColor='#00BFFF'
          />
          <ScrollView style={styles.body}>
              {this.state.data.map((element, i) => {
                return (
                  <TouchableOpacity style={styles.bodyContent} key={i} onPress={() => this.showOverlay(element.description)}>
                    <DetailListItem
                    icon="chat"
                    title={element.title}
                    subtitle='Tap to check the Announcement'
                    />
                  </TouchableOpacity>
                );
              })} 
              <Overlay visible={this.state.modalVisible} closeOnTouchOutside onClose={this.hideOverlay.bind(this)} animationType="zoomIn">
                <Text>{this.state.annDesc}</Text>
              </Overlay>
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