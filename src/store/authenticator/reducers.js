import {
  loadCurrentUser,
  refreshCurrentUser,
  signIn,
  federatedSignIn,
  signOut,
  signUp,
  checkUserVerification,
  completeNewPassword,
} from "./thunks";
import { initialState } from "./init";

export const extraReducers = builder => {
  builder

    .addCase(loadCurrentUser.pending, state => {
      state.loading = true;
    })
    .addCase(loadCurrentUser.fulfilled, (state, { payload }) => {
      if (!payload) return state;
      return {
        ...state,
        ...payload,
        loading: false,
        checked: true,
        authed: true,
        oAuthStatus: state.oAuthStatus,
      };
    })
    .addCase(loadCurrentUser.rejected, (state, { error }) => {
      return {
        ...initialState,
        error,
        checked: true,
        authed: false,
        configured: state.configured,
        oAuthStatus: state.oAuthStatus,
      };
    })

    .addCase(refreshCurrentUser.pending, state => {
      state.loading = true;
    })
    .addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
      if (!payload) return state;
      return {
        ...state,
        ...payload,
        loading: false,
        checked: true,
        authed: true,
      };
    })
    .addCase(refreshCurrentUser.rejected, (state, { error }) => {
      return {
        ...initialState,
        error,
        checked: true,
        authed: false,
        configured: state.configured,
        oAuthStatus: state.oAuthStatus,
      };
    })

    .addCase(signIn.fulfilled, (state, { payload }) => {
      const { newPasswordRequired, totpRequired } = payload;
      state.newPasswordRequired = newPasswordRequired;
      state.totpRequired = totpRequired;
      state.loading = false;
    })

    .addCase(signIn.rejected, (state, { error }) => {
      state.newPasswordRequired = false;
      state.totpRequired = false;
      state.error = error;
      state.loading = false;
    })

    .addCase(checkUserVerification.fulfilled, (state, { payload }) => {
      state.unverifiedEmail = payload.email;
      state.unverifiedPhone = payload.phone;
    })

    .addCase(signOut.fulfilled, state => {
      return {
        ...initialState,
        checked: true,
        authed: false,
        oAuthStatus: null,
        configured: state.configured,
      };
    })

    .addCase(completeNewPassword.fulfilled, state => {
      state.newPasswordRequired = true;
    })

    // Included for redux tracability
    .addCase(federatedSignIn.fulfilled, state => state)
    .addCase(federatedSignIn.rejected, state => state)
    .addCase(signUp.fulfilled, state => state)
    .addCase(signUp.rejected, state => state);
};

export const reducers = {
  setOAuthStatus(state, { payload }) {
    state.oAuthStatus = payload;
  },
  skipContactVerification(state) {
    state.skipContactVerification = true;
  },
};
