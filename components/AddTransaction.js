import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AddTransaction = () => {
  return (
    <View>
      <Text style={styles.title}>Add Transaction</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cash On Hand</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cash On Bank</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#00D98B',
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default AddTransaction;
