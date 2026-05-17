import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  FONT_SIZE,
  SPACING,
} from '../styles';

import useAppTheme from '../theme/useAppTheme';

const OrderDetails = ({
  totalPrice,
  coupon,
}) => {

  const theme = useAppTheme();

  return (
    <SafeAreaView
      style={[
        styles.detailsCard,
        {
          backgroundColor: theme.card,
        },
      ]}>

      {/* Coupon */}
      <View style={styles.rowBetween}>

        <Text>{coupon}</Text>

        <Text
          style={[
            styles.bold,
            {
              color: theme.text,
            },
          ]}>
          Apply Coupons
        </Text>

        <Text
          style={[
            styles.red,
            {
              color: theme.primary,
            },
          ]}>
          Select
        </Text>
      </View>

      <View
        style={[
          styles.divider,
          {
            backgroundColor: theme.border,
          },
        ]}
      />

      {/* Payment Details */}
      <Text
        style={[
          styles.heading,
          {
            color: theme.text,
          },
        ]}>
        Order Payment Details
      </Text>

      <View style={styles.rowBetween}>

        <Text
          style={{
            color: theme.secondaryText,
          }}>
          Order Amounts
        </Text>

        <Text
          style={[
            styles.bold,
            {
              color: theme.text,
            },
          ]}>
          ₹{totalPrice.toFixed(2)}
        </Text>
      </View>

      <View style={styles.rowBetween}>

        <Text
          style={{
            color: theme.secondaryText,
          }}>
          Convenience
        </Text>

        <Text
          style={[
            styles.red,
            {
              color: theme.primary,
            },
          ]}>
          Apply Coupon
        </Text>
      </View>

      <View style={styles.rowBetween}>

        <Text
          style={{
            color: theme.secondaryText,
          }}>
          Delivery Fee
        </Text>

        <Text
          style={[
            styles.red,
            {
              color: theme.primary,
            },
          ]}>
          Free
        </Text>
      </View>

      <View
        style={[
          styles.divider,
          {
            backgroundColor: theme.border,
          },
        ]}
      />

      {/* Total */}
      <View style={styles.rowBetween}>

        <Text
          style={[
            styles.bold,
            {
              color: theme.text,
            },
          ]}>
          Order Total
        </Text>

        <Text
          style={[
            styles.bold,
            {
              color: theme.text,
            },
          ]}>
          ₹{totalPrice.toFixed(2)}
        </Text>
      </View>

      <Text
        style={[
          styles.redSmall,
          {
            color: theme.primary,
          },
        ]}>
        EMI Available
      </Text>
    </SafeAreaView>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  detailsCard: {
    padding: SPACING.m,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },

  heading: {
    fontSize: FONT_SIZE.l,
    fontWeight: 'bold',
    paddingVertical: 10,
  },

  bold: {
    fontWeight: 'bold',
  },

  red: {
    fontWeight: 'bold',
  },

  redSmall: {
    fontSize: FONT_SIZE.s,
    paddingTop: 4,
  },

  divider: {
    height: 1,
    marginVertical: SPACING.sm,
  },
});