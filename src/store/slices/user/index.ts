import {RootState} from '../../index';
import {createAction} from '@reduxjs/toolkit';
import {UserState} from '../../../models/entities';
// import {MyServiceItemData} from '../../../components/MyServices';

export const logIn = createAction<UserState>('logIn');
export const logOut = createAction('logOut');
export const setThemeId = createAction<string>('setThemeId');
// export const setActions = createAction<MyServiceItemData[]>('setActions');

export const selectUser = (state: RootState) => {
  if (state.guestUser.isLoggedIn) {
    return state.guestUser;
  } else {
    return state.user;
  }
};

export interface AppUser {
  name: string;
  isLoggedIn: boolean;
  isGuest: boolean;
  // actions: MyServiceItemData[];
}
