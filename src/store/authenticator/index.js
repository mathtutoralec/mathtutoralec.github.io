import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers, extraReducers } from "./reducers";

const currentUserSlice = createSlice({
  name: "authenticator",
  initialState,
  reducers,
  extraReducers,
});

export const { setOAuthStatus, skipContactVerification } = currentUserSlice.actions;
export default currentUserSlice.reducer;
