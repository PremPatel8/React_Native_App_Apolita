import React from "react";
import { StyleSheet, View, Image } from "react-native";
//import {Header, Content} from 'native-base';
import { DrawerItems } from 'react-navigation-drawer';
class CustomDrawerContentComponent extends React.Component {
  render() {
    return (
      <View>
              <Image style={styles.drawerImage}
              source={require('../assets/apolita.png')}
              />
          <DrawerItems />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
});

export default CustomDrawerContentComponent;