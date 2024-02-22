import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from 'react-native';

const AlexaScreen = () => {
  const [allergy, setAllergy] = useState('');
  const [allergiesList, setAllergiesList] = useState([]);

  // Função para adicionar uma nova alergia
  const handleAddAllergy = () => {
    if (allergy.trim().length === 0) {
      Alert.alert('Erro', 'Por favor, insira o nome da alergia.');
      return;
    }
    
    setAllergiesList(currentList => [
      ...currentList,
      { id: Math.random().toString(), value: allergy }
    ]);
    
    setAllergy(''); // Limpar o input após adicionar
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Alergias</Text>
      <TextInput
        style={styles.input}
        value={allergy}
        onChangeText={setAllergy}
        placeholder="Digite uma alergia"
      />
      <Button title="Adicionar Alergia" onPress={handleAddAllergy} />
      <FlatList
        style={styles.list}
        data={allergiesList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 6,
  },
  list: {
    marginTop: 20,
  },
  listItem: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default AlexaScreen;
