import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import { Provider as ReduxProvider, useDispatch } from 'react-redux';
import store from './src/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setCart } from './src/redux/slice';
import { useEffect, useState } from 'react';
import { getLogin } from './src/services/authStorage';
import { changeTheme } from './src/redux/themeSlice';

const AppContent = () => {
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    loadCart();
    checkLogin();
    loadTheme();
  }, []);

  const loadCart = async () => {
    try {
      const data = await AsyncStorage.getItem('cart');

      if (data) {
        const updatedData = JSON.parse(data)

        dispatch(setCart({ items : updatedData , 
          wishlist : updatedData.filter( (item:any) => item.isWishlist === true, )
        }));
      }

      
    } catch (e) {
      console.log(e);
    }
  };

  const loadTheme = async () => {
  try {
    const savedTheme = await AsyncStorage.getItem('theme');

    if (savedTheme === 'dark') {
      dispatch(changeTheme());
    }
  } catch (e) {
    console.log(e);
  }
};

  const checkLogin = async () => {
    const status = await getLogin();
    setIsLoggedIn(status);
  };

  if (isLoggedIn === null) return null;

  return (
    <NavigationContainer>
      <StackNavigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </NavigationContainer>
  );
};

function App() {
  return (
    <ReduxProvider store={store}>
      <AppContent />
    </ReduxProvider>
  );
}

export default App;
