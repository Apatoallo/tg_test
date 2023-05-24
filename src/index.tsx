/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootNavigation } from './navigation/rootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './components/credentialContext';
import { EmptyObject } from 'redux';

const App = () => {
  const [appReady, setAppReady] = useState(false)
  const [storedCredentials, setStoredCredentials] = useState<any>()
  
    return (
      <CredentialsContext.Provider value={{storedCredentials, setStoredCredentials}}>
        <ReduxProvider store={store}>
          <RootNavigation/>
        </ReduxProvider>
      </CredentialsContext.Provider>
    );
  

  
  
};

export default App;
