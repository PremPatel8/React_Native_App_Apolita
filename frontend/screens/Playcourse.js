  
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { Header, Icon} from 'react-native-elements';

export default class App extends React.Component {
	state = {
		mute: false,
		fullScreen: false,
    shouldPlay: true,
    course: this.props.navigation.state.params.course,
    courseDesc: this.props.navigation.state.params.detail,
	}

	handlePlayAndPause = () => {
		this.setState(prevState => ({
			shouldPlay: !prevState.shouldPlay
		}));
	}

	handleVolume = () => {
		this.setState(prevState => ({
			mute: !prevState.mute,
		}));
	}

  render() {
		const { width } = Dimensions.get('window');
		
    return (
      <View style={styles.container}>
        <Header style={{ position:'absolute'}}
            leftComponent={< Icon name='arrow-back' color='#fff' onPress={() => this.props.navigation.goBack(null)}/>}
            centerComponent={{ text: 'View Course', style: { color: '#fff', fontSize: 22  } }}
            backgroundColor='#00BFFF'
        />
				<View>
						<Text style={{ textAlign: 'center', marginBottom: 30, fontSize: 20, color: 'blue' }}> {this.state.course} </Text>
						<Video
							source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
							shouldPlay={this.state.shouldPlay}
							resizeMode="cover"
							style={{ width: 350, height: 300 }}
							isMuted={this.state.mute}
						/>
						<View style={styles.controlBar}>
							<MaterialIcons 
								name={this.state.mute ? "volume-mute" : "volume-up"}
								size={45} 
								color="white" 
								onPress={this.handleVolume} 
							/>
							<MaterialIcons 
								name={this.state.shouldPlay ? "pause" : "play-arrow"} 
								size={45} 
								color="white" 
								onPress={this.handlePlayAndPause} 
							/>
						</View>
					</View>
          <Text style={{ textAlign: 'center', marginTop: 40 }}> {this.state.courseDesc} </Text>
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
	controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
		height: 45,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	}
});