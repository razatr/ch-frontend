import {configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import appReducer from "../reducers/app";
import authReducer from "../reducers/auth";

export const store = configureStore({
  reducer: combineReducers({ app: appReducer, auth: authReducer })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>