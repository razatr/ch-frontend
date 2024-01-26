import {ActionCreator, createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../models/IUser";
import {AppThunk} from "../store";
import AuthService from "../services/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import {API_URL} from "../http";
import {setLoading} from "./app";
import UserService from "../services/UserService";

interface AuthState {
  isAuth: boolean;
  user: IUser;
}

const initialState: AuthState = {isAuth: false, user: {
    email: '',
    isActivated: false,
    userId: '',
    registrationData: new Date()
  }
}

export const loginAction: ActionCreator<AppThunk> = (email:string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.accessToken);
      dispatch(setUser(response.data.user));
      dispatch(setAuth(true));
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
      dispatch(setUser(response.data.user));
      dispatch(setAuth(true));
    } catch (e) {
      // @ts-ignore
      console.log(e.response?.data?.message)
    }
  }
}

export const checkAuth: ActionCreator<AppThunk> = () => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true))
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});
      localStorage.setItem('token', response.data.accessToken);
      dispatch(setUser(response.data.user));
      dispatch(setAuth(true));
    } catch (e) {
      // @ts-ignore
      console.log(e.response?.data?.message)
    } finally {
      dispatch(setLoading(false))
    }
  }
}

export const logoutAction: ActionCreator<AppThunk<void>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      dispatch(setUser({} as IUser));
      dispatch(setAuth(false));
    } catch (e) {
      // @ts-ignore
      console.log(e.response?.data?.message)
    }
  }
}

export const updateUser: ActionCreator<AppThunk> = (updatedUser: IUser) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await UserService.updateUser(updatedUser);
      dispatch(setUser(response.data));
    } catch(e) {
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

export default authSlice.reducer;
