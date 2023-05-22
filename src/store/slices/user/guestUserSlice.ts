import {createSlice} from '@reduxjs/toolkit';
import {AppUser, logIn, logOut} from './index';

export const initialState: AppUser = {
  name: 'no user',
  isLoggedIn: false,
  isGuest: false,
  actions: [
    {
      index: 0,
      name: 'send-parcel',
      active: false,
    },
    {
      index: 1,
      name: 'help',
      active: true,
    },
    {
      index: 2,
      name: 'find-locations',
      active: true,
    },
    {
      index: 3,
      name: 'arrange-shipments',
      active: false,
    },
  ],
};

export const guestUserSlice = createSlice({
  name: 'guestUser',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(logIn, (state, action) => {
      if (action.payload.isGuest) {
        state.name = action.payload.name;
        state.isLoggedIn = true;
        state.isGuest = true;
      }
    });
    builder.addCase(logOut, () => {
      return initialState;
    });
  },
});

export default guestUserSlice.reducer;
