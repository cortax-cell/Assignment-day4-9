import React, { useState, useContext } from 'react';
import styles from './style';
import products from './data';
import { FavoriteContext } from './contextapi';
import { Image, Text, View, TouchableOpacity, FlatList } from 'react-native';

const GetProductPage = ({ navigation }) => {
  const FavoriteItem = useContext(FavoriteContext);

  const RemoveFromFav = (id) => {
    alert(`${id} item removed from cart`);
    console.log('Removing', id);
    FavoriteItem.removeFromFavoriteItem(id);
  };

  const AddToCart = (id) => {
    alert(`${id} item added to cart`);
    console.log('Adding to cart', id);
    FavoriteItem.addFavoriteItem(id);
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <View>
        <Image
          style={{ height: 360, width: 260 }}
          source={{ uri: item.image }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={{ fontSize: 14, color: '#666' }}>
          Rating: {item.rating.rate} ({item.rating.count})
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cartbutton}
            onPress={() => AddToCart(item.id)}
          >
            <Image
              source={require('../assets/cart.png')}
              style={{ height: 24, width: 24 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => RemoveFromFav(item.id)}>
            <Text style={{ color: '#FF6347', fontSize: 28 }}>❌</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.productList}
    />
  );
};

export default GetProductPage;
