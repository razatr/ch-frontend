import {ActionCreator, createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../models/IUser";
import {AppThunk} from "../store";
import AuthService from "../services/AuthService";

interface AuthState {
  isAuth: boolean;
  user: IUser;
}

const initialState: AuthState = {isAuth: false, user: {
    email: '',
    isActivated: false,
    id: ''
  }
}

export const loginAction: ActionCreator<AppThunk> = (email:string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.accessToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
    } catch (e) {
      // @ts-ignore
      console.log(e.response?.data?.message)
    }
  }
}

export const registrationAction: ActionCreator<AppThunk> = (email:string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem('token', response.data.accessToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
    } catch (e) {
      // @ts-ignore
      console.log(e.response?.data?.message)
    }
  }
}

export const logoutAction: ActionCreator<AppThunk<void>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      dispatch(setAuth(false));
      dispatch(setUser({} as IUser));
    } catch (e) {
      // @ts-ignore
      console.log(e.response?.data?.message)
    }
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    }
  }
})

export const { setUser, setAuth } = authSlice.actions

export default authSlice;
