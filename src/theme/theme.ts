import { themesId } from '../utils/constants';
import * as colors from './colors';
import * as colorsDark from './colorsDark';
import { fonts } from './fonts';

export interface ColorTheme {
  white: string;
  primary: string;
  backgroundPrimary: string;
  primaryA100: string;
  backgroundPrimaryA100: string;
  backgroundPrimaryVariantA100: string;
  primaryA200: string;
}

export interface SpacingTheme {
  marginMicroSmall: number;
  paddingMicroSmall: number;
  marginExtraSmall: number;
  paddingExtraSmall: number;
  paddingMediumSmall: number;
  marginMediumSmall: number;
  marginSmall: number;
  paddingSmall: number;
  marginMedium: number;
  paddingMedium: number;
  marginMini: number;
  paddingMini: number;
  marginMiniMedium: number;
  paddingMiniMedium: number;
  margin: number;
  padding: number;
  marginXLarge: number;
  paddingXLarge: number;
  marginLarge: number;
  paddingLarge: number;
  marginMLarge: number;
  paddingMLarge: number;
  paddingLLarge: number;
  marginLLarge: number;
  marginExtraLarge: number;
  paddingExtraLarge: number;
  marginXXL: number;
  paddingXXL: number;
}

export interface FontTheme {
  default: string;
}

export interface Theme {
  id: string;
  color: ColorTheme;
  spacing: SpacingTheme;
  font: FontTheme;
}

const lightColorTheme: ColorTheme = {
  primary: colors.blue.a100,
  white: colors.white,
  backgroundPrimary: colors.red.a100,
  primaryA100: colors.blue.a100,
  backgroundPrimaryA100: colors.blue.a100,
  backgroundPrimaryVariantA100: colors.blue.a100,
  primaryA200: colors.blue.a100,
  
};

const darkColorTheme: ColorTheme = {
  primary: colors.blue.a100,
  white: colors.white,
  backgroundPrimary: colors.red.a100,
  primaryA100: colors.blue.a100,
  backgroundPrimaryA100: colors.blue.a100,
  backgroundPrimaryVariantA100: colors.blue.a100,
  primaryA200: colors.blue.a100,
  
};

const defaultSpacingTheme: SpacingTheme = {
  marginMicroSmall: 2,
  paddingMicroSmall: 2,
  marginExtraSmall: 4,
  paddingExtraSmall: 4,
  marginMediumSmall: 6,
  paddingMediumSmall: 6,
  marginSmall: 8,
  paddingSmall: 8,
  marginMedium: 10,
  paddingMedium: 10,
  marginMini: 12,
  paddingMini: 12,
  marginMiniMedium: 14,
  paddingMiniMedium: 14,
  margin: 16,
  padding: 16,
  marginMLarge: 18,
  paddingLLarge: 20,
  marginLLarge: 28,
  paddingMLarge: 28,
  marginLarge: 32,
  paddingLarge: 32,
  marginXLarge: 38,
  paddingXLarge: 38,
  marginExtraLarge: 48,
  paddingExtraLarge: 48,
  marginXXL: 78,
  paddingXXL: 78,
};

const defaultFontTheme: FontTheme = {
  default: fonts.TitilliumWebRegular,
};

export const lightTheme: Theme = {
  id: themesId.light,
  color: lightColorTheme,
  spacing: defaultSpacingTheme,
  font: defaultFontTheme,
};

export const darkTheme: Theme = {
  id: themesId.dark,
  color: darkColorTheme,
  spacing: defaultSpacingTheme,
  font: defaultFontTheme,
};
