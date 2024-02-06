
import { Middleware } from '@reduxjs/toolkit';
import { setUser } from '../reducers/auth';

const myMiddleware: Middleware = (store) => (next) => (action) => {
  //@ts-ignore
  if(action.type === setUser) {
    //@ts-ignore
    const birthday = action.payload.birthday.getTime();
    //@ts-ignore
    const lastActive = action.payload.lastActive.getTime();
    //@ts-ignore
    const registrationData = action.payload.registrationData.getTime();
    //@ts-ignore
  
    const newPayload = { birthday, lastActive, registrationData, ...action.payload};
    //@ts-ignore
    next({...action, payload: newPayload});
  } else {
    next(action);
  }
};

export default myMiddleware;