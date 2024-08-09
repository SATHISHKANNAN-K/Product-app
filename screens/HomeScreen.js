import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const HomeScreen = () => {
  const [products, setProducts] = useState([
    { id: '1', name: 'Product 1', availableQuantity: 10, selectedQuantity: 0, price: 10, imageUrl: 'https://m.media-amazon.com/images/I/71YBmiSj-cL.jpg' },
    { id: '2', name: 'Product 2', availableQuantity: 5, selectedQuantity: 0, price: 15, imageUrl: 'https://m.media-amazon.com/images/I/51pGxfs4w1L.jpg' },
    { id: '3', name: 'Product 3', availableQuantity: 20, selectedQuantity: 0, price: 20, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbve0IziDik6puWgwqW0A71Rbev5xOUaciw&s' },
  ]);

  const handleIncrease = (id) => {
    setProducts(products.map(product =>
      product.id === id && product.availableQuantity > 0
        ? { ...product, availableQuantity: product.availableQuantity - 1, selectedQuantity: product.selectedQuantity + 1 }
        : product
    ));
  };

  const handleDecrease = (id) => {
    setProducts(products.map(product =>
      product.id === id && product.selectedQuantity > 0
        ? { ...product, availableQuantity: product.availableQuantity + 1, selectedQuantity: product.selectedQuantity - 1 }
        : product
    ));
  };

  const handleCheckout = () => {
    alert('Checked out successfully!');
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>Available Quantity: {item.availableQuantity}</Text>
        <Text style={styles.text}>Price: ${item.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Button title="-" onPress={() => handleDecrease(item.id)} />
        <TextInput style={styles.input} value={String(item.selectedQuantity)} editable={false} />
        <Button title="+" onPress={() => handleIncrease(item.id)} />
      </View>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
    color: 'black',
  },
  quantityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 8,
    textAlign: 'center',
    color: 'black',
  },
});

export default HomeScreen;
