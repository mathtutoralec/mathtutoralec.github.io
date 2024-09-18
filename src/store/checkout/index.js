import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";

const cartSlice = createSlice({
  name: "checkout",
  initialState,
  reducers,
});

export const {
  setDetailsType,
  setDetails,
  resetDetails,
  setAddress,
  setAddressType,
  resetAddress,
  setPaymentStarted,
  resetCheckout,
  setSuccess,
  setError,
  setCaptureMethod,
} = cartSlice.actions;
export default cartSlice.reducer;
