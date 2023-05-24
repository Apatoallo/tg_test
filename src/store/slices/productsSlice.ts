import {
  PricingOption,
} from '../../models/entities/auth/index';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../index';

type SliceState = {
  products: Object[];
  basket: Object[];
  filteredBasket: Object[];
  productsCount: Number;
};

const initialState: SliceState = {
  products: [
    {
      id: 40223,
      name: 'Menu 1',
      price: 119,
      interigents: 'Parmesan, Domates, Mantar, Jalapeno',
      quantity: 0
    },
    {
      id: 34023,
      name: 'Menu 2',
      price: 189,
      interigents: 'Mozarella, Domates, Özel Sos',
      quantity: 0
    },
    {
      id: 10223,
      name: 'Menu 3',
      price: 230,
      interigents: 'Soğan, Domates, Biber, Cheddar',
      quantity: 0
    },
    {
      id: 33423,
      name: 'Menu 4',
      price: 90,
      interigents: 'Salatalık, Özel Sos, Mantar',
      quantity: 0
    },
    {
      id: 23122,
      name: 'Menu 5',
      price: 150,
      interigents: 'Sosis, Domates, Salam',
      quantity: 0
    },
    {
      id: 23254,
      name: 'Menu 6',
      price: 120,
      interigents: 'Soğan, Domates, Özel Sos',
      quantity: 0
    },
],
  productsCount: 0,
  filteredBasket: []
};

export const productsSlice = createSlice({
  name: 'productList',
  initialState: initialState,
  reducers: {
    clearBasket: () => {
      return initialState;
    },
    addProduct: (
      state,
      action: PayloadAction<PricingOption>,
    ) => {
      const objIndex = state.products.findIndex((obj => obj.id == action.payload.id));
      state.products[objIndex].quantity = state.products[objIndex].quantity + 1
    },
    removeProduct: (
      state,
      action: PayloadAction<PricingOption>,
    ) => {
      const objIndex = state.products.findIndex((obj => obj.id == action.payload.id));
      state.products[objIndex].quantity = state.products[objIndex].quantity - (state.products[objIndex].quantity > 0 ? 1:0)
      
    },
    addToBasket: (
      state,
      action: PayloadAction<PricingOption>,
    ) => {
      console.log(action.payload.id)
      if (state.basket.map((obj => obj.id !== action.payload.id))) {
        console.log('NOT EQUAL EQUAL')
        return {
          ...state,
          basket: [...state.basket, action.payload]
        };
      }else{
        console.log('EQUAL EQUAL')
        return {
          ...state,
          basket: [...state.basket]
        }
      }
      
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

export const {clearBasket, addToBasket, addProduct, removeProduct} = productsSlice.actions;
export const productList = (state: RootState) => state.products;
export default productsSlice.reducer;
