import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './authNavigation';

// import {useTheme} from '../theme';

import {navigationRef} from './navigationService';

// import {useAppSelector} from '../store/hooks';
// import {selectUser} from '../store/slices/user';
// const user = useAppSelector(selectUser);

export const RootNavigation = () => {
  // const {theme} = useTheme();
  // const navigationTheme = {
  //   colors: {
  //     background: theme.color.background,
  //     border: theme.color.navBorder,
  //     card: theme.color.background,
  //     notification: theme.color.error,
  //     primary: theme.color.navText,
  //     text: theme.color.navText,
  //   },
  // };

  return (
    <NavigationContainer ref={navigationRef}>
      <AuthNavigation />
    </NavigationContainer>
  );
};
