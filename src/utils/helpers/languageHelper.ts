import { gisLocales, lang } from '../constants';

export const getGisLocale = (language: string) => {
  return language === lang.ar ? gisLocales.ar : gisLocales.en;
};
