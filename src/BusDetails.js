// BusDetails.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BusDetails = ({ bus }) => {
  const navigation = useNavigation();

  const handleBookBus = () => {
    navigation.navigate('BusBook', { bus });
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Image source={{ uri: bus.busImage }} style={styles.image} />
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.label}>Bus Number:</Text>
        <Text style={styles.info}>{bus.busNumber}</Text>
        <Text style={styles.label}>Bus Name:</Text>
        <Text style={styles.info}>{bus.busName}</Text>
        <Text style={styles.label}>Bus Route:</Text>
        <Text style={styles.info}>{bus.busRoute}</Text>
        <Text style={styles.label}>Arrival:</Text>
        <Text style={styles.info}>{bus.arrival}</Text>
        <Text style={styles.label}>Departure:</Text>
        <Text style={styles.info}>{bus.departure}</Text>
        <TouchableOpacity
          onPress={handleBookBus}
          style={[styles.button, styles.customButton]}
        >
          <Text style={styles.buttonText}>Book Bus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    flex: 1,
  },
  leftColumn: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightColumn: {
    flex: 3,
    padding: 8,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  label: {
    fontSize: 12,
    color: 'gray',
  },
  info: {
    fontSize: 12,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customButton: {
    backgroundColor: '#FFD700',
    borderRadius: 5,
    padding: 5,
  },
  buttonText: {
    fontSize: 10,
    color: 'black',
  },
});

export default BusDetails;
