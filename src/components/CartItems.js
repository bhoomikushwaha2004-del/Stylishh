import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';

import DeleteIcon from 'react-native-vector-icons/MaterialIcons';

import {
  SPACING,
  FONT_SIZE,
  RADIUS,
} from '../styles';

import useAppTheme from '../theme/useAppTheme';

const CartItems = ({
  item,
  manageQuantity,
  dispatch,
  removeCart,
}) => {

  const theme = useAppTheme();

  return (
    <>
      <View
        style={[
          styles.contentCont,
          {
            backgroundColor: theme.card,
          },
        ]}>

        <View style={styles.row}>

          <Image
            source={{ uri: item.image }}
            style={styles.img}
          />

          <View style={styles.infoCont}>

            <Text
              style={[
                styles.title,
                {
                  color: theme.text,
                },
              ]}
              numberOfLines={1}>
              {item.title}
            </Text>

            <Text
              style={[
                styles.desc,
                {
                  color: theme.secondaryText,
                },
              ]}
              numberOfLines={1}>
              {item.description}
            </Text>

            <View
              style={[
                styles.qty,
                {
                  backgroundColor:
                    theme.inputBg,
                },
              ]}>

              <TouchableOpacity
                onPress={() =>
                  manageQuantity(
                    item.id,
                    (item.quantity || 1) - 1,
                  )
                }
                style={styles.plsbtn}>

                <Text
                  style={{
                    color: theme.text,
                  }}>
                  -
                </Text>
              </TouchableOpacity>

              <Text
                style={[
                  styles.qtyNo,
                  {
                    color: theme.text,
                  },
                ]}>
                {item.quantity || 1}
              </Text>

              <TouchableOpacity
                onPress={() =>
                  manageQuantity(
                    item.id,
                    (item.quantity || 1) + 1,
                  )
                }
                style={styles.plsbtn}>

                <Text
                  style={{
                    color: theme.text,
                  }}>
                  +
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.priceCont}>

              <Text
                style={{
                  color: theme.text,
                }}>
                ₹{' '}
                {(
                  item.price *
                  (item.quantity || 1)
                ).toFixed(2)}
              </Text>

              <TouchableOpacity
                onPress={() =>
                  dispatch(removeCart(item.id))
                }>

                <DeleteIcon
                  name="delete"
                  size={24}
                  color={'red'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  contentCont: {
    paddingTop: 37,
    paddingHorizontal: 17,
    elevation: 20,
  },

  row: {
    flexDirection: 'row',
  },

  img: {
    height: 153,
    width: 123,
    borderRadius: RADIUS.sm,
    resizeMode: 'contain',
  },

  infoCont: {
    paddingLeft: 21,
    paddingTop: 7,
    paddingBottom: 16,
    paddingRight: 40,
  },

  title: {
    fontSize: FONT_SIZE.l,
    fontWeight: 'bold',
    width: 200,
  },

  desc: {
    paddingTop: 10,
    fontSize: FONT_SIZE.m,
    width: 200,
  },

  qty: {
    top: 8,
    flexDirection: 'row',
    width: 60,
    borderRadius: RADIUS.sm,
  },

  plsbtn: {
    paddingVertical: 5,
    paddingHorizontal: 8,
  },

  qtyNo: {
    paddingTop: 5,
  },

  priceCont: {
    top: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});