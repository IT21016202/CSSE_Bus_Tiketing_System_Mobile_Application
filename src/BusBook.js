import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BusBook = ({ route, navigation }) => {
  const { bus } = route.params;
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');

  const saveBooking = async () => {
    const bookingData = {
      userName,
      userEmail,
      userPhoneNumber,
      bus,
    };

    try {
      const bookingDataJSON = JSON.stringify(bookingData);

      const qrCodeData = bookingDataJSON;

      if (qrCodeData) {
        await AsyncStorage.setItem('booking', bookingDataJSON);

        navigation.navigate('QRCodeScreen', { qrCodeData });
      } else {
        console.error('QR code data is empty.');
      }
    } catch (error) {
      console.error('Error saving booking:', error);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.busNumber}>Bus Number: {bus.busNumber}</Text>
          <Text style={styles.busRoute}>Route: {bus.busRoute}</Text>
          <Text style={styles.arrival}>Arrival time: {bus.arrival}</Text>
          <Text style={styles.departure}>Departure time: {bus.departure}</Text>
          <Text style={styles.sectionTitle}>Enter Your Details:</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={userEmail}
            onChangeText={(text) => setUserEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={userPhoneNumber}
            onChangeText={(text) => setUserPhoneNumber(text)}
          />
          <Button title="Book" onPress={saveBooking} color="blue" style={styles.button} />
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  qrcode: {
    marginVertical: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 16,
    borderRadius: 10,
    width: '80%',
  },
  busNumber: {
    fontSize: 18,
    color: 'white',
    marginBottom: 16,
  },
  busRoute: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  arrival: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  departure: {
    fontSize: 16,
    color: 'white',
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
  },
  button: {
    color: 'black',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

export default BusBook;
