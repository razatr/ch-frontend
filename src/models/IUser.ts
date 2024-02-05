export type IUser = UserAuth & UserInfo

export type ModIUser = Omit<IUser, 'registrationData'> & { registrationData: number };

export interface UserAuth {
  email: string,
  registrationData: Date,
  isActivated: boolean,
  userId: string
}

export interface UserInfo {
  name?: string,
  surname?: string,
  lastActive?: Date,
  birthday?: Date,
  weight?: number,
  height?: number,
  avatar?: string,
}
