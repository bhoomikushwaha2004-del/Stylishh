import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  Switch,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Chat from 'react-native-vector-icons/Ionicons';
import About from 'react-native-vector-icons/Entypo';
import { useEffect, useState } from 'react';
import { changeTheme } from '../redux/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logoutUser } from '../services/authStorage';
import useAppTheme from '../theme/useAppTheme';
import store from '../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyDrawerContent = props => {
  const paperTheme = useTheme();

  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  // FIXED
  const isDarkTheme = useSelector(state => state.theme.darkTheme);

  const theme = useAppTheme();

  const dynamicStyles = styles(theme);

  useEffect(() => {
    userInfo();
  }, []);

  const handleLogout = async () => {
    await logoutUser();

    Alert.alert('You Have been Logout');

    props.setIsLoggedIn(false);
  };

  const toggleTheme = async () => {
    dispatch(changeTheme());

    const currentTheme = store.getState().theme.darkTheme;

    await AsyncStorage.setItem('theme', currentTheme ? 'dark' : 'light');
  };

  const userInfo = async () => {
    const user = await getUser();

    if (user) {
      setEmail(user.username);
    }
  };

  return (
    <View
      style={[
        dynamicStyles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <DrawerContentScrollView {...props}>
        <View style={dynamicStyles.drawerContent}>
          <View style={dynamicStyles.userInfoSection}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
              }}
            >
              <Avatar.Image
                source={require('../assets/profile-picture.jpg')}
                size={50}
              />

              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'column',
                }}
              >
                <Title
                  style={[
                    dynamicStyles.title,
                    {
                      color: theme.text,
                    },
                  ]}
                >
                  John Doe
                </Title>

                <Caption
                  style={[
                    dynamicStyles.caption,
                    {
                      color: theme.secondaryText,
                    },
                  ]}
                >
                  @{email || 'j_doe'}
                </Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={dynamicStyles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={theme.text} size={size} />
              )}
              label="Home"
              labelStyle={{
                color: theme.text,
              }}
              onPress={() => {
                props.navigation.navigate('home');
              }}
            />

            <DrawerItem
              icon={({ size }) => (
                <Chat name="chatbox-ellipses" color={theme.text} size={size} />
              )}
              label="Help"
              labelStyle={{
                color: theme.text,
              }}
              onPress={() => {
                props.navigation.navigate('help');
              }}
            />

            <DrawerItem
              icon={({ size }) => (
                <About name="network" color={theme.text} size={size} />
              )}
              label="About Us"
              labelStyle={{
                color: theme.text,
              }}
              onPress={() => {
                props.navigation.navigate('about');
              }}
            />
          </Drawer.Section>

          <Drawer.Section title="Preferences">
            <TouchableOpacity onPress={toggleTheme}>
              <View style={dynamicStyles.preference}>
                <Text
                  style={{
                    color: theme.text,
                  }}
                >
                  Dark Theme
                </Text>

                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableOpacity>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={dynamicStyles.bottomDrawerSection}>
        <DrawerItem
          icon={({ size }) => (
            <Icon name="exit-to-app" color={theme.text} size={size} />
          )}
          label="Sign Out"
          labelStyle={{
            color: theme.text,
          }}
          onPress={handleLogout}
        />
      </Drawer.Section>
    </View>
  );
};

export default MyDrawerContent;

const styles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    drawerContent: {
      flex: 1,
    },

    userInfoSection: {
      paddingLeft: 20,
    },

    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },

    caption: {
      fontSize: 14,
      lineHeight: 14,
    },

    drawerSection: {
      marginTop: 15,
    },

    bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: theme.border,
      borderTopWidth: 1,
    },

    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
