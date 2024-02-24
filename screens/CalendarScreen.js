import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Modal, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import StatusBarCustom from '../components/StatusBarCustom.js';

const CalendarScreen = () => {
  const [markedDates, setMarkedDates] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [reminder, setReminder] = useState('');
  const [time, setTime] = useState('');
  const [reminders, setReminders] = useState([]);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    setIsModalVisible(true);
  };

  const addReminder = () => {
    const newMarkedDates = { ...markedDates, [selectedDate]: { selected: true, marked: true } };
    setMarkedDates(newMarkedDates);
    setReminders([...reminders, { date: selectedDate, time: time, text: reminder }]);
    setIsModalVisible(false);
    setReminder('');
    setTime('');
  };

  return (
    <View style={styles.container}>
      <Text>Calendário</Text>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={markedDates}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            onChangeText={setReminder}
            value={reminder}
            placeholder="Adicione um aviso..."
          />
          <TextInput
            style={styles.input}
            onChangeText={setTime}
            value={time}
            placeholder="Horário do compromisso..."
          />
          <Button title="Adicionar Aviso" onPress={addReminder} color="#4CAF50" />
        </View>
      </Modal>
      {reminders.map((item, index) => (
        <View key={index} style={styles.reminder}>
          <Text>Data: {item.date}, Hora: {item.time}, Aviso: {item.text}</Text>
        </View>
      ))}
      <StatusBarCustom />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  reminder: {
    marginTop: 10,
  },
});

export default CalendarScreen;
