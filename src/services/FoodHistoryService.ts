import $api from "../http";
import {AxiosResponse} from "axios";

export default class FoodHistoryService {
  static async fetchHistory(): Promise<AxiosResponse<any[]>> {
    return $api.get<any[]>('/history');
  }
}
