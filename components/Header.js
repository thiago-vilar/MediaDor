import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = () => (
  <View style={styles.header}>
    <Image
      source={require('../assets/img/flower.png')} // Ajuste o caminho conforme necessário
      style={styles.tinyLogo}
    />
    <Text style={styles.headerText}>MediaDor <MaterialCommunityIcons name="hospital-box" size={40} color="white" /></Text>
    <Text style={styles.headerText2}> SAÚDE </Text>
  </View>
);


const styles = StyleSheet.create({
  header: {
    height: 150,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    marginTop: 40,
    height: 50,
    width: 50,
  },
  headerText: {
    paddingTop: -80,
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 3,
    fontStyle: 'italic',
    textShadowColor: '#4F4F4F',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  headerText2: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
    textShadowColor: '#4F4F4F',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});

export default Header;
