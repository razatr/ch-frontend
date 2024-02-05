import {RootState} from "..";
import {IUser, ModIUser} from "../../models/IUser";

const prepareUser = (user: ModIUser) => {
  let birthday = user.birthday;
  let lastActive = user.lastActive;
  let registrationData = new Date(user.registrationData);
  if(user.birthday) {
    birthday = new Date(user.birthday)
  } 
  else if(user.lastActive) {
    lastActive = new Date(user.lastActive)
  }
  const newUser = {...user, registrationData, birthday, lastActive} as IUser
  return newUser;
}

export const isAuthSelector = (state: RootState):boolean => {
  return state.auth.isAuth;
}
export const userSelector = (state: RootState):IUser => {
  return prepareUser(state.auth.user);
};
