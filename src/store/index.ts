import {configureStore, PreloadedState} from '@reduxjs/toolkit';
import reducers from './reducers';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import appConfig from '../config/app';

export const STORE_KEYS = {
  ROOT: 'root',
  LANG: 'lang',
};

const persistConfig = {
  key: STORE_KEYS.ROOT,
  version: 3,
  storage: AsyncStorage,
  blacklist: [
    'guestUser',
    'userService',
    'addressPicker',
    'tracking',
    'enquiry',
    'rates',
    'shipment',
    'embassy',
    'offices',
    'officesList',
    'uaePass',
    'otp',
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
      const defaultMiddleware = getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      });
      if (__DEV__ && appConfig.REDUX_LOGGING) {
        defaultMiddleware.push(logger);
      }
      return defaultMiddleware;
    },
    preloadedState,
  });
};

export type RootState = ReturnType<typeof reducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const store = setupStore();
export const persistor = persistStore(store);
