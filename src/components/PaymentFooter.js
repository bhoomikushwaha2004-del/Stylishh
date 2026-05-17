import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  FONT_SIZE,
  RADIUS,
  SPACING,
} from '../styles';

import useAppTheme from '../theme/useAppTheme';

const PaymentFooter = ({
  totalPrice,
  onPress,
}) => {

  const theme = useAppTheme();

  return (
    <View
      style={[
        styles.footer,
        {
          backgroundColor: theme.card,
          borderColor: theme.border,
        },
      ]}>

      <View style={styles.footerRow}>

        <View>

          <Text
            style={[
              styles.footerPrice,
              {
                color: theme.text,
              },
            ]}>
            ₹ {totalPrice.toFixed(2)}
          </Text>

          <Text
            style={[
              styles.viewDetails,
              {
                color: theme.primary,
              },
            ]}>
            View Details
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.payBtn,
            {
              backgroundColor: theme.primary,
            },
          ]}
          onPress={onPress}>

          <Text style={styles.payText}>
            Proceed to Payment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentFooter;

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: SPACING.m,
    borderTopWidth: 1,
    elevation: 20,
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  footerPrice: {
    fontSize: FONT_SIZE.l,
    fontWeight: 'bold',
  },

  viewDetails: {
    fontSize: FONT_SIZE.s,
    marginTop: 2,
  },

  payBtn: {
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: RADIUS.md,
    elevation: 4,
  },

  payText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: FONT_SIZE.m,
  },
});