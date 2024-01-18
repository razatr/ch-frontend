import {RootState} from "../store";
import {IUser} from "../models/IUser";

export const isAuthSelector = (state: RootState):boolean => {
  return state.auth.isAuth;
}
export const userSelector = (state: RootState):IUser => state.auth.user;
