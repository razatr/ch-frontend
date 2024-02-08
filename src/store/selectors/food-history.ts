import {RootState} from "..";
import { IFoodHistory } from "../../models/FoodHistory";

export const foodHistorySelector = (state: RootState):IFoodHistory[] => {
  return state.foodHistory.history;
}
