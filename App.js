import React, { Component } from 'react';

import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import Counter from './counter.js'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, showCounter: true };
  }

  componentDidMount() {
    this.interval = setInterval(this.inc, 1000);
  }

    inc = () => {
      console.log('incriment');
      this.setState({ counter: this.state.counter + 1 });
    }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleCounter = () => {
    this.setState({ showCounter: !this.state.showCounter });
  };

  render() {
    if (this.state.showCounter) {
      return (
        <View style={styles.container}>
          <Counter count={this.state.counter} />
          <Button title="stop" onPress={this.toggleCounter} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Button title="Start" onPress={this.toggleCounter} />
        </View>
      );
      

    }
  }
}

let counted = 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 
});
