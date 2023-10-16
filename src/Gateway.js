// Gateway.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Gateway = ({ route, navigation }) => {
  const { bookingData } = route.params;
  const [creditCard, setCreditCard] = useState('');
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const savePayment = async () => {
    // payment process
    await simulatePayment();

    setSuccessModalVisible(true);
  };

  const simulatePayment = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const closeSuccessPopup = () => {
    setSuccessModalVisible(false);
    navigation.navigate('MyBookings');
  };

  return (
    <View>
      <Text>Enter Credit Card Details:</Text>
      <TextInput
        placeholder="Credit Card Number"
        value={creditCard}
        onChangeText={(text) => setCreditCard(text)}
      />
      <Button title="Pay" onPress={savePayment} />

      <Modal visible={successModalVisible}>
        <View>
          <Text>Payment Successful!</Text>
          <Button title="Close" onPress={closeSuccessPopup} />
        </View>
      </Modal>
    </View>
  );
};

export default Gateway;
