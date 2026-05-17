import React from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Cross from 'react-native-vector-icons/Entypo';

const SuccessModal = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>

          <TouchableOpacity
            onPress={onClose}
            style={styles.close}
          >
            <Cross
              name="cross"
              size={22}
              color={'#000'}
            />
          </TouchableOpacity>

          <View style={styles.imageWrapper}>
            <Image
              source={require('../assets/circle.jpg')}
              style={styles.image}
              resizeMode="contain"
            />

            <Image
              source={require('../assets/tick.png')}
              style={styles.tick}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.title}>
            Payment Successful 
          </Text>

          <Text style={styles.subtitle}>
            Your order has been placed successfully.
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    width: 320,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 28,
    paddingHorizontal: 24,
    alignItems: 'center',
    elevation: 20,
  },

  close: {
    position: 'absolute',
    top: 14,
    right: 14,
    zIndex: 10,
    padding: 4,
  },

  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  image: {
    height: 110,
    width: 110,
  },

  tick: {
    position: 'absolute',
    height: 45,
    width: 45,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 10,
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
});