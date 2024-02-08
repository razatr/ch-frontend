import {RootState} from "..";
import {IUser} from "../../models/IUser";

export const userSelector = (state: RootState):IUser => {
  return state.user.user;
};
