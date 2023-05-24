import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './authNavigation';
import AppNavigation from './appNavigation';
import {  authentication } from '../store/slices/authSlice';
import { useAppSelector } from '../store/hooks';
import {navigationRef} from './navigationService';
export const RootNavigation = () => {

  const auth = useAppSelector(authentication);

  return (
    <NavigationContainer ref={navigationRef}>
      {auth.isLoggedin ? <AppNavigation/> : <AuthNavigation/>}          
    </NavigationContainer>
  );
};


