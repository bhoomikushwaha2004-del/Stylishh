import {
  Image,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React, { useEffect, useState } from 'react';

import { getUser } from '../services/authStorage';

import Location from 'react-native-vector-icons/FontAwesome';

import GeoLocation from 'react-native-geolocation-service';

import useAppTheme from '../theme/useAppTheme';

const Profile = () => {

  const theme = useAppTheme();

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [locationData, setLocation] = useState({
    pincode: '',
    address: '',
    city: '',
    state: '',
    country: '',
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {

    const user = await getUser();

    if (user) {
      setEmail(user.username);
      setPassword(user.password);
    }
  };

  const requestLocationPermission = async () => {

    if (Platform.OS === 'android') {

      const granted =
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS
            .ACCESS_FINE_LOCATION,
        );

      return (
        granted ===
        PermissionsAndroid.RESULTS.GRANTED
      );
    }

    return true;
  };

  const getCurrentLocation = async () => {

    const permission =
      await requestLocationPermission();

    if (!permission) {
      return;
    }

    GeoLocation.getCurrentPosition(
      async position => {

        const { latitude, longitude } =
          position.coords;

        try {

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
            {
              headers: {
                Accept: 'application/json',
                'User-Agent': 'StylishApp',
              },
            },
          );

          const text = await res.text();

          const data = JSON.parse(text);

          const addr = data.address || {};

          setLocation({
            address: data.display_name || '',
            city:
              addr.city ||
              addr.town ||
              addr.village ||
              '',
            state: addr.state || '',
            country: addr.country || '',
            pincode: addr.postcode || '',
          });

        } catch (err) {
          console.log(
            err,
            ' error in geolocation',
          );
        }
      },

      error => {
        console.log(error);
      },

      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  };

  return (
    <>
      <StatusBar
        barStyle={
          theme.background === '#121212'
            ? 'light-content'
            : 'dark-content'
        }
      />

      <View
        style={[
          styles.container,
          {
            backgroundColor:
              theme.background,
          },
        ]}>

        <ScrollView>

          {/* Photo */}
          <View style={styles.picView}>

            <Image
              source={require('../assets/profile-picture.jpg')}
              style={styles.img}
            />
          </View>

          {/* Txt */}
          <View style={styles.txtCont}>

            <Text
              style={[
                styles.personalTxt,
                {
                  color: theme.text,
                },
              ]}>
              Personal Details
            </Text>

            <Text
              style={[
                styles.emailTxt,
                {
                  color:
                    theme.secondaryText,
                },
              ]}>
              Email Address
            </Text>

            {/* Email Input */}
            <View style={styles.emailInputView}>

              <TextInput
                placeholder="Email"
                style={[
                  styles.emailinput,
                  {
                    borderColor:
                      theme.inputBorder,
                    backgroundColor:
                      theme.inputBg,
                    color: theme.text,
                  },
                ]}
                value={email}
                onChangeText={setEmail}
                placeholderTextColor={
                  theme.secondaryText
                }
              />
            </View>

            {/* Password */}
            <Text
              style={[
                styles.pswTxt,
                {
                  color:
                    theme.secondaryText,
                },
              ]}>
              Password
            </Text>

            <View style={styles.pswInputView}>

              <TextInput
                placeholder="Password"
                style={[
                  styles.pswInput,
                  {
                    borderColor:
                      theme.inputBorder,
                    backgroundColor:
                      theme.inputBg,
                    color: theme.text,
                  },
                ]}
                value={password}
                onChangeText={setPassword}
                placeholderTextColor={
                  theme.secondaryText
                }
              />
            </View>

            <Text
              style={[
                styles.changepswTxt,
                {
                  color: theme.primary,
                },
              ]}>
              Change Password
            </Text>

            {/* Divider */}
            <View style={{ paddingTop: 35 }}>

              <View
                style={[
                  styles.divider,
                  {
                    borderColor:
                      theme.border,
                  },
                ]}
              />
            </View>

            <Text
              style={[
                styles.addInfoTxt,
                {
                  color: theme.text,
                },
              ]}>
              Business Address Details
            </Text>

            {/* Use Current Location */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent:
                  'flex-end',
                alignContent:
                  'space-evenly',
              }}>

              <Location
                name="location-arrow"
                size={20}
                style={[
                  styles.locIcon,
                  {
                    color: theme.primary,
                  },
                ]}
              />

              <Text
                style={[
                  styles.changepswTxt,
                  {
                    color: theme.primary,
                  },
                ]}
                onPress={
                  getCurrentLocation
                }>
                Use Current Location
              </Text>
            </View>

            {/* Pincode */}
            <Text
              style={[
                styles.pincodeTxt,
                {
                  color:
                    theme.secondaryText,
                },
              ]}>
              Pincode
            </Text>

            <View style={styles.pswInputView}>

              <TextInput
                placeholder="Pincode"
                style={[
                  styles.pswInput,
                  {
                    borderColor:
                      theme.inputBorder,
                    backgroundColor:
                      theme.inputBg,
                    color: theme.text,
                  },
                ]}
                value={locationData.pincode}
                placeholderTextColor={
                  theme.secondaryText
                }
                onChangeText={text =>
                  setLocation({
                    ...locationData,
                    pincode: text,
                  })
                }
              />
            </View>

            <Text
              style={[
                styles.pincodeTxt,
                {
                  color:
                    theme.secondaryText,
                },
              ]}>
              Address
            </Text>

            <View style={styles.pswInputView}>

              <TextInput
                placeholder="Address"
                style={[
                  styles.pswInput,
                  {
                    borderColor:
                      theme.inputBorder,
                    backgroundColor:
                      theme.inputBg,
                    color: theme.text,
                  },
                ]}
                value={locationData.address}
                placeholderTextColor={
                  theme.secondaryText
                }
                onChangeText={text =>
                  setLocation({
                    ...locationData,
                    address: text,
                  })
                }
              />
            </View>

            <Text
              style={[
                styles.pincodeTxt,
                {
                  color:
                    theme.secondaryText,
                },
              ]}>
              City
            </Text>

            <View style={styles.pswInputView}>

              <TextInput
                placeholder="City"
                style={[
                  styles.pswInput,
                  {
                    borderColor:
                      theme.inputBorder,
                    backgroundColor:
                      theme.inputBg,
                    color: theme.text,
                  },
                ]}
                value={locationData.city}
                placeholderTextColor={
                  theme.secondaryText
                }
                onChangeText={text =>
                  setLocation({
                    ...locationData,
                    city: text,
                  })
                }
              />
            </View>

            <Text
              style={[
                styles.pincodeTxt,
                {
                  color:
                    theme.secondaryText,
                },
              ]}>
              State
            </Text>

            <View style={styles.pswInputView}>

              <TextInput
                placeholder="State"
                style={[
                  styles.pswInput,
                  {
                    borderColor:
                      theme.inputBorder,
                    backgroundColor:
                      theme.inputBg,
                    color: theme.text,
                  },
                ]}
                value={locationData.state}
                placeholderTextColor={
                  theme.secondaryText
                }
                onChangeText={text =>
                  setLocation({
                    ...locationData,
                    state: text,
                  })
                }
              />
            </View>

            <Text
              style={[
                styles.pincodeTxt,
                {
                  color:
                    theme.secondaryText,
                },
              ]}>
              Country
            </Text>

            <View style={styles.pswInputView}>

              <TextInput
                placeholder="Country"
                style={[
                  styles.pswInput,
                  {
                    borderColor:
                      theme.inputBorder,
                    backgroundColor:
                      theme.inputBg,
                    color: theme.text,
                  },
                ]}
                value={locationData.country}
                placeholderTextColor={
                  theme.secondaryText
                }
                onChangeText={text =>
                  setLocation({
                    ...locationData,
                    country: text,
                  })
                }
              />
            </View>

            {/* Divider */}
            <View style={{ paddingTop: 35 }}>

              <View
                style={[
                  styles.divider,
                  {
                    borderColor:
                      theme.border,
                  },
                ]}
              />
            </View>

            <Text
              style={[
                styles.addInfoTxt,
                {
                  color: theme.text,
                },
              ]}>
              Bank Account Details
            </Text>

            <Text
              style={[
                styles.pincodeTxt,
                {
                  color:
                    theme.secondaryText,
                },
              ]}>
              Bank Account Number
            </Text>

            <View style={styles.pswInputView}>

              <TextInput
                placeholder="Account no"
                style={[
                  styles.pswInput,
                  {
                    borderColor:
                      theme.inputBorder,
                    backgroundColor:
                      theme.inputBg,
                    color: theme.text,
                  },
                ]}
                placeholderTextColor={
                  theme.secondaryText
                }
              />
            </View>

            <Text
              style={[
                styles.pincodeTxt,
                {
                  color:
                    theme.secondaryText,
                },
              ]}>
              Account Holder’s Name
            </Text>

            <View style={styles.pswInputView}>

              <TextInput
                placeholder="Account name"
                style={[
                  styles.pswInput,
                  {
                    borderColor:
                      theme.inputBorder,
                    backgroundColor:
                      theme.inputBg,
                    color: theme.text,
                  },
                ]}
                placeholderTextColor={
                  theme.secondaryText
                }
              />
            </View>

            <Text
              style={[
                styles.pincodeTxt,
                {
                  color:
                    theme.secondaryText,
                },
              ]}>
              IFSC Code
            </Text>

            <View style={styles.pswInputView}>

              <TextInput
                placeholder="IFSC Code"
                style={[
                  styles.pswInput,
                  {
                    borderColor:
                      theme.inputBorder,
                    backgroundColor:
                      theme.inputBg,
                    color: theme.text,
                  },
                ]}
                placeholderTextColor={
                  theme.secondaryText
                }
              />
            </View>

            <View
              style={{
                paddingTop: 34,
                paddingBottom: 57,
              }}>

              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor:
                      theme.primary,
                  },
                ]}>

                <Text style={styles.btnTxt}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  picView: {
    paddingTop: 30,
  },

  img: {
    height: 95,
    width: 95,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  personalTxt: {
    paddingTop: 28,
    fontWeight: 'bold',
  },

  txtCont: {
    paddingHorizontal: 24,
    fontSize: 18,
  },

  emailTxt: {
    fontSize: 12,
    paddingTop: 20,
    zIndex: 1,
  },

  emailinput: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 15,
    paddingLeft: 20,
    fontWeight: 'bold',
  },

  emailInputView: {
    paddingTop: 15,
  },

  pswTxt: {
    paddingTop: 28,
    fontSize: 12,
  },

  pswInputView: {
    paddingTop: 15,
  },

  pswInput: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 15,
    paddingLeft: 20,
    fontWeight: 'bold',
  },

  changepswTxt: {
    fontSize: 12,
    alignSelf: 'flex-end',
    paddingTop: 14,
    textDecorationLine: 'underline',
  },

  divider: {
    borderWidth: 0.5,
  },

  addInfoTxt: {
    paddingTop: 34,
    fontSize: 16,
    fontWeight: 'bold',
  },

  pincodeTxt: {
    paddingTop: 22,
    fontSize: 12,
  },

  btn: {
    borderRadius: 8,
  },

  btnTxt: {
    paddingVertical: 14,
    paddingHorizontal: 145,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  locIcon: {
    alignSelf: 'flex-end',
    paddingTop: 14,
  },
});