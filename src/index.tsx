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
import {Text, View} from 'react-native';
import AuthNavigation from './navigation/authNavigation';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootNavigation } from './navigation/rootNavigation';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <RootNavigation/>
    </ReduxProvider>
      
  );
};

export default App;
