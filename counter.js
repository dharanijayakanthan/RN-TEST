import React, { Component } from 'react';

import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';



const Counter = props => {
  return (
    <View>
      <Text style={styles.counter}>{props.count}</Text>
    </View>
  );
};



const styles = StyleSheet.create({

  counter: {
    fontSize: 42,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Counter;