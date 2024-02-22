import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AmbulanceScreen = ({ navigation }) => {
  const handleYesPress = () => {
    console.log('Sim, necessito de resgate de urgência.');
    // Aqui você pode adicionar a lógica para lidar com a solicitação de resgate de urgência
    // Por exemplo, navegar para uma nova tela com formulário de detalhes de resgate ou chamar uma API
  };

  const handleNoPress = () => {
    console.log('Não, não necessito de resgate de urgência.');
    // Aqui você pode adicionar a lógica para o que acontece quando o usuário não necessita de resgate
    // Por exemplo, voltar para a tela anterior ou mostrar outras opções de assistência
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>Você necessita de resgate de urgência?</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonYes]} onPress={handleYesPress}>
          <Text style={styles.buttonText}>Sim</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, styles.buttonNo]} onPress={handleNoPress}>
          <Text style={styles.buttonText}>Não</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 50,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonYes: {
    backgroundColor: 'red',
  },
  buttonNo: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AmbulanceScreen;
