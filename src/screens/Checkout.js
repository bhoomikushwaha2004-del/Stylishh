import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useSelector } from 'react-redux';

import NoItem from '../components/NoItem';
import ItemList from '../components/ItemList';

import {
  FONT_SIZE,
  RADIUS,
  SPACING,
} from '../styles';

import useAppTheme from '../theme/useAppTheme';

const Checkout = () => {

  const navigation = useNavigation();

  const selector = useSelector(
    state => state.cart.items,
  );

  const products = useSelector(
    state => state.products.products,
  );

  const theme = useAppTheme();

  const placeordnvg = () => {

    navigation.navigate('bag', {
      selector,
    });
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}>

      {/* FlatList */}
      {selector.length === 0 ? (
        <NoItem />
      ) : (
        <>
          {/* Shopping List Txt */}
          <View style={styles.shoptxtCont}>

            <Text
              style={[
                styles.shopTxt,
                {
                  color: theme.text,
                },
              ]}>
              Shopping List
            </Text>
          </View>

          <FlatList
            data={selector}
            keyExtractor={(item, index) =>
              index.toString()
            }
            renderItem={({ item }) => {

              const fullProduct = products.find(
                p => p.id === item.id,
              );

              if (!fullProduct) return null;

              return (
                <ItemList
                  item={{
                    ...fullProduct,
                    quantity: item.quantity,
                  }}
                />
              );
            }}
            contentContainerStyle={{
              paddingBottom: 100,
            }}
          />
        </>
      )}

      {/* Btn */}
      {selector.length > 0 && (
        <View
          style={[
            styles.bottomBtnContainer,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}>

          <TouchableOpacity
            onPress={placeordnvg}
            style={[
              styles.bagstyle,
              {
                backgroundColor: theme.primary,
              },
            ]}>

            <Text style={styles.bagtxt}>
              View Order Details
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  shoptxtCont: {
    paddingTop: SPACING.xl,
    paddingLeft: 22,
  },

  shopTxt: {
    fontSize: FONT_SIZE.m,
    fontWeight: 'bold',
  },

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
    justifyContent: 'space-between',
  },

  title: {
    fontSize: FONT_SIZE.m,
    fontWeight: 'bold',
  },

  rating: {
    fontSize: FONT_SIZE.s,
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

  bottomBtnContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: SPACING.m,
    borderTopWidth: 1,
  },

  bagstyle: {
    borderRadius: RADIUS.sm,
    alignItems: 'center',
  },

  bagtxt: {
    color: '#FFFFFF',
    fontSize: FONT_SIZE.l,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
});