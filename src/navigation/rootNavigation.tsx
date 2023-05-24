import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './authNavigation';
import AppNavigation from './appNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  authentication } from '../store/slices/authSlice';
import { useAppSelector } from '../store/hooks';
// import {useTheme} from '../theme';
import {navigationRef} from './navigationService';
import { CredentialsContext } from '../components/credentialContext';
export const RootNavigation = () => {

  const auth = useAppSelector(authentication);
  const checkLoginCredentials = () => {
    AsyncStorage.getItem('isLoggedin')
    .then((result) => { 
      if(result !== null) {

        setStoredCredentials(result)

      } else {

      }
    })
    .catch(error => console.log(error))
  }
  
  useEffect(() => {
    checkLoginCredentials()
  },[])

  return (
    <NavigationContainer ref={navigationRef}>
      {auth.isLoggedin ? <AppNavigation/> : <AuthNavigation/>}          
    </NavigationContainer>
  );
};


