import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';

const MedicationsScreen = () => {
  const [medication, setMedication] = useState('');
  const [quantity, setQuantity] = useState('');
  const [time, setTime] = useState('');

  // Função para adicionar um medicamento
  const handleAddMedication = () => {
    // Aqui, você pode adicionar a lógica para salvar os dados no estado do aplicativo ou em um banco de dados
    Alert.alert('Medicamento Adicionado', `${medication} adicionado com sucesso!`);
    
    // Programar notificação (exemplo simples)
    PushNotification.localNotificationSchedule({
      title: "Hora do Medicamento",
      message: `É hora de tomar seu medicamento: ${medication}`, // Mensagem da notificação
      date: new Date(Date.now() + 5 * 1000), // Agendar para 5 segundos a partir de agora como exemplo
      allowWhileIdle: true, // Permite que a notificação seja mostrada mesmo em modo de economia de energia
    });

    // Limpar os campos após adicionar
    setMedication('');
    setQuantity('');
    setTime('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registrar Medicamento</Text>
      <TextInput
        style={styles.input}
        value={medication}
        onChangeText={setMedication}
        placeholder="Nome do Medicamento"
      />
      <TextInput
        style={styles.input}
        value={quantity}
        onChangeText={setQuantity}
        placeholder="Quantidade"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={setTime}
        placeholder="Horário (HH:mm)"
      />
      <Button title="Adicionar Medicamento" onPress={handleAddMedication} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
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
});

export default MedicationsScreen;
