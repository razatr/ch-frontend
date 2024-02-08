import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";

interface UserState {
  user: IUser;
}

const initialState: UserState = {user: {
  email: '',
  isActivated: false,
  userId: '',
  registrationData: 0
}
}

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    }
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer;
