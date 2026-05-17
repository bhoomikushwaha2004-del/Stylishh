import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  TouchableOpacity,
} from 'react-native';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgetPassword from '../screens/ForgetPassword';
import GetStarted from '../screens/GetStarted';
import BottomTabNavigation from '../navigation/BottomTabNavigation';
import PlaceOrder from '../screens/PlaceOrder';
import ShopPage from '../screens/ShopPage';
import Profile from '../screens/Profile';

import BackIcon from 'react-native-vector-icons/Ionicons';
import CartIcon from 'react-native-vector-icons/Ionicons';

import useAppTheme from '../theme/useAppTheme';

const Stack = createNativeStackNavigator();

export default function StackNavigation({
  isLoggedIn,
  setIsLoggedIn,
}) {

  const navigation = useNavigation();

  const theme = useAppTheme();

  const checkoutnvg = () => {

    navigation.navigate('bottomTab', {
      screen: 'checkout',
    });
  };

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.card,
          },

          headerTitleStyle: {
            color: theme.text,
          },

          headerTintColor: theme.text,

          contentStyle: {
            backgroundColor:
              theme.background,
          },
        }}>

        {!isLoggedIn ? (
          <>
            <Stack.Screen
              name="login"
              options={{
                headerShown: false,
              }}>

              {props => (
                <Login
                  {...props}
                  setIsLoggedIn={
                    setIsLoggedIn
                  }
                />
              )}
            </Stack.Screen>

            <Stack.Screen
              name="signup"
              component={SignUp}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="forgetpassword"
              component={ForgetPassword}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="getstarted"
              component={GetStarted}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="bottomTab"
              options={{
                headerShown: false,
              }}>

              {props => (
                <BottomTabNavigation
                  {...props}
                  setIsLoggedIn={
                    setIsLoggedIn
                  }
                />
              )}
            </Stack.Screen>

            <Stack.Screen
              name="cart"
              component={ShopPage}
              options={{
                title: 'Cart',

                headerShown: true,

                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.goBack()
                    }>

                    <BackIcon
                      name="chevron-back"
                      size={24}
                      color={theme.text}
                    />
                  </TouchableOpacity>
                ),

                headerRight: () => (
                  <TouchableOpacity>

                    <CartIcon
                      name="cart-outline"
                      size={24}
                      color={theme.text}
                    />
                  </TouchableOpacity>
                ),

                headerTitle: '',
              }}
            />

            <Stack.Screen
              name="bag"
              component={PlaceOrder}
              options={{
                headerShown: true,

                headerTitle:
                  'Shopping Bag',

                headerLeft: () => (
                  <TouchableOpacity
                    onPress={
                      checkoutnvg
                    }>

                    <BackIcon
                      name="chevron-back"
                      size={24}
                      color={theme.text}
                    />
                  </TouchableOpacity>
                ),

                headerTitleAlign:
                  'center',
              }}
            />

            <Stack.Screen
              name="profile"
              component={Profile}
              options={{
                headerTitle:
                  'Profile',

                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.goBack()
                    }>

                    <BackIcon
                      name="chevron-back"
                      size={24}
                      color={theme.text}
                    />
                  </TouchableOpacity>
                ),

                headerTitleAlign:
                  'center',
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </>
  );
}