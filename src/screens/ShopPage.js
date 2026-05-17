import {
  useRoute,
} from '@react-navigation/native';

import React from 'react';

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CartIcon from 'react-native-vector-icons/Ionicons';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  addItems,
  removeCart,
} from '../redux/slice';

import {
  FONT_SIZE,
  RADIUS,
  SPACING,
} from '../styles';

import useAppTheme from '../theme/useAppTheme';

const ShopPage = () => {

  const dispatch = useDispatch();

  const theme = useAppTheme();

  const route = useRoute();

  const item = route.params?.item;

  const selector = useSelector(
    state => state.cart.items,
  );

  const isAdded = selector.find(
    cartItem => cartItem.id === item.id,
  );

  const addToCart = item => {

    dispatch(addItems(item));
  };

  const removeFromCart = id => {

    dispatch(removeCart(id));
  };

  if (!item) {

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:
            theme.background,
        }}>

        <Text
          style={{
            color: theme.text,
          }}>
          No item found
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor:
            theme.background,
        },
      ]}>

      {/* Image */}
      <View style={styles.imgCont}>

        <Image
          source={{ uri: item.image }}
          style={styles.img}
        />
      </View>

      {/* Title */}
      <View style={styles.titleCont}>

        <Text
          style={[
            styles.title,
            {
              color: theme.text,
            },
          ]}>
          {item.title}
        </Text>
      </View>

      {/* Description Container */}
      <View style={styles.detailsCont}>

        {/* Price */}
        <View style={styles.priceCont}>

          <Text
            style={[
              styles.price,
              {
                color: theme.text,
              },
            ]}>
            ₹{item.price}
          </Text>
        </View>

        {/* Product Details */}
        <View style={styles.priceCont}>

          <Text
            style={[
              styles.proddtl,
              {
                color: theme.text,
              },
            ]}>
            Product Details
          </Text>
        </View>

        {/* Description */}
        <View
          style={
            styles.descriptionCont
          }>

          <Text
            style={[
              styles.description,
              {
                color:
                  theme.secondaryText,
              },
            ]}>
            {item.description}
          </Text>
        </View>
      </View>

      {/* Btn */}
      <View style={styles.btnCont}>

        {isAdded ? (

          <TouchableOpacity
            style={
              styles.removecartbtn
            }
            onPress={() =>
              removeFromCart(item.id)
            }>

            <CartIcon
              name="cart-outline"
              size={24}
              color={'white'}
              style={
                styles.addtocartIcon
              }
            />

            <Text
              style={
                styles.addtoCartTxt
              }>
              Remove from cart
            </Text>
          </TouchableOpacity>

        ) : (

          <TouchableOpacity
            style={[
              styles.addcartbtn,
              {
                backgroundColor:
                  theme.secondary,
              },
            ]}
            onPress={() =>
              addToCart(item)
            }>

            <CartIcon
              name="cart-outline"
              size={24}
              color={'white'}
              style={
                styles.addtocartIcon
              }
            />

            <Text
              style={
                styles.addtoCartTxt
              }>
              Add to Cart
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ShopPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imgCont: {
    padding: SPACING.m,
  },

  img: {
    height: 250,
    width: 339,
    resizeMode: 'contain',
  },

  titleCont: {
    paddingTop: SPACING.m,
    paddingHorizontal: SPACING.m,
  },

  title: {
    fontSize: FONT_SIZE.xxl,
    fontWeight: 'bold',
  },

  detailsCont: {
    paddingTop: SPACING.s,
    paddingHorizontal: SPACING.m,
  },

  priceCont: {
    paddingTop: SPACING.s,
  },

  price: {
    fontSize: FONT_SIZE.m,
    fontWeight: 'bold',
  },

  proddtl: {
    fontSize: FONT_SIZE.m,
    fontWeight: 'bold',
  },

  descriptionCont: {
    paddingTop: SPACING.s,
  },

  description: {
    fontSize: FONT_SIZE.s,
  },

  btnCont: {
    paddingTop: SPACING.s,
    paddingLeft: SPACING.m,
    flexDirection: 'row',
  },

  addedbtn: {},

  gotoCartimg: {
    height: 40,
    width: 136,
  },

  addcartbtn: {
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: RADIUS.sm,
    borderBottomRightRadius:
      RADIUS.sm,
    borderBottomLeftRadius: 20,
  },

  removecartbtn: {
    flexDirection: 'row',
    backgroundColor: 'red',
    borderTopLeftRadius: 20,
    borderTopRightRadius: RADIUS.sm,
    borderBottomRightRadius:
      RADIUS.sm,
    borderBottomLeftRadius: 20,
  },

  addtoCartTxt: {
    paddingVertical: SPACING.s,
    paddingLeft: SPACING.m,
    paddingRight: SPACING.s,
    color: '#FFFFFF',
  },

  addtocartIcon: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.sm,
  },
});