import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/core';

export type AppStackParamList = {
  HomeTabs: any;
  Home: undefined;
  Track: undefined;
  Send: undefined;
  Shipment: {filteredDates: {from: string; to: string}} | undefined;
 
};

export type ScreenNavigationProp<T extends keyof AppStackParamList> =
  StackNavigationProp<AppStackParamList, T>;

export type ScreenRouteProp<T extends keyof AppStackParamList> = RouteProp<
  AppStackParamList,
  T
>;

export type AppProps<T extends keyof AppStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};
