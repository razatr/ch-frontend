export type IUser = UserAuth & UserInfo

export interface UserAuth {
  email: string,
  registrationData: number,
  isActivated: boolean,
  userId: string
}

export interface UserInfo {
  name?: string,
  surname?: string,
  lastActive?: number,
  birthday?: number,
  weight?: number,
  height?: number,
  avatar?: string,
}
