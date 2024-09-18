export const selectCart = state => state.cart;
export const selectItems = state => state.cart.items;
export const selectCoupon = state => state.cart.coupon;
export const selectDiscount = state => state.cart.discount;
export const selectValidation = state => state.cart.validation;
export const selectTotal = state => state.cart.total;
export const selectSubTotal = state => state.cart.subtotal;
export const selectFees = state => state.cart.fees;
export const selectStatus = state => state.cart.status;
export const selectCurrency = state => state.cart.currency;
export const selectShowCart = state => state.cart.showCart;
export const selectError = state => state.cart.error;

export const selectItemCount = state =>
  state.cart.items.reduce((prev, curr) => (prev += curr.quantity), 0);
export const selectItemsByType = type => state => state.cart.items.filter(i => i.type === type);
export const selectSubTotalByType = type => state =>
  state.cart.items.reduce((prev, curr) => {
    if (curr.type !== type) return prev;
    return (prev += curr.amount * curr.quantity);
  }, 0);

export const selectItemById = id => state => state.cart.items.find(i => i.id === id);
export const selectHasFees = state => !!state.cart.fees;
export const selectHasDiscount = state => !!state.cart.discount;
export const selectHasItems = state => !!state.cart.items?.length;
export const selectTimers = state => state.cart.timers;
export const selectTimerByTime = type => state => state.cart.timers.find(t => t.type === type);

