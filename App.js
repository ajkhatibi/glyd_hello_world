import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputBox: false
    }
  }
  pressButton(){
    this.setState({ inputBox: true })
    console.log("input box: ", this.state.inputBox)
  }
  renderInputBox(){
    if(this.state.inputBox){
      return (
        <View style={{ backgroundColor: "red", paddingLeft: 20, paddingRight: 20 }} >
          <TextInput placeholder='type here' style={{ width: Dimensions.get('window').width, borderColor: 'black', height: 40 }}/>
        </View>
      )
    }
  }
  renderText(){
    if(!this.state.inputBox){
      return (
        <View>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      )
    } else if(this.state.inputBox){
      <View>
      </View>
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.pressButton.bind(this)} >
        {this.renderText()}
      </TouchableOpacity>
        {this.renderInputBox()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
