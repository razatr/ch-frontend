import $api from "../http";
import {AxiosResponse} from "axios";
import { IFoodHistory } from "../models/FoodHistory";

export default class FoodHistoryService {
  static async fetchHistory(): Promise<AxiosResponse<IFoodHistory[]>> {
    return $api.get<IFoodHistory[]>('/history');
  }
}
