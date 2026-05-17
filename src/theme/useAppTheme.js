import { useSelector } from 'react-redux';
import { DarkTheme, LightTheme } from './colors';

const useAppTheme = () => {
  const darkTheme = useSelector(
    state => state.theme.darkTheme,
  );

  return darkTheme ? DarkTheme : LightTheme;
};

export default useAppTheme;