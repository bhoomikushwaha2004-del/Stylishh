import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { micEvents, SpeechToText } from 'react-native-speech-convertor';
import Search from 'react-native-vector-icons/Fontisto';
import Mic from 'react-native-vector-icons/MaterialIcons';
import { FONT_SIZE, RADIUS, SPACING } from '../styles';
import useAppTheme from '../theme/useAppTheme';

const HomeHeader = ({ handleSearch }) => {
  const navigation = useNavigation();

  const theme = useAppTheme();

  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);

  const drawernvg = () => {
    navigation.openDrawer();
  };

  useEffect(() => {
    const resultListener = micEvents.addListener(
      'onSpeechResult',
      res => {
        setText(res);
        handleSearch(res);
        setIsListening(false);
      },
    );

    const errorListener = micEvents.addListener(
      'onSpeechError',
      err => {
        console.log(err, 'error on useeffect mic');
        setIsListening(false);
      },
    );

    return () => {
      resultListener.remove();
      errorListener.remove();
    };
  }, []);

  return (
    <SafeAreaView
      style={{ backgroundColor: theme.background }}>
      
      {/* Header */}
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.background,
          },
        ]}>
        
        {/* Menu */}
        <TouchableOpacity onPress={drawernvg}>
          <Image
            source={require('../assets/hdr-lines.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>

        {/* Logo */}
        <View style={styles.center}>
          <Image
            source={require('../assets/stylish-icon.png')}
            style={styles.logo}
          />

          <Text
            style={[
              styles.logoText,
              {
                color: theme.secondary,
              },
            ]}>
            Stylish
          </Text>
        </View>

        {/* Profile */}
        <TouchableOpacity
          onPress={() => navigation.navigate('profile')}>
          <Image
            source={require('../assets/profile-picture.jpg')}
            style={styles.profile}
          />
        </TouchableOpacity>
      </View>

      {/* Search Box */}
      <View style={styles.searchBoxCont}>
        
        <Search
          name="search"
          size={20}
          style={[
            styles.srchicon,
            {
              color: theme.secondaryText,
            },
          ]}
        />

        <TextInput
          placeholder="Search any Product.."
          placeholderTextColor={theme.secondaryText}
          style={[
            styles.searchinput,
            {
              backgroundColor: theme.inputBg,
              borderColor: theme.inputBorder,
              color: theme.text,
            },
          ]}
          value={text}
          onChangeText={val => {
            setText(val);
            handleSearch(val);
          }}
        />

        {/* Mic */}
        <TouchableOpacity
          style={
            isListening
              ? styles.micActive
              : styles.micIcon
          }
          onPress={() => {
            if (!isListening) {
              setIsListening(true);
              SpeechToText.startListening();
            } else {
              SpeechToText.stopListening();
              setIsListening(false);
            }
          }}>
          
          <Mic
            name="mic-none"
            size={24}
            color={
              isListening
                ? '#FFFFFF'
                : theme.secondaryText
            }
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.m,
    top: 20,
  },

  menuIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  center: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },

  logoText: {
    fontSize: FONT_SIZE.l,
    fontWeight: 'bold',
    marginLeft: SPACING.s,
    fontFamily: 'libreCaslonText',
  },

  profile: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },

  searchBoxCont: {
    padding: SPACING.m,
  },

  searchinput: {
    borderWidth: 1,
    borderRadius: RADIUS.sm,
    paddingLeft: 46,
  },

  srchicon: {
    position: 'absolute',
    zIndex: 1,
    left: 32,
    top: 26,
  },

  micIcon: {
    position: 'absolute',
    top: 24,
    alignSelf: 'flex-end',
    right: 32,
  },

  micActive: {
    position: 'absolute',
    right: 32,
    top: 24,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 6,
  },
});