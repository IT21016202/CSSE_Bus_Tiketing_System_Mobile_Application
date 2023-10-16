// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import BusList from './BusList';
import BusDetails from './BusDetails';
import BusBook from './BusBook';
import AddPayment from './AddPayment';
import Gateway from './Gateway';
import MyBooking from './MyBooking';
import Payment from './Payment';
import QRCodeScreen from './QRCodeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BusList" component={BusList} />
        <Stack.Screen name="BusDetails" component={BusDetails} />
        <Stack.Screen name="BusBook" component={BusBook} />
        <Stack.Screen name="AddPayment" component={AddPayment} />
        <Stack.Screen name="Gateway" component={Gateway} />
        <Stack.Screen name="MyBooking" component={MyBooking} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="QRCodeScreen" component={QRCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
