import {
  RatesResponse,
  PricingOption,
} from './../../models/entities/rates/index';
import {postCalculation} from './../thunks/productsThunk';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../index';
import {ProblemDetails} from '../../models/entities/api';

type SliceState = {
  ratesLoading: boolean;
  ratesError: ProblemDetails | undefined;
  ratesData: RatesResponse | null;
  selectedServiceForRates: PricingOption | null;
  productsCount: String;
};

const initialState: SliceState = {
  ratesLoading: false,
  ratesError: undefined,
  ratesData: null,
  selectedServiceForRates: null,
  productsCount: '123123SEMSEM SEM',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    clearRates: () => {
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
  extraReducers: builder => {
    builder.addCase(postCalculation.pending, state => {
      state.ratesData = null;
      state.ratesLoading = true;
      state.ratesError = undefined;
    });
    builder.addCase(postCalculation.fulfilled, (state, action) => {
      state.ratesLoading = false;
      state.ratesData = {
        pricingOptions: action.payload.pricingOptions.filter(item =>
          action.meta.arg.requestBody.shipmentType === 'Document'
            ? item.contentTypeCodeEn === 'Document'
            : item.contentTypeCodeEn === 'NonDocument',
        ),
      };
    });
    builder.addCase(postCalculation.rejected, (state, action) => {
      state.ratesLoading = false;
      state.ratesError = action.payload;
      state.ratesData = null;
    });
  },
});

export const {clearRates, setSelectedServiceForRates} = productsSlice.actions;
export const productsCounter = (state: RootState) => state.products;
export default productsSlice.reducer;
