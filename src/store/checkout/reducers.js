import _ from "lodash";
import { defaultAddress, defaultDetails, defaultValues } from "./init";

export const reducers = {
  setDetailsType(state, { payload }) {
    state.detailsType = payload;
  },

  setDetails(state, { payload }) {
    state.details = payload;
  },

  resetDetails(state) {
    state.details = _.cloneDeep(defaultDetails);
  },

  setAddressType(state, { payload }) {
    state.addressType = payload;
  },

  setAddress(state, { payload }) {
    state.address = payload;
  },

  resetAddress(state) {
    state.address = _.cloneDeep(defaultAddress);
  },

  resetCheckout() {
    return _.cloneDeep(defaultValues);
  },

  setError(state, { payload }) {
    state.error = payload?.message || "Failed to process payment";
    state.payment = null;
    state.paying = false;
  },

  setSuccess(state, { payload }) {
    // 3D Secure
    if (!state.payment) state.payment = {};
    state.payment.success = true;

    // Standard
    if (payload) {
      state.payment = payload;
    }

    state.paying = false;
  },

  resetError(state) {
    state.error = null;
  },

  setCaptureMethod(state, { payload = "automatic" }) {
    state.captureMethod = payload;
  },

  setPaymentStarted(state) {
    state.paying = true;
    state.error = null;
  },
};
