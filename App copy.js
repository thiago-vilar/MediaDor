import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importações dos componentes de tela e do Header
import CalendarScreen from './screens/CalendarScreen';
import SymptomsScreen from './screens/SymptomsScreen';
import PainCrisesScreen from './screens/PainCrisesScreen';
import AdverseReactionsScreen from './screens/AdverseReactionsScreen';
import AllergiesScreen from './screens/AllergiesScreen';
import MedicationsScreen from './screens/MedicationsScreen';
import MedicalRecordScreen from './screens/MedicalRecordScreen';
import SmartWatchScreen from './screens/SmartWatchScreen';
import AlexaScreen from './screens/AlexaScreen';
import Header from './components/Header';

const Stack = createNativeStackNavigator();

const buttons = [
  { id: '1', title: 'Calendário', icon: <Ionicons name="calendar-outline" size={33} color="#FFFFFF" />, screen: 'CalendarScreen'},
  { id: '2', title:'Sintomas', icon: <MaterialCommunityIcons name="format-list-bulleted" size={33} color="#FFFFFF" />, screen: 'SymptomsScreen' },
  { id: '3', title: 'Dores', icon: <Ionicons name="medkit" size={33} color="#FFFFFF" />, screen: 'PainCrisesScreen' },
  { id: '4', title: 'Reações', icon: <FontAwesome name="exclamation-triangle" size={33} color="#FFFFFF" />, screen: 'AdverseReactionsScreen' },
  { id: '5', title: 'Alergias', icon: <FontAwesome5 name="allergies" size={33} color="#FFFFFF" />, screen: 'AllergiesScreen' },
  { id: '6', title: 'Medicamentos', icon: <MaterialCommunityIcons name="pill" size={33} color="#FFFFFF" />, screen: 'MedicationsScreen' },
  { id: '7', title: 'Prontuário', icon: <MaterialIcons name="assignment" size={33} color="#FFFFFF" />, screen: 'MedicalRecordScreen' },
  { id: '8', title: 'SmartWatch', icon: <MaterialIcons name="watch" size={33} color="#FFFFFF" />, screen: 'SmartWatchScreen'},
  { id: '9', title: 'Alexa', icon: <MaterialIcons name="speaker" size={33} color="#FFFFFF" />, screen: 'AlexaScreen' },
];


const HomeScreen = ({ navigation }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleButtonHover = (id) => {
    setHoveredButton(id);
  };

  const handleButtonBlur = () => {
    setHoveredButton(null);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FFFFFF', '#C0C0C0', '#006400']} style={styles.background} />
      <Header />
      <FlatList
        data={buttons}
        keyExtractor={item => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, hoveredButton === item.id ? styles.hoveredButton : null]}
            onMouseEnter={() => handleButtonHover(item.id)}
            onMouseLeave={handleButtonBlur}
            onPress={() => navigation.navigate(item.screen)}
          >
            {item.icon}
            <Text style={styles.itemTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.flatlist}
      />
      
      <View style={styles.statusBar}>
        <TouchableOpacity style={styles.statusBarButton} onPress={() => console.log('Login')}>
          <MaterialIcons name="login" size={35} color="silver" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusBarButton} onPress={() => console.log('Home')}>
          <FontAwesome name="home" size={35} color="silver"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusBarButton} onPress={() => console.log('Ambulance')}>
          <FontAwesome5 name='ambulance' size={35} color="silver" />
        </TouchableOpacity>
      </View>
    
    </View>
    
  );
};
  


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: {
            backgroundColor: 'green', // Cor de fundo do cabeçalho
          },
          headerTitleStyle: {
            color: '#fff', // Cor do texto do título
            textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra do texto
            textShadowOffset: {width: -1, height: 1}, // Posição da sombra do texto
            textShadowRadius: 10, // Raio da sombra do texto
          },
        }}>
        <Stack.Screen name="Bem Vindo!" component={HomeScreen} />
        {/* Outras telas */}
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="SymptomsScreen" component={SymptomsScreen} />
        <Stack.Screen name="PainCrisesScreen" component={PainCrisesScreen} />
        <Stack.Screen name="AdverseReactionsScreen" component={AdverseReactionsScreen} />
        <Stack.Screen name="AllergiesScreen" component={AllergiesScreen} />
        <Stack.Screen name="MedicationsScreen" component={MedicationsScreen} />
        <Stack.Screen name="MedicalRecordScreen" component={MedicalRecordScreen} />
        <Stack.Screen name="SmartWatchScreen" component={SmartWatchScreen} />
        <Stack.Screen name="AlexaScreen" component={AlexaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};
        

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 0,
    backgroundColor: '000000',
    backgroundImage: 'linear-gradient(to bottom, silver, darkgreen)',
  },

 
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  header: {
    height: 200,
    paddingTop: 90,
    alignItems: 'center',
    justifyContent: 'center',
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
  flatlist: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    marginBottom: 60,
  },
  item: {
    backgroundColor: 'green', //cor botão
    borderRadius: 60,
    width: 111,
    height: 111,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  hoveredButton: {
    backgroundColor: 'crimson', // Cor do hover
  },
  itemTitle: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  button: {
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'darkgreen',
    fontSize: 12,
    textAlign: 'center',
  },
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
    zIndex: 1,
  },
  statusBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBarText: {
    fontSize: 16,
    //fontWeight: 'bold',
    color: '#white',
  },
});

export default App;