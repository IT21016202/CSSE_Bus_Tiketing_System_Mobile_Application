import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Payment = ({ route, navigation }) => {
  const { totalPrice } = route.params;
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

  const [errors, setErrors] = useState({
    creditCardNumber: '',
    expirationDate: '',
    cvv: '',
    cardHolderName: '',
  });

  const validateCreditCard = (text) => {
    let formattedCardNumber = text.replace(/\D/g, '');

    if (formattedCardNumber.length > 16) {
      formattedCardNumber = formattedCardNumber.slice(0, 16);
    }

    const formatted = formattedCardNumber ? formattedCardNumber.match(/.{1,4}/g).join('-') : '';
    setCreditCardNumber(formatted);

    if (formattedCardNumber.length === 16) {
      setErrors((prevErrors) => ({ ...prevErrors, creditCardNumber: '' }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        creditCardNumber: 'Card number must be exactly 16 digits',
      }));
    }
  };

  const validateExpirationDate = (text) => {
    let formattedDate = text.replace(/\D/g, '');

    if (formattedDate.length > 4) {
      formattedDate = formattedDate.slice(0, 4);
    }

    let formatted = '';
    if (formattedDate.length > 0) {
      formatted = formattedDate.replace(/(\d{2})(\d{2})/, '$1/$2');
    }

    setExpirationDate(formatted);

    if (formattedDate.length === 4) {
      setErrors((prevErrors) => ({ ...prevErrors, expirationDate: '' }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        expirationDate: 'Invalid expiration date',
      }));
    }
  };

  const validateCVV = (text) => {
    let formattedCVV = text.replace(/\D/g, '');

    if (formattedCVV.length > 3) {
      formattedCVV = formattedCVV.slice(0, 3);
    }

    setCVV(formattedCVV);

    if (formattedCVV.length === 3) {
      setErrors((prevErrors) => ({ ...prevErrors, cvv: '' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, cvv: 'Invalid CVV' }));
    }
  };

  const validateCardHolderName = (text) => {
    const formattedName = text.replace(/[^A-Za-z ]/g, '');
    setCardHolderName(formattedName);

    if (formattedName === text) {
      setErrors((prevErrors) => ({ ...prevErrors, cardHolderName: '' }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardHolderName: 'Invalid name',
      }));
    }
  };

  const isSubmitDisabled = Object.values(errors).some((error) => error !== '');

  const processPayment = () => {
    // payment process
    alert('Payment successful!');
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.centeredContent}>
          <Text style={styles.paymentHeader}>Pay using Credit or Debit card</Text>
          <View style={styles.cardInput}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Card Number</Text>
              <TextInput
                style={styles.inputField}
                placeholder="###-###-###-###"
                value={creditCardNumber}
                onChangeText={validateCreditCard}
              />
            </View>
            <Text style={styles.errorText}>{errors.creditCardNumber}</Text>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Expiry Date</Text>
              <TextInput
                style={styles.inputField}
                placeholder="MM/YY"
                value={expirationDate}
                onChangeText={validateExpirationDate}
              />
            </View>
            <Text style={styles.errorText}>{errors.expirationDate}</Text>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>CVV Number</Text>
              <TextInput
                style={styles.inputField}
                placeholder="xxx"
                value={cvv}
                onChangeText={validateCVV}
              />
            </View>
            <Text style={styles.errorText}>{errors.cvv}</Text>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Card Holder Name</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your Name"
                value={cardHolderName}
                onChangeText={validateCardHolderName}
              />
            </View>
            <Text style={styles.errorText}>{errors.cardHolderName}</Text>
          </View>

          <Button
            title="Submit"
            onPress={processPayment}
            color="blue"
            style={styles.submitButton}
            disabled={isSubmitDisabled}
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 16,
    borderRadius: 10,
  },
  paymentHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  cardInput: {
    marginBottom: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    width: '30%',
    marginRight: 10,
    fontSize: 16,
    color: 'white',
  },
  icon: {
    width: '10%',
    marginRight: 10,
  },
  inputField: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
  },
  submitButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  },
});

export default Payment;
