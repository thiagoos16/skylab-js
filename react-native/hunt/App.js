import React, { Component } from "react";
import { Platform, StyleSheet, Text, View }  from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to the jungle</Text>
        <View style={styles.box} /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  box: {
    width: 80,
    height: 80,
    background: "#ff0000",
  }
});