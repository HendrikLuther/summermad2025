import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = () => {
  return <Text style={styles.title}>Registration</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
});

export default Title;
