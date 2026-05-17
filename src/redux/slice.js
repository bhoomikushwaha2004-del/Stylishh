const { createSlice } = require('@reduxjs/toolkit');
import AsyncStorage from '@react-native-async-storage/async-storage';

// const saveData = async data => {
//   try {
//     await AsyncStorage.setItem('cart', JSON.stringify(data));
//   } catch (e) {
//     console.log('storage err ', e);
//   }
// };

const saveData = async (items, wishlist) => {
  try {
    const updatedCart = items.map(item => ({
      id: item.id,
      quantity: item.quantity || 1,
      isWishlist: wishlist.some(w => w.id === item.id),
    }));

    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  } catch (err) {
    console.log('storage errro ', err);
  }
};

const initialState = {
  // value:0,
  items: [],
  wishlist: [],
};

const addToCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems: (state, action) => {
      // state.items.push(action.payload);
      // saveData(state.items);
      const exist = state.items.find(item => item.id === action.payload.id);

      if (!exist) {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      saveData(state.items, state.wishlist);
    },
    removeCart: (state, action) => {
      // state.items = state.items.filter(item => item.id !== action.payload);
      // saveData(state.items);

      state.items = state.items.filter(item => item.id !== action.payload);
      saveData(state.items, state.wishlist);
    },
    setCart: (state, action) => {
      // state.items = action.payload;
      // saveData(state.items);
      state.items = action.payload.items || [];
      state.wishlist = action.payload.wishlist || [];
    },
    handleQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity = quantity;
      }

      saveData(state.items, state.wishlist);
    },

    addToWishlist: (state, action) => {
      const exist = state.wishlist.find(item => item.id === action.payload.id);

      if (!exist) {
        state.wishlist.push(action.payload);
      }

      saveData(state.wishlist, state.items);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        item => item.id !== action.payload,
      );
      saveData(state.wishlist, state.items);
    },
  },
});

export const {
  addItems,
  removeCart,
  setCart,
  handleQuantity,
  addToWishlist,
  removeFromWishlist,
} = addToCart.actions;
export default addToCart.reducer;
