import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Hi, John Doe</Text>
        <Text style={styles.subGreeting}>Have you track your money today?</Text>
      </View>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e' }}
        style={styles.profileImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subGreeting: {
    fontSize: 16,
    color: '#A0A3BD',
    marginTop: 4,
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 15,
  },
});

export default Header;
