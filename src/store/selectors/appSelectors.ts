import {RootState} from "..";

export const isLoadingSelector = (state: RootState):boolean => {
  return state.app.isLoading;
}