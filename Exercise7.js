import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import UserCard from './components/UserCard';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://reqres.in/api/users?per_page=12', {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
            });
            const json = await response.json();
            setUsers(json.data);
        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setLoading(false);
        }
    };


  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>User List</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <UserCard user={item} />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 12,
  },
});
