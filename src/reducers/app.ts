import {Action} from "@reduxjs/toolkit";

interface AppState {
  example: string
}

const initialState: AppState = {example: ''}

const appReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "EXAMPLE":
      return state
    default:
      return state
  }
}

export default appReducer
