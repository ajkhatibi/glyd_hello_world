import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { Location, Permissions } from 'expo';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputBox: false,
      text: null,
      submit: false,
      latitude: null,
      longitude: null
    }
  }
  async getLocation(){
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ latitude: location.coords.latitude, longitude: location.coords.longitude});
  }
  pressButton(){
    this.setState({ inputBox: true })
  }
  submitting(){
    this.setState({ submit: true })
    this.getLocation();
  }
  renderInputBox(){
    if(this.state.inputBox){
      return (
        <View style={{ backgroundColor: "red", paddingLeft: 20, paddingRight: 20 }} >
          <TextInput 
            onChangeText={(text) => {this.setState({text})}}
            placeholder='type here' 
            style={{ width: Dimensions.get('window').width, borderColor: 'black', height: 40 }}
            value={this.state.text}
            onSubmitEditing={this.submitting.bind(this)}
          />
        </View>
      )
    }
  }
  renderText(){
    if(this.state.submit){
      return (
        <View>
          <Text>{this.state.text}</Text>
          <Text>Longitude: {this.state.longitude}</Text>
          <Text>Latitude: {this.state.latitude}</Text>
        </View>
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.pressButton.bind(this)} >
         <Text>Open up App.js to start working on your app!</Text>
      </TouchableOpacity>
        {this.renderInputBox()}
        <View>
          {this.renderText()}
        </View>
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
