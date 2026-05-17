import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkTheme: false,
};

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,

  reducers: {
    changeTheme: state => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { changeTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;