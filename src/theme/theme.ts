import { themesId } from '../utils/constants';
import * as colors from './colors';
import * as colorsDark from './colorsDark';
import { fonts } from './fonts';

export interface ColorTheme {
  primary: string;
  backgroundPrimary: string;
  primaryA100: string;
  backgroundPrimaryA100: string;
  backgroundPrimaryVariantA100: string;
  primaryA200: string;
  backgroundPrimaryA200: string;
  backgroundPrimaryVariantA200: string;
  primaryA300: string;
  primaryA500: string;
  primaryA600: string;
  backgroundPrimaryA600: string;
  primaryA700: string;
  primaryA800: string;
  primaryA900: string;
  backgroundPrimaryA900: string;
  primaryA1300: string;
  onPrimary: string;
  onBackgroundPrimary: string;
  primaryInactive: string;
  surface: string;
  surfaceA200: string;
  surfaceA300: string;
  surfaceTR20: string;
  onSurface: string;
  background: string;
  trackingBg: string;
  navText: string;
  navBorder: string;
  navTabActive: string;
  navTabInactive: string;
  neutral: string;
  neutralTint: string;
  neutralA600: string;
  neutralA300: string;
  neutralA400: string;
  neutralA800: string;
  neutralA900: string;
  neutralA1000: string;
  border: string;
  borderInput: string;
  borderFilled: string;
  error: string;
  errorA100: string;
  onError: string;
  textDefault: string;
  textInfo: string;
  textBody: string;
  textHeadline: string;
  textHeadline2: string;
  textInactive: string;
  textOnSurfacePrimary: string;
  textOnSurfacePrimaryBody: string;
  inactive: string;
  inactiveA600: string;
  black: string;
  success: string;
  successLightA100: string;
  successLightA300: string;
  successLightA800: string;
  warning: string;
  lightGreyA500: string;
  checkbox: string;
}

export interface SpacingTheme {
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
  primary: colors.blue.a700,
  backgroundPrimary: colors.blue.a700,
  primaryA100: colors.blue.a100,
  backgroundPrimaryA100: colors.blue.a100,
  backgroundPrimaryVariantA100: colors.blue.a100,
  primaryA200: colors.blue.a200,
  backgroundPrimaryA200: colors.blue.a200,
  backgroundPrimaryVariantA200: colors.blue.a200,
  primaryA300: colors.blue.a300,
  primaryA500: colors.blue.a500,
  primaryA600: colors.blue.a600,
  backgroundPrimaryA600: colors.blue.a600,
  primaryA700: colors.blue.a700,
  primaryA800: colors.blue.a800,
  primaryA900: colors.blue.a900,
  backgroundPrimaryA900: colors.blue.a900,
  primaryA1300: colors.blue.a1300,
  onPrimary: colors.neutral225.a100,
  onBackgroundPrimary: colors.neutral225.a100,
  primaryInactive: colors.blue.a100,
  surface: colors.neutral225.a100,
  surfaceA200: colors.neutral225.a100,
  surfaceA300: colors.neutral225.a100,
  trackingBg: colors.neutral225.a200,
  surfaceTR20: colors.neutral225.a100TR20,
  onSurface: colors.neutral225.a900,
  background: colors.lightGrey.a600,
  navText: colors.neutral225.a900,
  navBorder: colors.neutral210.a100,
  navTabActive: colors.blue.a100,
  navTabInactive: colors.neutral210.a600,
  border: colors.neutral210.a100,
  borderInput: colors.neutral225.a300,
  borderFilled: colors.neutral210.a1000,
  neutral: colors.neutral210.a700,
  neutralTint: colors.neutral210.a700,
  neutralA600: colors.neutral210.a600,
  neutralA300: colors.neutral210.a300,
  neutralA400: colors.neutral210.a400,
  neutralA800: colors.neutral210.a800,
  neutralA900: colors.neutral210.a900,
  neutralA1000: colors.neutral210.a1000,
  error: colors.red.a600,
  errorA100: colors.red.a100,
  onError: colors.neutral225.a100,
  textDefault: colors.textGrey.a60,
  textInfo: colors.textGrey.a70,
  textBody: colors.textGrey.a80,
  textHeadline: colors.textGrey.a100,
  textHeadline2: colors.blue.a700,
  textInactive: colors.textGrey.a50,
  textOnSurfacePrimary: colors.neutral225.a100,
  textOnSurfacePrimaryBody: colors.neutral225.a100,
  inactive: colors.neutral225.a200,
  inactiveA600: colors.neutral225.a200,
  black: colors.neutral225.a900,
  success: colors.green.a700,
  successLightA100: colors.green.a100,
  successLightA300: colors.green.a300,
  successLightA800: colors.green.a800,
  warning: colors.yellow.a600,
  lightGreyA500: colors.lightGrey.a500,
  checkbox: colors.neutral210.a400,
};

