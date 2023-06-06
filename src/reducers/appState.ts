/* eslint-disable no-param-reassign */

import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type TStatus = "idle" | "pending" | "error" | "success";
type TState = {
  status: TStatus;
};

const initialState: TState = {
  status: "idle",
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<TStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { setAppState } = appStateSlice.actions;

export const appState = appStateSlice.reducer;
