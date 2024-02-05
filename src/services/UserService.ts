import $api from "../http";
import {AxiosResponse} from "axios";
import {IUser, ModIUser} from "../models/IUser";

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('/users');
  }

  static async updateUser(newUserData: IUser): Promise<AxiosResponse<ModIUser>> {
    return $api.post<ModIUser>('/update', newUserData);
  }
}