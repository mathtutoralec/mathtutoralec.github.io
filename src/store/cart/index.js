import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers,
});

export const {
  updateItems,
  showCart,
  hideCart,
  setCoupon,
  emptyCart,
  setCurrency,
  upsertTimer,
  clearCartTimers,
  setCheckCart,
  setError,
  clearError,
} = cartSlice.actions;
export default cartSlice.reducer;

