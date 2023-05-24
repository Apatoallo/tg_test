import React, {useState} from 'react'
import {RouteProp} from '@react-navigation/core';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import ProductsScreen from '../screens/products/Products';
import { useTheme } from '../theme';

const Stack = createStackNavigator<AppStackParamList>();


const AppNavigation = (storedCredentials:any) => {
  const [isLoggedin, setisLoggedin] = useState<any>();
  
  const { theme } = useTheme();
  
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: theme.font.default,
        },
        // headerBackImage: () => <HeaderBack />,
      }}>
          <Stack.Screen
            name="Home"
            component={ProductsScreen}
            options={{
              // headerBackTitleVisible: false,
              headerShown: false,
              // title: '',
            }}
          />
          
     
    </Stack.Navigator>
  );
};



export type AppStackParamList = {
  Home: any;
};


export default AppNavigation;