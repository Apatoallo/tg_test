import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUser } from '../../thunks/userThunk';
import { RootState } from '../../index';
import { CreditCard } from '../../../models/entities';

const initialState = {
  loading: false,
  error: '',
  done: false,
  
  
};

const usersServiceSlice = createSlice({
  name: 'userService',
  initialState: initialState,
  reducers: {
    resetUserService: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchUser.fulfilled, state => {
      state.done = true;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error?.message || '';
    });
  },
});

export const { resetUserService } = usersServiceSlice.actions;
export const selectUserService = (state: RootState) => state.products;
export default usersServiceSlice.reducer;

export const selectCreditCards = createSelector(
  [state => state.userService.creditCards],
  state => state,
);
