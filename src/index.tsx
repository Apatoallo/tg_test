/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import AuthNavigation from './navigation/authNavigation';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <AuthNavigation />
    </ReduxProvider>
  );
};

export default App;
