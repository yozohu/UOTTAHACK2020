import React, { Component } from 'react';
import { ExpoConfigView } from '@expo/samples';
import {View, StyleSheet, Text} from "react-native";


export default class Today extends Component<{}>{
  render() {
    return (
        <View style={styles.container}>
          <Text>Hello</Text>
        </View>
    );
  }
}

Today.navigationOptions = {
  title: 'Today',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});