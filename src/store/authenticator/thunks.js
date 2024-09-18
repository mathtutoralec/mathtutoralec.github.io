import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  payloadToCurrentUser,
  getUserVerification,
  handleAmplifyError,
  setSessionFromTokens,
  validateVerificationCode,
} from "./utils";
import { Auth, API } from "aws-amplify";
import { transformPhoneAddPrefix } from "../../utils/common";

const apiName = "service";
const headers = { "Content-Type": "application/json" };

export const loadCurrentUser = createAsyncThunk("authenticator/loadCurrentUser", async () => {
  const user = await Auth.currentAuthenticatedUser();

  // Transform JWT to current user structure
  const currentUser = await payloadToCurrentUser(user);
  return currentUser;
});

export const refreshCurrentUser = createAsyncThunk("authenticator/refreshCurrentUser", async () => {
  try {
    // Refresh the currently signed in user
    const currentSession = await Auth.currentSession();
    const refreshToken = await currentSession.getRefreshToken();
    const user = await Auth.currentAuthenticatedUser();

    return await new Promise(resolve => {
      user.refreshSession(refreshToken, async () => {
        const response = await payloadToCurrentUser(user);
        resolve(response);
      });
    });
  } catch (err) {
    return handleAmplifyError(err);
  }
});

export const getCurrentUser = createAsyncThunk("authenticator/getCurrentUser", async () => {
  // Get a CognitoUser representing the current signed in user
  return await Auth.currentAuthenticatedUser();
});

export const signIn = createAsyncThunk("authenticator/signIn", async ({ username, password }) => {
  try {
    const lcUsername = username?.toLowerCase();
    const cognitoUser = await Auth.signIn(lcUsername, password);
    const chal = cognitoUser?.challengeName;
    const newPasswordRequired = chal === "NEW_PASSWORD_REQUIRED";
    const totpRequired = chal === "SOFTWARE_TOKEN_MFA";
    return { newPasswordRequired, cognitoUser, totpRequired };
  } catch (err) {
    if (err?.code === "PasswordResetRequiredException") {
      return { passwordResetRequired: true };
    }
    return handleAmplifyError(err);
  }
});

export const signOut = createAsyncThunk("authenticator/signOut", async () => {
  try {
    return await Auth.signOut();
  } catch (err) {
    return handleAmplifyError(err);
  }
});

export const confirmSignUp = createAsyncThunk(
  "authenticator/confirmSignUp",
  async ({ email, code }) => {
    try {
      await Auth.confirmSignUp(email, code);
    } catch (err) {
      return handleAmplifyError(err);
    }
  }
);

export const resendSignUp = createAsyncThunk("authenticator/resendSignUp", async ({ email }) => {
  try {
    await Auth.resendSignUp(email);
  } catch (err) {
    return handleAmplifyError(err);
  }
});

export const signUp = createAsyncThunk(
  "authenticator/signUp",
  async ({ username, password, familyName, givenName, phone }) => {
    try {
      const lcUsername = username.toLowerCase();
      const transformedPhone = transformPhoneAddPrefix(phone);
      const response = await Auth.signUp({
        username: lcUsername,
        password,
        attributes: {
          family_name: familyName,
          given_name: givenName,
          phone_number: transformedPhone,
        },
      });
      if (!response) throw Error("Failed to create user");

      const userConfirmed = response?.userConfirmed;
      return { userConfirmed, username: lcUsername };
    } catch (err) {
      return handleAmplifyError(err);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "authenticator/forgotPassword",
  async ({ email }) => {
    try {
      const lcEmail = email?.toLowerCase();
      await Auth.forgotPassword(lcEmail);
    } catch (err) {
      return handleAmplifyError(err);
    }
  }
);

export const federatedSignIn = createAsyncThunk(
  "authenticator/federatedSignIn",
  async ({ provider, customState }) => {
    try {
      await Auth.federatedSignIn({ provider, customState });
    } catch (err) {
      return handleAmplifyError(err);
    }
  }
);

export const completeNewPassword = createAsyncThunk(
  "authenticator/completeNewPassword",
  async ({ cognitoUser, password }) => {
    try {
      await Auth.completeNewPassword(cognitoUser, password);
    } catch (err) {
      return handleAmplifyError(err);
    }
  }
);

export const checkUserVerification = createAsyncThunk(
  "authenticator/checkUserVerification",
  async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      return await getUserVerification(user);
    } catch (err) {
      return handleAmplifyError(err);
    }
  }
);

export const verifyCurrentUserAttribute = createAsyncThunk(
  "authenticator/verifyCurrentUserAttribute",
  async ({ contact }) => {
    try {
      await Auth.verifyCurrentUserAttribute(contact);
    } catch (err) {
      return handleAmplifyError(err);
    }
  }
);

export const verifyCurrentUserAttributeSubmit = createAsyncThunk(
  "authenticator/verifyCurrentUserAttributeSubmit",
  async ({ selectedContact, code }) => {
    try {
      validateVerificationCode(code);
      await Auth.verifyCurrentUserAttributeSubmit(selectedContact, code);
    } catch (err) {
      return handleAmplifyError(err);
    }
  }
);

export const forgotPasswordSubmit = createAsyncThunk(
  "authenticator/forgotPasswordSubmit",
  async ({ username, code, password }) => {
    try {
      const lcUsername = username?.toLowerCase();
      await Auth.forgotPasswordSubmit(lcUsername, code, password);
    } catch (err) {
      return handleAmplifyError(err);
    }
  }
);

export const handleOtp = createAsyncThunk(
  "authenticator/handleOtp",
  async ({ id, otp }, { getState }) => {
    try {
      if (!otp || !id) throw Error("Missing OTP or ID");

      const url = `/preferences/otp`;
      const body = { id, otp };
      const options = { headers, body };
      const tokens = await API.post(apiName, url, options);

      const { userPoolId, appClientId } = getState().env.cognito;
      setSessionFromTokens(tokens, userPoolId, appClientId);
    } catch (err) {
      throw handleAmplifyError(err);
    }
  }
);
