import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';

import { ActivityIndicator } from 'react-native-paper';

import HomeHeader from './HomeHeader';

import {
  SPACING,
  FONT_SIZE,
} from '../styles';

import useAppTheme from '../theme/useAppTheme';

const Loader = () => {

  const theme = useAppTheme();

  return (
    <>
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.background,
          },
        ]}>

        <HomeHeader />

        <ActivityIndicator
          size={'large'}
          style={styles.loader}
          color={theme.primary}
        />

        <Text
          style={[
            styles.txt,
            {
              color: theme.secondaryText,
            },
          ]}>
          Please wait while your screen is being load!!!!!!
        </Text>
      </View>
    </>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  loader: {
    justifyContent: 'center',
    marginTop: 300,
  },

  txt: {
    marginLeft: 50,
    marginTop: SPACING.s,
    fontSize: FONT_SIZE.s,
  },
});