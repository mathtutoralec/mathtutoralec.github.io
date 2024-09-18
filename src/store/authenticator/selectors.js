export const selectCurrentUser = state => state.authenticator;
export const currentUserIsLoading = state => state?.authenticator?.loading;
export const currentUserIsAuthed = state => state?.authenticator?.authed;
export const currentUserHasBeenChecked = state => state?.authenticator?.checked;
export const newPasswordIsRequired = state => state?.authenticator?.newPasswordRequired;
export const totpIsRequired = state => state?.authenticator?.totpRequired;
export const authIsConfigured = state => state?.authenticator?.configured;
export const oAuthStatus = state => state?.authenticator?.oAuthStatus;

export const selectUnverifiedPhone = state => state?.authenticator?.unverifiedPhone;
export const selectUnverifiedEmail = state => state?.authenticator?.unverifiedEmail;
export const selectPreferredMFA = state => state?.authenticator?.preferredMFA;
export const selectUnverifiedContact = state =>
  // Phone verification is not supported out of the box
  !!state?.currentUser?.unverifiedEmail; // || !!state?.currentUser?.unverifiedPhone;
export const selectSkipContactVerification = state => state?.authenticator?.skipContactVerification;
