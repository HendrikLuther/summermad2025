import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BalanceCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Balance</Text>
      <Text style={styles.balance}>Rp. 10.000.000</Text>
      <View style={styles.separator} />
      <View style={styles.row}>
        <Text style={styles.label}>Cash on Hand</Text>
        <Text style={styles.amount}>Rp. 4.000.000</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Cash on Bank</Text>
        <Text style={styles.amount}>Rp. 6.000.000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  balance: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default BalanceCard;
