import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import { SPACING } from './spacing';
import { RADIUS } from './radius';

export const COMMON = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.md,
    padding: SPACING.m,
    elevation: 2,
  },

  button: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.sm,
    alignItems: 'center',
    paddingVertical: SPACING.m,
  },

  textPrimary: {
    color: COLORS.primary,
  },

});