const darkColorTheme: ColorTheme = {
  neutral: colors.neutral210.a700,
  successLightA800: colors.green.a800,
  primary: colorsDark.blue.a700,
  backgroundPrimary: colorsDark.neutral225.a100,
  primaryA100: colorsDark.blue.a100,
  backgroundPrimaryA100: colorsDark.neutral225.a300,
  backgroundPrimaryVariantA100: colorsDark.neutral225.a100,
  primaryA200: colorsDark.blue.a200,
  backgroundPrimaryA200: colorsDark.neutral225.a100,
  backgroundPrimaryVariantA200: colorsDark.neutral225.a300,
  primaryA300: colorsDark.blue.a300,
  primaryA500: colorsDark.blue.a500,
  primaryA600: colorsDark.blue.a600,
  backgroundPrimaryA600: colorsDark.neutral225.a200,
  primaryA700: colorsDark.blue.a700,
  primaryA800: colorsDark.blue.a800,
  primaryA900: colorsDark.blue.a900,
  backgroundPrimaryA900: colorsDark.neutral225.a400,
  primaryA1300: colorsDark.blue.a1300,
  onPrimary: colorsDark.textGrey.a100,
  onBackgroundPrimary: colorsDark.blue.a700,
  primaryInactive: colorsDark.neutral225.a500,
  surface: colorsDark.neutral225.a100,
  surfaceA200: colorsDark.neutral225.a200,
  surfaceA300: colorsDark.neutral225.a300,
  trackingBg: colorsDark.neutral225.a200,
  surfaceTR20: colorsDark.neutral225.a100TR20,
  onSurface: colorsDark.neutral225.a900,
  background: colorsDark.lightGrey.a600,
  navText: colorsDark.neutral225.a900,
  navBorder: colorsDark.neutral225.a100,
  navTabActive: colorsDark.neutral225.a300,
  navTabInactive: colorsDark.neutral210.a800,
  border: colorsDark.neutral210.a100,
  borderInput: colorsDark.neutral225.a300,
  borderFilled: colorsDark.neutral210.a1000,
  neutralTint: colorsDark.neutral210.a800,
  neutralA600: colorsDark.neutral210.a600,
  neutralA300: colorsDark.neutral210.a300,
  neutralA400: colorsDark.neutral210.a400,
  neutralA800: colorsDark.neutral210.a800,
  neutralA900: colorsDark.neutral210.a900,
  error: colorsDark.red.a600,
  errorA100: colorsDark.red.a100,
  onError: colorsDark.neutral225.a100,
  textDefault: colorsDark.textGrey.a60,
  textInfo: colorsDark.textGrey.a70,
  textBody: colorsDark.textGrey.a80,
  textHeadline: colorsDark.textGrey.a100,
  textHeadline2: colorsDark.blue.a700,
  textInactive: colorsDark.textGrey.a50,
  textOnSurfacePrimary: colorsDark.textGrey.a90,
  textOnSurfacePrimaryBody: colorsDark.textGrey.a80,
  inactive: colorsDark.neutral225.a200,
  inactiveA600: colorsDark.neutral225.a600,
  black: colorsDark.neutral225.a900,
  success: colorsDark.green.a700,
  successLightA100: colorsDark.green.a100,
  successLightA300: colorsDark.green.a300,
  warning: colorsDark.yellow.a600,
  lightGreyA500: colorsDark.lightGrey.a500,
  checkbox: colorsDark.neutral210.a400,
  neutralA1000: colors.neutral210.a1000,
};

const defaultSpacingTheme: SpacingTheme = {
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
  marginLLarge: 20,
  paddingMLarge: 18,
  marginLarge: 24,
  paddingLarge: 24,
  marginXLarge: 32,
  paddingXLarge: 32,
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
