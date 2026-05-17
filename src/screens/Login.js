import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {
  useState,
} from 'react';

import EyeIcon from 'react-native-vector-icons/Feather';
import UserIcon from 'react-native-vector-icons/FontAwesome6';
import Lock from 'react-native-vector-icons/Fontisto';

import { useNavigation } from '@react-navigation/native';

import {
  getUser,
  setLogin,
} from '../services/authStorage';

import {
  COLORS,
  FONT_SIZE,
  RADIUS,
  SPACING,
} from '../styles';

import useAppTheme from '../theme/useAppTheme';

const Login = ({
  setIsLoggedIn,
}) => {

  const navigation =
    useNavigation();

  const theme = useAppTheme();

  const [username, setUsername] =
    useState('');

  const [password, setPassword] =
    useState('');

  const signupnvg = () => {

    navigation.navigate('signup');
  };

  const forgetnvg = () => {

    navigation.navigate(
      'forgetpassword',
    );
  };

  const login = async () => {

    const user = await getUser();

    console.log(
      user,
      'login user',
    );

    if (!user) {

      Alert.alert(
        'No Account found',
      );

      return;
    }

    if (
      user.username === username &&
      user.password === password
    ) {

      await setLogin();

      setIsLoggedIn(true);

      Alert.alert(
        'Account Logged In Successfully',
      );

    } else {

      Alert.alert(
        'Invalid credentails',
      );
    }
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

      <StatusBar
        barStyle={
          theme.background ===
          '#121212'
            ? 'light-content'
            : 'dark-content'
        }
      />

      {/* Headline Txt */}
      <View
        style={
          styles.headlineTxt
        }>

        <Text
          style={[
            styles.wlcTxt,
            {
              color:
                theme.text,
            },
          ]}>
          Welcome Back!
        </Text>
      </View>

      {/* First Input */}
      <View
        style={
          styles.firstInputCont
        }>

        <UserIcon
          name={'user-large'}
          size={24}
          color={theme.text}
          style={
            styles.usericonCont
          }
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
              color:
                theme.text,
            },
          ]}
          placeholderTextColor={
            theme.secondaryText
          }
          onChangeText={
            setUsername
          }
          secureTextEntry={
            false
          }
        />
      </View>

      {/* Second Input */}
      <View
        style={
          styles.scdInputCont
        }>

        <Lock
          name="locked"
          size={20}
          color={theme.text}
          style={
            styles.lockCont
          }
        />

        <TextInput
          placeholder="Password"
          style={[
            styles.scntInput,
            {
              borderColor:
                theme.inputBorder,
              backgroundColor:
                theme.inputBg,
              color:
                theme.text,
            },
          ]}
          placeholderTextColor={
            theme.secondaryText
          }
          onChangeText={
            setPassword
          }
          secureTextEntry={
            true
          }
        />

        <EyeIcon
          name="eye"
          size={20}
          color={theme.text}
          style={
            styles.eyeCont
          }
        />
      </View>

      {/* Forget Password */}
      <View
        style={styles.frgtCont}>

        <Text
          style={[
            styles.frgtTxt,
            {
              color:
                theme.primary,
            },
          ]}
          onPress={forgetnvg}>
          Forgot Password?
        </Text>
      </View>

      {/* Login Btn */}
      <View style={styles.btnCont}>

        <TouchableOpacity
          style={[
            styles.btnOuter,
            {
              backgroundColor:
                theme.primary,
            },
          ]}
          onPress={login}>

          <Text style={styles.btnTxt}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      {/* Google Container */}
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
              style={
                styles.ggleImg
              }
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
          style={
            styles.signupCont
          }>

          <Text
            style={[
              styles.signupTxt,
              {
                color:
                  theme.secondaryText,
              },
            ]}>
            Create An Account{' '}

            <Text
              style={{
                color:
                  theme.primary,
                textDecorationLine:
                  'underline',
                fontWeight:
                  'bold',
              }}
              onPress={
                signupnvg
              }>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  headlineTxt: {
    paddingTop:
      SPACING.xxxl,
    paddingLeft:
      SPACING.xl + 7,
    paddingRight: 158,
  },

  wlcTxt: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily:
      'Montserrat-Bold',
  },

  firstInputCont: {
    paddingTop: 35,
    paddingLeft: 32,
    paddingRight: 25,
  },

  firstinput: {
    borderWidth: 1,
    paddingLeft: 38,
    paddingVertical: 20,
    borderRadius:
      RADIUS.md,
    fontSize:
      FONT_SIZE.s,
    fontWeight: 'bold',
  },

  scdInputCont: {
    paddingTop: 30,
    paddingLeft: 32,
    paddingRight: 25,
  },

  scntInput: {
    borderWidth: 1,
    paddingLeft: 40,
    paddingVertical: 20,
    borderRadius:
      RADIUS.md,
    fontSize:
      FONT_SIZE.s,
    fontWeight: 'bold',
  },

  frgtCont: {
    paddingTop: 10,
    paddingRight: 25,
    alignSelf: 'flex-end',
  },

  frgtTxt: {
    fontSize:
      FONT_SIZE.s,
  },

  btnCont: {
    paddingTop: 52,
    paddingHorizontal: 30,
  },

  btnOuter: {
    borderRadius:
      RADIUS.sm,
  },

  btnTxt: {
    paddingVertical: 15,
    paddingHorizontal: 130,
    color: COLORS.white,
    fontSize:
      FONT_SIZE.xxl,
    fontWeight: 'bold',
  },

  ggleCont: {
    paddingTop: 75,
    paddingHorizontal: 90,
  },

  continueWithCont: {
    paddingHorizontal: 30,
  },

  continueWithTxt: {
    fontSize:
      FONT_SIZE.s,
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
    fontSize:
      FONT_SIZE.m,
  },

  usericonCont: {
    position: 'absolute',
    paddingLeft: 43,
    paddingTop: 52,
    zIndex: 1,
  },

  lockCont: {
    position: 'absolute',
    paddingLeft: 47,
    paddingTop: 48,
    zIndex: 1,
  },

  eyeCont: {
    position: 'absolute',
    right: 50,
    bottom: 18,
    zIndex: 1,
  },
});