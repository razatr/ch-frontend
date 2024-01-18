import {RootState} from "../store";

export const isLoadingSelector = (state: RootState):boolean => {
  return state.app.isLoading;
}