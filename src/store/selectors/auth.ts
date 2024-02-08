import {RootState} from "..";

export const isAuthSelector = (state: RootState):boolean => {
  return state.auth.isAuth;
}

