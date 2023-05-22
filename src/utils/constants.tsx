import Config from 'react-native-config';

export const lang = {
  en: 'en',
  ar: 'ar',
  default: 'en',
};

export const gisLocales = {
  en: 'en_AE',
  ar: 'ar_AE',
  default: 'en_AE',
};

export const supportedLang = [lang.en, lang.ar];
export const langForApis = {
  en: 'English',
  ar: 'Arabic',
};

export const themesId = {
  light: 'light',
  dark: 'dark',
  default: 'light',
  os: 'os',
};

export const staticLinks = {
  website: 'https://www.emiratespost.ae',
  termsOfUseEn: 'https://emiratespost.ae/Portal/Article?locale=en-us&pageid=17',
  termsOfUseAr: 'https://emiratespost.ae/Portal/Article?locale=ar-sa&pageid=17',
  privacyPolicyEn:
    'https://emiratespost.ae/Portal/Article?locale=en-us&pageid=121',
  privacyPolicyAr:
    'https://emiratespost.ae/Portal/Article?locale=ar-sa&pageid=121',
  twitter: 'https://twitter.com/EmiratesPostUAE',
  facebook: 'https://www.facebook.com/EmiratesPostUAE/',
  instagram: 'https://www.instagram.com/emiratespostuae/',
  youtube: 'https://www.youtube.com/channel/UCXmH3cBnNaw-x1FlBBk3pyg',
  linkedin: 'https://www.linkedin.com/company/emirates-post',
  epEmail: 'mailto:custservice@emiratespost.ae',
  epPhone: 'tel:${600599999}',
  prohibitedItems: 'https://stg.epst.ae/cmsfrontend/dangerous-goods',
  termsAndConditions:
    'https://emiratespost.ae/Portal/info?locale=en-us&pageid=8',
  homeEn: 'https://emiratespost.ae/Portal/Home?locale=en-us',
  homeAr: 'https://emiratespost.ae/Portal/Home?locale=ar-sa',
};

export const maxWeightInKg = 30;
export const maxLengthInCm = 120;
export const maxWidthInCm = 80;
export const maxHeightInCm = 60;

export const pickUpTimes = [
  '09:00 - 12:00 (Morning)',
  '12:00 - 06:00 (Afternoon)',
  '09:00 - 06:00 (All Day)',
];

export const optDeliveryMethods = ['Leave at door', 'Leave to neighboor'];

export const timeouts = {
  base: 20000,
};
export const supplierOrCourierLicencingComplaints = ['SUP_CMPT', 'CLC_CMPT'];
export const transactionTypeMoneyOrder = 'MO';
export const maxFileSize = 2097152;
export const uaeNames = {
  en: 'United Arab Emirates',
  ar: 'الإمارات العربية المتحدة',
};

export const weightUnit = [
  { label: 'g', value: 'Grams' },
  { label: 'KG', value: 'Kilograms' },
];

export const shipmentDefaultValues = {
  weight: {
    unit: 'Grams',
    value: 500,
  },
  dimension: {
    unit: 'Centimetre',
    length: 10,
    height: 10,
    width: 10,
  },
  declaredValue: 10,
};

export const uaePass = {
  identifier: 'uaepass',
  schema: 'epostappnew',
  verificationSuccess: 'UAEpassverificationSuccess',
  verificationFailure: 'UAEpassverificationFailure',
  scope: 'urn:uae:digitalid:profile:general',
  baseUrl: Config.UAE_PASS_BASE_URL,
  authUrl: Config.UAE_PASS_BASE_URL + 'authorize',
  redirectUrl: Config.UAE_PASS_REDIRECT_URL,
  clientId: Config.UAE_PASS_CLIENT_ID,
  clientSecret: Config.UAE_PASS_CLIENT_SECRET,
  appCheck: 'uaepass://digitalid-users-ids',
  acrMobile: 'urn:digitalid:authentication:flow:mobileondevice',
  acrWeb: 'urn:safelayer:tws:policies:authentication:level:low',
};
