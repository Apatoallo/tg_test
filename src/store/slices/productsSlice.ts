import {
  PricingOption,
} from './../../models/entities/rates/index';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../index';

type SliceState = {
  products: Object[];
  basket: Object[];
  productsCount: Number;
};

const initialState: SliceState = {
  products: [
    {
      name: 'Menu 1',
      price: '119.00',
      interigents: 'Parmesan, Domates, Mantar, Jalapeno'
    },
    {
      name: 'Menu 2',
      price: '189.00',
      interigents: 'Mozarella, Domates, Özel Sos'
    },
    {
      name: 'Menu 3',
      price: '230.00',
      interigents: 'Soğan, Domates, Biber, Cheddar'
    },
    {
      name: 'Menu 4',
      price: '90.00',
      interigents: 'Salatalık, Domates, Özel Sos, Mantar'
    },
    {
      name: 'Menu 5',
      price: '150.00',
      interigents: 'Sosis, Domates, Salam'
    },
    {
      name: 'Menu 6',
      price: '120.00',
      interigents: 'Soğan, Domates, Özel Sos'
    },
],
  productsCount: 0,
  basket: [],
};

export const productsSlice = createSlice({
  name: 'productList',
  initialState: initialState,
  reducers: {
    clearBasket: () => {
      return initialState;
    },
    setSelectedServiceForRates: (
      state,
      action: PayloadAction<PricingOption>,
    ) => {
      return {
        ...state,
        selectedServiceForRates: action.payload,
      };
    },
  },
  extraReducers: builder => {},
});

export const {clearBasket} = productsSlice.actions;
export const productList = (state: RootState) => state.products;
export default productsSlice.reducer;
