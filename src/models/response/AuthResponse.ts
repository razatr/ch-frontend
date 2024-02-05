import { ModIUser } from "../IUser";

export interface AuthResponse{
  accessToken: string;
  refreshToken: string;
  user: ModIUser;
}