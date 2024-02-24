// StatusBarCustom.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const StatusBarCustom = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.statusBar}>
      <TouchableOpacity style={styles.statusBarButton} onPress={() => navigation.navigate('LoginScreen')}>
        <MaterialIcons name="login" size={35} color="silver" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.statusBarButton} onPress={() => navigation.navigate('Bem Vindo!')}>
        <FontAwesome name="home" size={35} color="silver"/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.statusBarButton} onPress={() => console.log('Ambulance')}>
        <FontAwesome5 name='ambulance' size={29} color="silver" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    height: 80,
    width: '100%',
    padding: 10,
    bottom: 0,
    left: 0,
    position: 'absolute', // Isso garante que o statusBar fique sobreposto
    zIndex: 1,
  },
  statusBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StatusBarCustom;
