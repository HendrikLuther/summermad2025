import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RegisterButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Register</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#c933d6',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 24,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default RegisterButton;
