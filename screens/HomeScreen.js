// ./src/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>MEDIA-DOR</Text>
      <View style={styles.body}>
        {/* Implementar Calendário e Botões conforme necessário */}
        <Button title="Calendário" onPress={() => navigation.navigate('Calendar')} />
        <Button title="Sintomas" onPress={() => navigation.navigate('Symptoms')} />
        <Button title="Crise de Dores" onPress={() => navigation.navigate('PainCrises')} />
        <Button title="Reações Adversas" onPress={() => navigation.navigate('AdverseReactions')} />
        <Button title="Alergias" onPress={() => navigation.navigate('Allergies')} />
        <Button title="Medicamentos" onPress={() => navigation.navigate('Medications')} />
      </View>
      {/* Implementar Lembretes e StatusBar conforme necessário */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFF0', // Um exemplo de cor verde claro
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
