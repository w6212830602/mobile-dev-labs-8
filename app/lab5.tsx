import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import { getUsers, createUser, updateUser, deleteUser } from '../lib/supabase_crud';

export default function Lab5() {
  const [users, setUsers] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const data = await getUsers();
      setUsers(data);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Failed to load data');
    }
  }

  async function handleAddOrUpdateUser() {
    if (!name || !email || !age) {
      Alert.alert('Missing Fields', 'Please fill in all fields.');
      return;
    }

    try {
      if (selectedUserId) {
        // Update
        await updateUser(selectedUserId, {
          name,
          email,
          age: parseInt(age)
        });
      } else {
        // Create
        await createUser({
          name,
          email,
          age: parseInt(age)
        });
      }

      setName('');
      setEmail('');
      setAge('');
      setSelectedUserId(null);

      loadData();
    } catch (err: any) {
      setError(err.message || 'Failed to save user');
    }
  }

  async function handleDelete(id: string) {
    try {
      await deleteUser(id);
      if (id === selectedUserId) {
    
        setName('');
        setEmail('');
        setAge('');
        setSelectedUserId(null);
      }
      loadData();
    } catch (err: any) {
      setError(err.message || 'Failed to delete user');
    }
  }

  function handleEdit(user: any) {
    setName(user.name);
    setEmail(user.email);
    setAge(String(user.age));
    setSelectedUserId(user.id);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Supabase User List</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Button
        title={selectedUserId ? 'Update User' : 'Add User'}
        onPress={handleAddOrUpdateUser}
      />

      {error && <Text style={styles.error}>{error}</Text>}

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} ({item.age}) - {item.email}</Text>
            <View style={styles.buttonGroup}>
              <Button title="Edit" onPress={() => handleEdit(item)} />
              <Button title="Delete" color="red" onPress={() => handleDelete(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  item: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
    gap: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
    marginBottom: 10,
  },
});
