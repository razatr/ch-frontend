import { ActionCreator, createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import { AppThunk } from "..";
import FoodHistoryService from "../../services/FoodHistoryService";
import { IFoodHistory } from "../../models/FoodHistory";

interface FoodHistoryState {
  history: IFoodHistory[]
}

const initialState: FoodHistoryState = {
  history: []
}

export const getHistoryAction: ActionCreator<AppThunk> = () => {
  return async (dispatch: Dispatch) => {
    try{
      const response = await FoodHistoryService.fetchHistory();
      dispatch(setHistory(response.data))
    } catch(e) {
      // @ts-ignore
      console.log(e.response?.data?.message)
    }
  }
}

const foodHistorySlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<IFoodHistory[]>) => {
      state.history = action.payload;
    }
  }
})

export const { setHistory } = foodHistorySlice.actions

export default foodHistorySlice.reducer;
