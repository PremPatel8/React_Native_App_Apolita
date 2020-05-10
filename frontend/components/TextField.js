import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

class TextField extends React.Component {
  render() {
    const { placeHolder, onChangeText, textContentType, value, ref } = this.props;
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.inputText}
                placeholder={placeHolder} 
                placeholderTextColor="#808B96"
                keyboardType={textContentType}
                onChangeText={onChangeText}
                required
                value={value}
                ref={ref}
                />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:"80%",
//    backgroundColor:"#fff",
    height:50,
    marginBottom:10,
    borderBottomColor: '#2471A3',
    borderBottomWidth: 1,
    padding:1
  },
  inputText:{
    height:50,
    fontSize: 15,
    color:"#808B96"
  }
});

export default TextField;