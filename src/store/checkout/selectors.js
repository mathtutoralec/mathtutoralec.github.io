export const selectCheckout = state => state.checkout;
export const selectDetailsType = state => state.checkout.detailType;
export const selectDetails = state => state.checkout.details;
export const selectAddressType = state => state.checkout.addressType;
export const selectAddress = state => state.checkout.address;
export const selectError = state => state.checkout.error;
export const selectPaying = state => state.checkout.paying;
export const selectCaptureMethod = state => state.checkout.captureMethod;

export const selectPayment = state => state.checkout.payment;
export const selectCheckoutPaymentSuccess = state => !!state?.checkout?.payment?.success;
export const selectCheckoutPaymentAction = state => state?.checkout?.payment?.action;

export const selectIsCreatingAccount = state => !!state.checkout.details?.createAccount;
