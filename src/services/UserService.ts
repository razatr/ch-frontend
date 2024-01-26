import $api from "../http";
import {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('/users');
  }

  static async updateUser(newUserData: IUser): Promise<AxiosResponse<IUser>> {
    return $api.post<IUser>('/update', newUserData);
  }
}