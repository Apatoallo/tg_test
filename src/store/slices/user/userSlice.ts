import { createSlice } from '@reduxjs/toolkit';
import { AppUser, logIn, logOut, setActions, setThemeId } from './index';
import { themesId } from '../../../utils/constants';
import { MyServiceItemData } from '../../../components/MyServices';

export const defaultActions: MyServiceItemData[] = [
  {
    index: 0,
    name: 'send-parcel',
    active: true,
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
    active: true,
  },
];

export const initialState: AppUser = {
  name: 'no user',
  isLoggedIn: false,
  themeId: themesId.default,
  isGuest: false,
  actions: defaultActions,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(logIn, (state, action) => {
      if (!action.payload.isGuest) {
        state.name = action.payload.name;
        state.isLoggedIn = true;
        state.isGuest = false;
      }
    });
    builder.addCase(logOut, () => {
      return initialState;
    });
    builder.addCase(setThemeId, (state, action) => {
      if (state.isLoggedIn) {
        state.themeId = action.payload;
      }
    });
    builder.addCase(setActions, (state, action) => {
      state.actions = action.payload;
    });
  },
});

export default userSlice.reducer;
