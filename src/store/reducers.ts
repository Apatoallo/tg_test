import {combineReducers} from 'redux';

import productsReducer from './slices/productsSlice';
import authReducer from './slices/authSlice';

const reducers = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

export default reducers;
