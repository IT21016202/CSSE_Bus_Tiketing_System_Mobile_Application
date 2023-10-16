import React, { useState } from 'react';
import { View, FlatList, TextInput, StyleSheet, ImageBackground } from 'react-native';
import BusDetails from './BusDetails';
import busData from './data';

const BusList = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by route or number"
          value={searchText}
          onChangeText={handleSearch}
        />
        <FlatList
          data={searchText ? busData.filter(
            (bus) =>
              bus.busRoute.toLowerCase().includes(searchText.toLowerCase()) ||
              bus.busNumber.toLowerCase().includes(searchText.toLowerCase())
          ) : busData}
          keyExtractor={(item) => item.busNumber}
          numColumns={2}
          renderItem={({ item }) => <BusDetails bus={item} />}
          contentContainerStyle={styles.flatList}
        />
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
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
  },
  searchInput: {
    backgroundColor: 'white',
    padding: 8,
    margin: 16,
    borderRadius: 10,
  },
  flatList: {
    padding: 16,
  },
});

export default BusList;
