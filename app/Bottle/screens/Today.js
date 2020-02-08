import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function Today() {
  return (
    <ScrollView style={styles.container}>
    </ScrollView>
  );
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
