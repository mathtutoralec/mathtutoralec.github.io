import { calculateTotals, getEmptyCart } from "./utils";

export const reducers = {
  updateItems(state, { payload }) {
    state.items = payload.items;
    state.total = payload.total;
    state.subtotal = payload.subtotal;
  },

  showCart(state) {
    state.showCart = true;
  },

  hideCart(state) {
    state.showCart = false;
  },

  setCoupon(state, { payload }) {
    state.coupon = payload;
  },

  setCurrency(state, { payload }) {
    state.currency = payload;
  },

  emptyCart(state) {
    return getEmptyCart(state);
  },

  upsertTimer(state, { payload }) {
    // Update or insert a new timer by type
    // Timers are UTC timestamp
    const { type, expiry } = payload;

    if (!state.timers) state.timers = [];

    const existing = state.timers.find(t => t.type === type);
    if (existing) existing.expiry = expiry;
    else state.timers.push({ type, expiry });
  },

  clearCartTimers(state, { payload }) {
    // Clears times of a given array of types
    // Removes all items from the cart with those types
    const types = payload?.types;
    if (types?.length) {
      state.timers = state.timers.filter(t => !types.includes(t.type));
      state.items = state.items.filter(i => !types.includes(i.type));
    } else {
      state.timers = [];
      state.items = [];
    }
  },

  setCheckCart(state, { payload }) {
    const { items } = state;
    const discount = payload?.discount?.amountOff || 0;
    const fees = payload?.fees || 0;
    const validation = payload?.validation || null;

    // Set validation, fees and discount from returned data
    state.fees = fees;
    state.discount = discount;
    state.validation = validation;

    // Recalculate sub total and total
    const [total, subtotal] = calculateTotals(items, fees, discount);
    state.total = total;
    state.subtotal = subtotal;
  },

  setError(state, { payload: error }) {
    const { items } = state;

    state.fees = 0;
    state.discount = 0;
    state.validation = null;
    state.coupon = "";
    state.error = error;

    // Recalculate sub total and total
    const [total, subtotal] = calculateTotals(items, 0, 0);
    state.total = total;
    state.subtotal = subtotal;
  },

  clearError(state) {
    state.error = null;
  },
};

