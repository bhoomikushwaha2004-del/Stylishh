import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Switch } from 'react-native-paper';
import Help from '../screens/drawerScreens/Help';
import About from '../screens/drawerScreens/About';
import HomePage from '../screens/HomePage';
import MyDrawerContent from '../components/MyDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigation = props => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <>
      <Drawer.Navigator
        drawerContent={(drawerProps) => (
          <MyDrawerContent {...drawerProps} setIsLoggedIn={props.setIsLoggedIn} />
        )}
      >
        <>
          <Drawer.Screen
            name="home"
            component={HomePage}
            options={{ headerShown: false, title: 'Home' }}
          />
          <Drawer.Screen name="help" component={Help} />
          <Drawer.Screen name="about" component={About} />
        </>
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
