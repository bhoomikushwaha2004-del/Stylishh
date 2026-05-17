import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';

import Cross from 'react-native-vector-icons/Entypo';

import {
  SPACING,
  FONT_SIZE,
  RADIUS,
} from '../styles';

import { removeFromWishlist } from '../redux/slice';

import useAppTheme from '../theme/useAppTheme';

const WishlistItems = ({
  item,
  addToCart,
  dispatch,
  wishlist,
  navigation,
  selector,
}) => {

  const theme = useAppTheme();

  return (
    <>
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.card,
          },
        ]}>

        {/* Cross Btn */}
        <View style={styles.crossView}>
          <TouchableOpacity
            onPress={() =>
              dispatch(removeFromWishlist(item.id))
            }>

            <Cross
              name="cross"
              size={20}
              color={theme.text}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>

          <Image
            source={{ uri: item.image }}
            style={styles.img}
          />

          <View style={styles.info}>

            <Text
              numberOfLines={1}
              style={[
                styles.title,
                {
                  color: theme.text,
                },
              ]}>
              {item.title}
            </Text>

            <View>
              <Text
                style={[
                  styles.priceTxt,
                  {
                    color: theme.text,
                  },
                ]}>
                ₹{item.price.toFixed(2)}
              </Text>
            </View>

            {/* Add Btn */}
            <View style={styles.addcartView}>

              {selector.find(
                wishlistdata =>
                  wishlistdata.id === item.id,
              ) ? (
                <TouchableOpacity
                  style={styles.addcartBtn}
                  onPress={() =>
                    navigation.navigate(
                      'bottomTab',
                      {
                        screen: 'checkout',
                      },
                    )
                  }>

                  <Text style={styles.addcartTxt}>
                    Go to Cart
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.addcartBtn}
                  onPress={() => addToCart(item)}>

                  <Text style={styles.addcartTxt}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={styles.buycartBtn}>

                <Text style={styles.addcartTxt}>
                  Buy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Divider */}
        <View
          style={[
            styles.divider,
            {
              backgroundColor: theme.border,
            },
          ]}
        />

        {/* Total */}
        <View style={styles.totalRow}>

          <Text
            style={[
              styles.totalText,
              {
                color: theme.secondaryText,
              },
            ]}>
            Total Order (1):
          </Text>

          <Text
            style={[
              styles.totalPrice,
              {
                color: theme.text,
              },
            ]}>
            ₹{item.price}
          </Text>
        </View>
      </View>
    </>
  );
};

export default WishlistItems;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 22,
    marginTop: 12,
    borderRadius: RADIUS.md,
    padding: SPACING.sm,
    elevation: 2,
  },

  row: {
    flexDirection: 'row',
  },

  img: {
    width: 100,
    height: 100,
    borderRadius: RADIUS.sm,
  },

  info: {
    flex: 1,
    paddingLeft: SPACING.sm,
  },

  title: {
    fontSize: FONT_SIZE.m,
    fontWeight: 'bold',
  },

  priceBox: {
    borderWidth: 1,
    borderRadius: RADIUS.sm,
    alignSelf: 'flex-start',
  },

  price: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 6,
    fontSize: FONT_SIZE.m,
    fontWeight: 'bold',
  },

  divider: {
    height: 1,
    marginVertical: SPACING.sm,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  totalText: {
    fontSize: 13,
  },

  totalPrice: {
    fontSize: FONT_SIZE.m,
    fontWeight: 'bold',
  },

  priceTxt: {
    fontWeight: 'bold',
    paddingTop: 10,
  },

  addcartView: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  addcartBtn: {
    borderWidth: 0.5,
    width: 90,
    backgroundColor: '#0000FF',
    borderRadius: 5,
    borderColor: '#0000FF',
  },

  buycartBtn: {
    borderWidth: 0.5,
    width: 90,
    backgroundColor: '#00D100',
    borderRadius: 5,
    borderColor: '#00D100',
  },

  addcartTxt: {
    color: 'white',
    padding: 5,
  },

  crossView: {
    alignItems: 'flex-end',
  },
});