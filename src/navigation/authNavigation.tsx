import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {useTheme} from '../theme';
import {RouteProp} from '@react-navigation/core';
import LoginScreen from '../screens/Login';
// import ProductsScreen from '../screens/Products';

// import RegisterAboutScreen from '../screens/auth/registerAbout';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  const {theme} = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: theme.font.default,
        },
        // headerBackImage: () => <HeaderBack />,
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerBackTitleVisible: false,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};

export type AuthStackParamList = {
  Login: undefined;
};

export type AuthScreenNavigationProp<T extends keyof AuthStackParamList> =
  StackNavigationProp<AuthStackParamList, T>;

type ScreenRouteProp<T extends keyof AuthStackParamList> = RouteProp<
  AuthStackParamList,
  T
>;

export type AuthProps<T extends keyof AuthStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: AuthScreenNavigationProp<T>;
};

export default AuthNavigation;
