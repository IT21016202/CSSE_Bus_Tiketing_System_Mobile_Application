import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeScreen = ({ route, navigation }) => {
  const { qrCodeData } = route.params;

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.container}
    >
      <View style={styles.qrContainer}>
        <Text style={styles.pageTitle}>QR Ticket</Text>
        <View style={styles.qrCodeContainer}>
          <QRCode value={qrCodeData} size={200} />
        </View>
        <Button
          title="Pay for Ticket"
          onPress={() => navigation.navigate('Payment', { totalPrice: 100 })}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrContainer: {
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  qrCodeContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default QRCodeScreen;
