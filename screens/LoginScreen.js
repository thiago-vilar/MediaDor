import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import StatusBarCustom from '../components/StatusBarCustom.js';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Sign in with email:', email, 'and password:', password);
    // Aqui você adicionaria sua lógica de autenticação
  };

  const handleGoogleSignIn = () => {
    console.log('Sign in with Google');
    // Aqui você adicionaria sua lógica de autenticação com o Google
  };

  const handleCreateAccount = () => {
    console.log('Navigate to Create Account Screen');
    // Aqui você adicionaria navegação para a tela de criação de conta
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MediaDor Login</Text>
      
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="email-outline" size={24} color="green" />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="lock-outline" size={24} color="green" />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonGoogle} onPress={handleGoogleSignIn}>
        <AntDesign name="google" size={24} color="white" />
        <Text style={styles.buttonTextGoogle}>Log In with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCreateAccount}>
        <Text style={styles.createAccountText}>Create New Account</Text>
      </TouchableOpacity>
      <StatusBarCustom /> 
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    paddingBottom: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    marginLeft: 10,
    width: '90%',
  },
  button: {
    backgroundColor: 'green',
    width: '80%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonGoogle: {
    flexDirection: 'row',
    backgroundColor: 'green',
    width: '80%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonTextGoogle: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  createAccountText: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
