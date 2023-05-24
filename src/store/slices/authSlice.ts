import {
  LogOut,
  LoggedIn
} from '../../models/entities/rates/index';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../index';

type SliceState = {
  loginUser: Object;
  isLoggedin: Boolean;
};

const initialState: SliceState = {
  loginUser: {
    email: 'tiklagelsin@mail.com',
    password: '1234567'
  },
  isLoggedin: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logOut: (state, action: PayloadAction<LogOut>) => {
      state.isLoggedin = false
    },
    logIn: (state, action: PayloadAction<LoggedIn>) => {
      console.log('login action clicked', )
      state.isLoggedin = true
    }
  },
  extraReducers: builder => {
    
  },
});

export const { logOut, logIn } = authSlice.actions;
export const authentication = (state: RootState) => state.auth;
export default authSlice.reducer;
