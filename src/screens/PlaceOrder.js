import {
  FlatList,
  View,
  Text,
} from 'react-native';

import React, { useState } from 'react';

import Coupon from 'react-native-vector-icons/FontAwesome5';

import { useDispatch, useSelector } from 'react-redux';

import { removeCart, handleQuantity } from '../redux/slice';

import CartItems from '../components/CartItems';
import OrderDetails from '../components/OrderDetails';
import PaymentFooter from '../components/PaymentFooter';
import SuccessModal from '../components/SuccessModal';

import useAppTheme from '../theme/useAppTheme';

const PlaceOrder = () => {

  const theme = useAppTheme();

  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items,
  );

  const products = useSelector(
    state => state.products.products,
  );

  const manageQuantity = (id, q) => {

    let quantity = q <= 1 ? 1 : q;

    dispatch(
      handleQuantity({
        id,
        quantity,
      }),
    );
  };

  const finalCart = cartItems.map(cartItem => {

    const product = products.find(
      p => p.id === cartItem.id,
    );

    return {
      ...product,
      quantity: cartItem.quantity,
    };
  });

  const totalPrice = finalCart.reduce(
    (sum, item) => {

      const qty = item.quantity || 1;

      return sum + item.price * qty;
    },
    0,
  );

  if (cartItems.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.background,
        }}>
        
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.text,
          }}>
          No items in Cart 🛒
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
      }}>

      <FlatList
        data={finalCart}
        keyExtractor={(item, index) =>
          index.toString()
        }
        renderItem={({ item }) => (
          <CartItems
            item={item}
            manageQuantity={manageQuantity}
            dispatch={dispatch}
            removeCart={removeCart}
          />
        )}
        ListFooterComponent={
          <OrderDetails
            totalPrice={totalPrice}
            coupon={<Coupon />}
          />
        }
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      />

      {/* Payment Footer */}
      <PaymentFooter
        totalPrice={totalPrice}
        onPress={() => setShowModal(true)}
      />

      {/* Modal */}
      <SuccessModal
        visible={showModal}
        onClose={() => setShowModal(false)}
      />
    </View>
  );
};

export default PlaceOrder;