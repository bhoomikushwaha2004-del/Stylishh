import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useNavigation } from '@react-navigation/native';

import {
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import BackIcon from 'react-native-vector-icons/Ionicons';

import { useSelector } from 'react-redux';

import Checkout from '../screens/Checkout';
import WishList from '../screens/WishList';

import DrawerNavigation from './DrawerNavigation';

import useAppTheme from '../theme/useAppTheme';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (
  routeName,
  focused,
  color,
  size,
) => {

  return (
    <Icon
      name={
        routeName === 'home'
          ? 'home'
          : routeName === 'checkout'
          ? 'shopping-cart'
          : routeName === 'wishlist'
          ? 'heart'
          : null
      }
      size={size}
      color={color}
    />
  );
};

export default function BottomTabNavigation(
  props,
) {

  const navigation = useNavigation();

  const theme = useAppTheme();

  const selector = useSelector(
    state => state.cart.items,
  );

  const wishlistSelector = useSelector(
    state => state.cart.wishlist,
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({

        tabBarIcon: ({
          focused,
          color,
          size,
        }) =>
          getTabBarIcon(
            route.name,
            focused,
            color,
            size,
          ),

        tabBarActiveTintColor:
          theme.primary,

        tabBarInactiveTintColor:
          theme.secondaryText,

        tabBarStyle: {
          height: 76,
          paddingTop: 10,
          backgroundColor:
            theme.card,
          borderTopColor:
            theme.border,
        },

        headerStyle: {
          backgroundColor:
            theme.card,
        },

        headerTintColor:
          theme.text,

        headerTitleStyle: {
          color: theme.text,
        },

        sceneContainerStyle: {
          backgroundColor:
            theme.background,
        },
      })}>

      <Tab.Screen
        name="home"
        options={{
          headerShown: false,
          title: 'Home',
        }}>

        {tabProps => (
          <DrawerNavigation
            {...tabProps}
            setIsLoggedIn={
              props.setIsLoggedIn
            }
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="checkout"
        component={Checkout}
        options={{
          title: 'Cart',

          tabBarBadge:
            selector.length,

          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {

                if (
                  props.navigation.canGoBack()
                ) {
                  props.navigation.goBack();
                }
              }}
              style={{
                paddingLeft: 10,
              }}>

              <BackIcon
                name="chevron-back"
                size={24}
                color={theme.text}
              />
            </TouchableOpacity>
          ),

          headerTitleAlign:
            'center',

          headerTitle: 'Checkout',
        }}
      />

      <Tab.Screen
        name="wishlist"
        component={WishList}
        options={{
          title: 'Wishlist',

          tabBarBadge:
            wishlistSelector.length,
        }}
      />
    </Tab.Navigator>
  );
}