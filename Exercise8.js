import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import AddTransaction from '../components/AddTransaction';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <BalanceCard />
      <AddTransaction />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFE',
    padding: 20,
  },
});

export default HomeScreen;
