import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoticeScreen = ({ notice }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Novo aviso:</Text>
      <Text>Data: {notice.date}, Hora: {notice.time}, Aviso: {notice.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default NoticeScreen;
