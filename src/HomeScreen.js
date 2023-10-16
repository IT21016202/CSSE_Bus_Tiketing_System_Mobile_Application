import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.container}
    >
      <View style={styles.bannerContainer}>
        <Text style={styles.title}>Welcome to Bus Service App</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Balance Amount:</Text>
        <View style={styles.balanceAmountContainer}>
          <Text style={styles.balanceAmount}>$50.00</Text>
        </View>
      </View>
      <View style={styles.middleContent}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button
              title="Reload Account"
              onPress={() => {
                // reload account
              }}
              style={styles.button}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title="View Bus List"
              onPress={() => navigation.navigate('BusList')}
              style={styles.button}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title="View QR Code"
              onPress={() => { navigation.navigate('QR Code');
                // qr code
              }}
              style={styles.button}
            />
          </View>
        </View>
        <Text style={styles.frequentUsage}>Frequent Usage:</Text>
        <Text style={styles.timeTableUpdate}>Last Booked Bus: Bus A</Text>
        <Text style={styles.timeTableUpdate}>Last Booked Bus: Bus B</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  middleContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },
  balanceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  balanceLabel: {
    fontSize: 28,
    color: 'black',
  },
  balanceAmountContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  balanceAmount: {
    fontSize: 28,
    color: 'black',
  },
  frequentUsage: {
    fontSize: 24,
    marginTop: 16,
    color: 'white',
  },
  timeTableUpdate: {
    fontSize: 20,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 20,
  },
  buttonWrapper: {
    width: 100,
    margin: 2,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default HomeScreen;
