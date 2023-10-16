// MyBooking.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const storedBookings = await AsyncStorage.getItem('bookings');
        if (storedBookings) {
          setBookings(JSON.parse(storedBookings));
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    }
    fetchBookings();
  }, []);

  return (
    <View>
      <Text>Your Bookings:</Text>
      {bookings.map((booking, index) => (
        <View key={index}>
          <Text>Bus Number: {booking.bus.busNumber}</Text>
          <Text>User Name: {booking.userName}</Text>
          <Text>User Email: {booking.userEmail}</Text>
          <Text>User Phone: {booking.userPhoneNumber}</Text>
        </View>
      ))}
    </View>
  );
};

export default MyBooking;
