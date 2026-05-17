import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {
  useState,
} from 'react';

import UserIcon from 'react-native-vector-icons/FontAwesome6';
import Lock from 'react-native-vector-icons/Fontisto';
import EyeIcon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import {
  SPACING,
  FONT_SIZE,
  RADIUS,
  COLORS,
} from '../styles';

import { saveUser } from '../services/authStorage';

import useAppTheme from '../theme/useAppTheme';

const SignUp = () => {

  const navigation = useNavigation();

  const theme = useAppTheme();

  const [username, setUsername] =
    useState('');

  const [password, setPassword] =
    useState('');

  const lgnnvg = () => {

    navigation.navigate('login');
  };

  const register = async () => {

    if (!username || !password) {

      Alert.alert('Enter Details');

      return;
    }

    const user = {
      username,
      password,
    };

    await saveUser(user);

    Alert.alert(
      'Account Created Successful',
    );

    navigation.replace('login');

    console.log(user, 'sign up user');
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            theme.background,
        },
      ]}>

      {/* Headline Txt */}
      <View style={styles.headlineCont}>

        <Text
          style={[
            styles.headlineTxt,
            {
              color: theme.text,
            },
          ]}>
          Create an account
        </Text>
      </View>

      {/* Username Input */}
      <View
        style={styles.firstinputCont}>

        <UserIcon
          name="user-large"
          size={20}
          color={theme.text}
          style={styles.userCont}
        />

        <TextInput
          placeholder="Username or Email"
          style={[
            styles.firstinput,
            {
              borderColor:
                theme.inputBorder,
              backgroundColor:
                theme.inputBg,
              color: theme.text,
            },
          ]}
          onChangeText={setUsername}
          placeholderTextColor={
            theme.secondaryText
          }
        />
      </View>

      {/* Password Input */}
      <View
        style={styles.scndinputCont}>

        <Lock
          name="locked"
          size={20}
          color={theme.text}
          style={styles.lockCont}
        />

        <TextInput
          placeholder="Password"
          style={[
            styles.scndinput,
            {
              borderColor:
                theme.inputBorder,
              backgroundColor:
                theme.inputBg,
              color: theme.text,
            },
          ]}
          onChangeText={setPassword}
          placeholderTextColor={
            theme.secondaryText
          }
          secureTextEntry={true}
        />

        <EyeIcon
          name="eye"
          size={20}
          color={theme.text}
          style={styles.eyeCont}
        />
      </View>

      {/* Confirm Password */}
      <View
        style={styles.scndinputCont}>

        <Lock
          name="locked"
          size={20}
          color={theme.text}
          style={styles.lockCont}
        />

        <TextInput
          placeholder="Confirm Password"
          style={[
            styles.scndinput,
            {
              borderColor:
                theme.inputBorder,
              backgroundColor:
                theme.inputBg,
              color: theme.text,
            },
          ]}
          onChangeText={setPassword}
          placeholderTextColor={
            theme.secondaryText
          }
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.eyeCont}>

          <EyeIcon
            name="eye"
            size={20}
            color={theme.text}
          />
        </TouchableOpacity>
      </View>

      {/* Register Text */}
      <View style={styles.registerCont}>

        <Text
          style={[
            styles.registerTxt,
            {
              color:
                theme.secondaryText,
            },
          ]}>
          By clicking the{' '}

          <Text
            style={{
              color:
                theme.primary,
            }}>
            Register
          </Text>

          {' '}
          button, you agree to the
          public offer
        </Text>
      </View>

      {/* Create Account Btn */}
      <View style={styles.btnCont}>

        <TouchableOpacity
          style={[
            styles.btn,
            {
              backgroundColor:
                theme.primary,
            },
          ]}
          onPress={register}>

          <Text style={styles.btnTxt}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>

      {/* Social Media */}
      <View style={styles.ggleCont}>

        <View
          style={
            styles.continueWithCont
          }>

          <Text
            style={[
              styles.continueWithTxt,
              {
                color:
                  theme.secondaryText,
              },
            ]}>
            - OR Continue with -
          </Text>
        </View>

        <View
          style={
            styles.socialMediaCont
          }>

          <View
            style={[
              styles.ggleOuter,
              {
                borderColor:
                  theme.primary,
                backgroundColor:
                  theme.card,
              },
            ]}>

            <Image
              source={require('../assets/ggle.png')}
              style={styles.ggleImg}
            />
          </View>

          <View
            style={{
              paddingLeft: 10,
            }}>

            <View
              style={[
                styles.appleCont,
                {
                  borderColor:
                    theme.primary,
                  backgroundColor:
                    theme.card,
                },
              ]}>

              <Image
                source={require('../assets/apple-icon.png')}
              />
            </View>
          </View>

          <View
            style={{
              paddingLeft: 10,
            }}>

            <View
              style={[
                styles.appleCont,
                {
                  borderColor:
                    theme.primary,
                  backgroundColor:
                    theme.card,
                },
              ]}>

              <Image
                source={require('../assets/facebook-icon.png')}
              />
            </View>
          </View>
        </View>

        <View
          style={styles.signupCont}>

          <Text
            style={[
              styles.signupTxt,
              {
                color:
                  theme.secondaryText,
              },
            ]}>
            I Already Have an
            Account{' '}

            <Text
              style={{
                color:
                  theme.primary,
                textDecorationLine:
                  'underline',
                fontWeight: 'bold',
              }}
              onPress={lgnnvg}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  headlineCont: {
    paddingTop: SPACING.xxxl,
    paddingLeft: 30,
    paddingRight: 155,
  },

  headlineTxt: {
    fontSize: 36,
    fontWeight: 'bold',
  },

  firstinputCont: {
    paddingTop: 33,
    paddingHorizontal: 30,
  },

  firstinput: {
    borderWidth: 1,
    borderRadius: RADIUS.md,
    fontSize: FONT_SIZE.s,
    paddingVertical: 20,
    paddingLeft: 40,
    fontWeight: 'bold',
  },

  userCont: {
    position: 'absolute',
    paddingLeft: 40,
    paddingTop: 50,
    zIndex: 1,
  },

  scndinputCont: {
    paddingTop: 30,
    paddingHorizontal: 30,
  },

  scndinput: {
    borderWidth: 1,
    fontWeight: 'bold',
    borderRadius: RADIUS.md,
    paddingVertical: 20,
    paddingLeft: 42,
  },

  lockCont: {
    position: 'absolute',
    paddingLeft: 44,
    paddingTop: 48,
    zIndex: 1,
  },

  eyeCont: {
    position: 'absolute',
    right: 50,
    bottom: 18,
    zIndex: 1,
  },

  registerCont: {
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 87,
  },

  registerTxt: {},

  btnCont: {
    paddingTop: 38,
    paddingHorizontal: 30,
  },

  btn: {
    borderRadius: RADIUS.sm,
  },

  btnTxt: {
    paddingHorizontal: 78,
    paddingVertical: 15,
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.xxl,
  },

  ggleCont: {
    paddingTop: 40,
    paddingHorizontal: 90,
  },

  continueWithCont: {
    paddingHorizontal: 30,
  },

  continueWithTxt: {
    fontSize: FONT_SIZE.s,
  },

  socialMediaCont: {
    paddingTop: 20,
    flexDirection: 'row',
  },

  ggleOuter: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 15,
    width: 54,
  },

  appleCont: {
    padding: 15,
    borderWidth: 1,
    width: 55,
    borderRadius: 50,
  },

  signupCont: {
    paddingTop: 28,
  },

  signupTxt: {
    fontSize: FONT_SIZE.m,
  },
});