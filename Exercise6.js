import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Title from './components/Title';
import InputField from './components/InputField';
import RegisterButton from './components/RegisterButton';

export default function App() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone:', phone);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <Title />
        <InputField label="Name" placeholder="Masukan nama lengkap anda" value={name} onChangeText={setName} />
        <InputField label="Username" placeholder="Masukan username anda" value={username} onChangeText={setUsername} />
        <InputField label="Email" placeholder="Masukan email anda" value={email} onChangeText={setEmail} />
        <InputField label="Address" placeholder="Masukan alamat anda" value={address} onChangeText={setAddress} />
        <InputField label="Phone Number" placeholder="Masukan Nomor telepon anda" value={phone} onChangeText={setPhone} keyboardType="numeric" />
        <RegisterButton onPress={handleRegister} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    padding: 24,
  },
});
