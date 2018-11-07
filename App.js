import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image} from 'react-native';

// Greeting class used to generate the greetings
// input: name
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class App extends Component {
  // TextInput
  constructor(props){
    super(props);
    this.state = {text: ''};
  }
  
  render() {
    // Show picture of the world
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      // Show picture of the world
      <View style={styles.container}>
        {/* <Image source={pic} style={{width: 193, height: 110}}/> */}
        <Image source={require('./image/earth.png')} style={{width: 150, height: 150}} />
        <Text>Hello World!</Text>
        <Greeting name='America' />
        <Greeting name='Canada' />
        <Greeting name='Mexico' />

        {/* New Greeting */}
        <TextInput
          style={{height: 40}}
          placeholder="Type here for a new greeting!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {/* {this.state.text.split(' ').map((word) => word && '🍕').join(' ')} */}
          {this.state.text.split(' ').map((word) => word && 'Hello ').join(' ')}
        </Text>

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
