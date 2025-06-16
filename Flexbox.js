import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
const Flexbox = () => {
  return (
    <View style={styles.container}>
      {/* Bagian Atas */}
      <View style={styles.redContainer}>
        <View style={styles.blackContainer} />
        <View style={styles.yellowContainer} />
        <View style={styles.blackContainer} />
      </View>

      {/* Gambar Tengah */}
      <View style={styles.whiteContainer}>
        <Image
          source={require('./assets/123foto.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Bagian Bawah */}
      <View style={styles.blueContainer}>
        <View style={styles.blackContainer} />
        <View style={styles.yellowContainer} />
        <View style={styles.blackContainer} />
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  redContainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    height: 80,
  },
  blueContainer: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    marginRight: 10,
  },
  yellowContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    marginRight: 10,
  },
  logo: {
    width: 250,
    height: 250,
  },
});