import {combineReducers} from 'redux';

import productsReducer from './slices/productsSlice';

const reducers = combineReducers({
  products: productsReducer,
});

export default reducers;
