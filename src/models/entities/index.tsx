import { RatesProps } from '../../screens/rates/rates.types';
import { TrackingResponse } from './api';
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

export interface UserState {
  name: string;
  isGuest: boolean;
}

export interface GuestState extends UserState {
  rates: RatesProps | null;
}

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  mobileCode: string;
  mobilePhone: string;
  emiratesId: string;
  gender: string;
  birthDate: string;
}

export interface OfferData {
  id: string;
  header: string;
  body: string;
  imageLink: string;
}

export interface UpcomingDelivery {
  id: string;
  title: string;
  status: number;
}

export interface FaqItem {
  title: string;
  body: string;
}

// Mocks
export const testOfferItem: OfferData = {
  id: '1',
  header: 'Title of the offer',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum metus Neque porro quisquam est qui Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum metus Neque porro quisquam est qui...',
  imageLink: '',
};

export const testOfferData = [testOfferItem, testOfferItem];

export const testUpcomingDelivery: TrackingResponse = {
  trackingNumber: 'SPHJ123BKL456YUN',
  trackingReferenceNo: '',
  sender: {},
  receiver: {},
  lastStatus: {
    code: 'B',
    descriptionAr: 'Out for delivery',
    descriptionEn: 'Out for delivery',
  },
  title: 'My new camera',
};

export const testUpcomingDeliveryData = [
  testUpcomingDelivery,
  testUpcomingDelivery,
];

export const testFaqData: FaqItem[] = [
  {
    title: 'Question lorem ipsum dolor sit amet?',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title:
      'Question Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore?',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Question Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export interface ContactDetails {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  poBoxNumber?: string;
  city?: string;
  fullAddress?: string;
  country?: string;
  data: TrackingResponse;
  isTracked: Boolean;
}

export interface CreditCard {
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardNickName?: string;
}

export interface AppNotification extends FirebaseMessagingTypes.RemoteMessage {
  unread?: boolean;
}
