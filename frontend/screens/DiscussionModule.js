import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import DetailListItem from '../components/DetailListItem';
import Overlay from 'react-native-modal-overlay';

export default class DiscussionModule extends Component {

  state = {
    modalVisible: false,
  }
  showOverlay() {
    this.setState({modalVisible: true})
  }
  hideOverlay() {
    this.setState({modalVisible: false})
  }
  render() {
    return (
      <View style={styles.container}>
          <Header style={{ position:'absolute'}}
            leftComponent={< Icon name='arrow-back' color='#fff' onPress={() => this.props.navigation.goBack(null)}/>}
            centerComponent={{ text: 'Announcements', style: { color: '#fff', fontSize: 22  } }}
            backgroundColor='#00BFFF'
          />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <DetailListItem
                  icon="chat"
                  title="Announcement 1"
                  subtitle="Tap to check announcement"
                  onPress={this.showOverlay.bind(this)}/>
              <DetailListItem
                  icon="chat"
                  title="Announcement 2"
                  subtitle="Tap to check announcement"
                  onPress={this.showOverlay.bind(this)}/>
              <DetailListItem
                  icon="chat"
                  title="Announcement 3"
                  subtitle="Tap to check announcement"
                  onPress={this.showOverlay.bind(this)}/>
              <DetailListItem
                  icon="chat"
                  title="Announcement 4"
                  subtitle="Tap to check announcement"
                  onPress={this.showOverlay.bind(this)}/>
              <Overlay visible={this.state.modalVisible} closeOnTouchOutside onClose={this.hideOverlay.bind(this)} animationType="zoomIn">
                <Text>Add the Announcement in this section</Text>
              </Overlay>         
            </View>
           </View>
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
