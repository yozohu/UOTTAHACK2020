import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {ScrollView, StyleSheet} from "react-native";
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Switch
} from 'react-native';

import BluetoothSerial from 'react-native-bluetooth-serial'

export default function Me() {

  return (
      <ScrollView style={styles.container}>
      </ScrollView>
  );
}

Me.navigationOptions = {
  title: 'Me',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});