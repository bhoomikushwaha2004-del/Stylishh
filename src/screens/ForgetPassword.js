import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';

import MailIcon from 'react-native-vector-icons/Ionicons';

import {
  COLORS,
  SPACING,
  FONT_SIZE,
  RADIUS,
} from '../styles';

import useAppTheme from '../theme/useAppTheme';

const ForgetPassword = () => {

  const theme = useAppTheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor:
            theme.background,
        },
      ]}>

      {/* Headline Txt */}
      <View
        style={styles.headlineCont}>

        <Text
          style={[
            styles.headlineTxt,
            {
              color: theme.text,
            },
          ]}>
          Forgot password?
        </Text>
      </View>

      {/* Input */}
      <View style={styles.inputCont}>

        <MailIcon
          name="mail"
          size={24}
          color={theme.text}
          style={styles.mail}
        />

        <TextInput
          placeholder="Enter your email address"
          placeholderTextColor={
            theme.secondaryText
          }
          style={[
            styles.input,
            {
              borderColor:
                theme.inputBorder,
              backgroundColor:
                theme.inputBg,
              color: theme.text,
            },
          ]}
        />
      </View>

      {/* Info Text */}
      <View style={styles.txtCont}>

        <Text
          style={{
            color: '#FF4B26',
          }}>
          *

          <Text
            style={[
              styles.txt,
              {
                color:
                  theme.secondaryText,
              },
            ]}>
            {' '}
            We will send you a
            message to set or reset
            your new password
          </Text>
        </Text>
      </View>

      {/* Button */}
      <View style={styles.btnCont}>

        <TouchableOpacity
          style={[
            styles.btn,
            {
              backgroundColor:
                theme.primary,
            },
          ]}>

          <Text style={styles.btnTxt}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  headlineCont: {
    paddingTop: SPACING.xxxl,
    paddingLeft: 30,
    paddingRight: 142,
  },

  headlineTxt: {
    fontSize: 35,
    fontWeight: 'bold',
  },

  inputCont: {
    paddingTop: 32,
    paddingHorizontal: 30,
  },

  input: {
    borderWidth: 1,
    paddingLeft: 44,
    paddingVertical: 20,
    borderRadius: RADIUS.md,
  },

  mail: {
    position: 'absolute',
    paddingLeft: 42,
    paddingTop: 50,
    zIndex: 1,
  },

  txtCont: {
    paddingTop: 25,
    paddingLeft: 30,
    paddingRight: 63,
  },

  txt: {
    fontSize: FONT_SIZE.s,
  },

  btnCont: {
    paddingHorizontal: 30,
    paddingTop: 25,
  },

  btn: {
    borderRadius: RADIUS.sm,
  },

  btnTxt: {
    color: COLORS.white,
    paddingVertical: 15,
    paddingHorizontal: 120,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.xxl,
  },
});