import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

import CreateService from './services/CreateService';
import ReadService from './services/ReadService';
import DeleteService from './services/DeleteService';

export default function App() {
  const [name, setName] = useState('');
  const [items, setItems] = useState({});

  useEffect(() => {
    const unsubscribe = ReadService.listenToItems(setItems);
    return () => unsubscribe(); // Cleanup listener
  }, []);

  const handleAdd = async () => {
    if (!name.trim()) return;
    await CreateService.addItem({ name });
    setName('');
  };

  const handleDelete = async (id) => {
    await DeleteService.deleteItem(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CRUD com Classes</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite um nome"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>

      <ScrollView>
        {Object.entries(items).map(([id, item]) => (
          <View key={id} style={styles.item}>
            <Text>{item.name}</Text>
            <Button title="Excluir" onPress={() => handleDelete(id)} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  inputContainer: { flexDirection: 'row', marginBottom: 20, gap: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 4,
    height: 40,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
