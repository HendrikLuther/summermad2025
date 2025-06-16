import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Title from './components/Title';
import CustomButton from './components/CustomButton';
import CustomTextInput from './components/CustomTextInput';

const Exercise4 = () => {
  return (
    <View style={styles.container}>
      <Title text="Welcome" />
      <CustomTextInput label="Username" placeholder="Masukan username anda" />
      <CustomTextInput
        label="Password"
        placeholder="Masukan password anda"
        secureTextEntry={true}
      />

      {/* Tombol Sign In utama */}
      <CustomButton text="Forgot Password" backgroundColor="#f90" />

      {/* Tombol login sosial dengan ikon */}
      <CustomButton
        text="Sign in Google"
        backgroundColor="#db4437"
      />
      <CustomButton
        text="Sign in Facebook"
        backgroundColor="#4267B2"
      />
      <CustomButton
        text="Sign in Apple"
        backgroundColor="#000000"
      />
    </View>
  );
};

export default Exercise4;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    paddingTop: 40,
    backgroundColor: 'white',
    flexGrow: 1,
  },
  logo: {
    width: '100%',
    height: undefined, // biar tetap proporsional (auto height)
    aspectRatio: 3, // sesuaikan rasio gambar logo, coba 3 atau 4 tergantung bentuknya
    marginBottom: 20,
  },
});
