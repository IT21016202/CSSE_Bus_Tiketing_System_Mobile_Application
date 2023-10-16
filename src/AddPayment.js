import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AddPayment = ({ route, navigation }) => {
  const { bookingData } = route.params;
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.containerCentered}>
        <View style={styles.container}>
          <FontAwesome name="user" size={100} color="white" style={styles.personIcon} />
          <Text style={styles.paymentHeader}>Payment Details</Text>
          <Text style={styles.paymentText}>Bus Number: {bookingData.bus.busNumber}</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputRow}>
              <FontAwesome name="user" size={24} color="white" style={styles.inputIcon} />
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="John Doe"
                value={userName}
                onChangeText={(text) => setUserName(text)}
              />
            </View>
            <View style={styles.inputRow}>
              <FontAwesome name="envelope" size={24} color="white" style={styles.inputIcon} />
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="john.doe@example.com"
                value={userEmail}
                onChangeText={(text) => setUserEmail(text)}
              />
            </View>
            <View style={styles.inputRow}>
              <FontAwesome name="phone" size={24} color="white" style={styles.inputIcon} />
              <Text style={styles.inputLabel}>Phone</Text>
              <TextInput
                style={styles.input}
                placeholder="(123) 456-7890"
                value={userPhoneNumber}
                onChangeText={(text) => setUserPhoneNumber(text)}
              />
            </View>
          </View>
          <Button
            title="Proceed to Payment"
            onPress={() => navigation.navigate('Payment', { totalPrice: 100 })}
            style={styles.paymentButton}
          />
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
  containerCentered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '80%',
  },
  personIcon: {
    marginBottom: 20,
  },
  paymentHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  paymentText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  inputIcon: {
    marginRight: 8,
  },
  inputLabel: {
    fontSize: 16,
    color: 'white',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  paymentButton: {
    color: 'white',
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
});

export default AddPayment;
