import Config from 'react-native-config';

const apiConfig = {
  BASE_URL: Config.BASE_API,
  TRACKING: 'services/tracking/api/Tracking/trackAwb?awbNumber=',
  API_MOCK: false,
  MASTER_URL: Config.MASTER_API,
  PRODUCTS_URL: Config.PRODUCTS_API,
  NOTIFICATION_URL: Config.NOTIFICATION_API,
  GOOGLE_MAPS_KEY: Config.GOOGLE_MAPS,
  NOTIFICATION_KEY: 'EPWebSite',
  OFFICES_NEAREST: 'locations/api/Offices/Nearest?',
  LOCATIONS: 'locations/api/Locations?',
  OTP_SEND: 'services/sms/api/OtpNotifications/send',
  OTP_VERIFY: 'services/sms/api/OtpNotifications/verify',
  MASTER_MOCK: false,
  NOTIFICATION_API_MOCK: false,
  USERS: 'api/users/', // fake
  CITIES: 'api/Cities/', // fake
  GIS_MOCK: false,
  GIS_BASE_URL: 'https://catalog.api.2gis.com/3.0/',
  ENQUIRY: 'services/crm/api/',
  EMBASSY: 'services/embassy/api/',
  EMBASSY_LIST: 'Embassies/list',
  EMBASSY_DETAIL: 'Embassies/',
  RATES: 'services/ratecalculator/api/',
  RATES_POST_CALCULATE: 'RateCalculator/rates',
  ENQUIRY_TYPES: 'Masters/InquiryTypes',
  ENQUIRY_REASONS: 'Masters/InquiryReasons',
  ENQUIRY_FOUND_ITEMS: 'Masters/ItemFoundActions',
  ENQUIRY_ATTACHMENT_ITEMS: 'Masters/AttachmentTypes',
  ENQUIRY_SUGGESTION_TYPES: 'Masters/SuggestionTypes',
  ENQUIRY_COMPLAINT_TYPES: 'Masters/ComplaintTypes',
  ENQUIRY_SUPPLIER_ISSUES: 'Masters/SupplierLicenseIssues',
  ENQUIRY_COURIER_ISSUES: 'Masters/CourierLicenseIssues',
  ENQUIRY_POST: 'Inquiries',
  ENQUIRY_POST_COMPLAINT: 'Complaints',
  ENQUIRY_INTERNATIONAL_SHIPMENTS: 'InternationalShipments',
  TRANSACTION_TYPES: 'Masters/TransactionTypes',
  GIS_KEY: 'ruceno9920',
  GIS_GEOCODER: 'items/geocode?',
  GIS_SUGGEST: 'suggests?',
  GOOGLE_MAPS_API: 'https://maps.googleapis.com/maps/api',
  GOOGLE_MAPS_AUTOCOMPLETE: '/place/autocomplete/json?',
  GOOGLE_MAPS_DETAILS: 'place/details/json?',
};

export default apiConfig;
// MAfTFc2IiLppplGWvtNB4syh3AqR3mGJ
