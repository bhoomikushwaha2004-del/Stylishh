import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Text,
  View,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import WishlistItems from '../components/WishlistItems';

import { addItems } from '../redux/slice';
import { removeFromWishlist } from '../redux/slice';

import useAppTheme from '../theme/useAppTheme';

const WishList = () => {

  const theme = useAppTheme();

  const selector = useSelector(state => state.cart.items);
  const wishlist = useSelector(state => state.cart.wishlist);
  const products = useSelector(state => state.products.products);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const addToCart = item => {
    dispatch(addItems(item));

    navigation.navigate('bottomTab', {
      screen: 'home',
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
      }}>
      
      <FlatList
        data={wishlist}
        keyExtractor={(item, index) =>
          item?.id?.toString() || index.toString()
        }
        renderItem={({ item }) => {

          const fullProduct = products.find(
            p => p.id === item.id,
          );

          if (!fullProduct) return null;

          return (
            <WishlistItems
              item={fullProduct}
              addToCart={addToCart}
              dispatch={dispatch}
              wishlist={wishlist}
              navigation={navigation}
              selector={selector}
            />
          );
        }}
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>

            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                alignSelf: 'center',
                color: theme.text,
              }}>
              Empty WishList 🛒
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default WishList;