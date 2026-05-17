import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';

import {
  SPACING,
  FONT_SIZE,
  RADIUS,
} from '../styles';

import useAppTheme from '../theme/useAppTheme';

const ItemList = ({ item }) => {

  const theme = useAppTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.card,
        },
      ]}>

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

          <Text
            style={[
              styles.rating,
              {
                color: theme.secondaryText,
              },
            ]}>
            ⭐ {item.rating?.rate}
          </Text>

          <View
            style={[
              styles.priceBox,
              {
                borderColor: theme.border,
              },
            ]}>

            <Text
              style={[
                styles.price,
                {
                  color: theme.text,
                },
              ]}>
              ₹{item.price.toFixed(2)}
            </Text>
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
  );
};

export default ItemList;

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