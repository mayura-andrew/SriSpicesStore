import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Button, ScrollView } from 'react-native';

const spiceCategories = [
  { id: '1', name: 'Herbs', image: require('/home/andrew/reactNative/srispicesstore/assets/images/cinnoman.jpeg') },
  { id: '2', name: 'Spices', image: require('/home/andrew/reactNative/srispicesstore/assets/images/garlic.jpg') },
  { id: '3', name: 'Seasonings', image: require('/home/andrew/reactNative/srispicesstore/assets/images/pepper.jpeg') },
  { id: '4', name: 'Extracts', image: require('/home/andrew/reactNative/srispicesstore/assets/images/pepper.jpeg') },
  { id: '5', name: 'Salts', image: require('/home/andrew/reactNative/srispicesstore/assets/images/pepper.jpeg') },
  { id: '6', name: 'Peppers', image: require('/home/andrew/reactNative/srispicesstore/assets/images/pepper.jpeg') },
  { id: '7', name: 'Chiles', image: require('/home/andrew/reactNative/srispicesstore/assets/images/pepper.jpeg') },];

const HomeScreen = ({ navigation }) => {

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate('CategoryDetail', { category: item })}
    >
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
      <Button title="Buy" onPress={() => handleBuy(item)} />
    </TouchableOpacity>
  );

  const handleBuy = (category) => {
  
    alert('Buy ' + category.name);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Spice Categories</Text>
      <FlatList
        data={spiceCategories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoryItem: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  categoryImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
  },
  categoryName: {
    flex: 1, 
    fontSize: 16,
  },
});
