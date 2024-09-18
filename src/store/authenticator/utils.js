import { Auth } from "aws-amplify";
import * as Cognito from "amazon-cognito-identity-js";
import { handleError } from "../../utils/notifications";

export const handleAmplifyError = error => {
  let { message, code } = error;
  switch (code) {
    case "UserNotFoundException":
      message = "User not found";
      break;
    case "CodeMismatchException":
      message = "Invalid code";
      break;
    case "InvalidParameterException":
      message = "Invalid email";
      break;
    case "UsernameExistsException":
      message = "An account with this email already exists";
      break;
    default:
    // Don't transform message
  }
  handleError(message, { y: "top", x: "center" });
  return Error(message);
};

export const validatePassword = password => {
  if (!password) return false; // Must have a password
  if (password.length < 8) return false; // Check for 8 chars or more
  if (password.toUpperCase() === password) return false; // All upper case (or not alpha)
  if (password.toLowerCase() === password) return false; // All lower case (or not alpha)
  if (!/\d/g.test(password)) return false; // Check for a number
  if (password.includes(" ")) return false; // Check for spaces
  return true;
};

const _expandPerms = compressed => {
  if (!compressed) return [];

  let expanded = "";
  const roots = compressed.split(";");
  roots.forEach(r => {
    const mods = r.split(":");
    const root = mods.shift();
    if (!mods.length) {
      if (expanded) expanded += ",";
      expanded += `${root}`;
    }
    mods.forEach(m => {
      const actions = m.split(",");
      const mod = actions.shift();
      if (!actions.length) {
        if (expanded) expanded += ",";
        expanded += `${root}:${mod}`;
      }
      actions.forEach(action => {
        if (expanded) expanded += ",";
        expanded += `${root}:${mod}:${action}`;
      });
    });
  });
  return expanded.split(",");
};

export const payloadToCurrentUser = async user => {
  const payload = user?.signInUserSession?.idToken?.payload;
  if (!payload) return null;

  const { email: unverifiedEmail, phone: unverifiedPhone } = await getUserVerification(user);

  const externalProvider = payload?.identities?.[0]?.providerName;
  const isExternal = !!externalProvider;

  return {
    id: payload.id,
    admin: payload.admin,
    organisationalEntity: payload.organisationalEntity,
    organisationName: payload.organisationName,
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    givenName: payload.givenName,
    familyName: payload.familyName,
    isCustomer: payload?.isCustomer === "true",
    isGlobal: payload?.isGlobal === "true",
    profilePicture: payload.profilePicture,
    profilePictureVersion: payload.profilePictureVersion,
    allow: _expandPerms(payload.allow),
    deny: _expandPerms(payload.deny),
    restricted: _expandPerms(payload.restricted),
    roles: payload.roles ? payload.roles.split(",") : [],
    products: payload.products ? payload.products.split(",") : [],
    unverifiedEmail,
    unverifiedPhone,
    preferredMFA: payload?.preferredMfaSetting,
    externalProvider,
    isExternal,
    noPerms: !!payload?.noPerms,
    tenant: payload?.tenant,
  };
};

export const getUserVerification = async user => {
  const contact = await Auth.verifiedContact(user);
  const response = { email: null, phone: null };
  if (contact && contact.unverified) {
    const { email, phone_number } = contact.unverified;
    if (email) response.email = email;
    if (phone_number) response.phone = phone_number;
  }
  return response;
};

export const validateVerificationCode = code => {
  const containsWhiteSpace = /\s/.test(code);
  if (!code || containsWhiteSpace) throw Error("Invalid verification code");
};

// Used for one time password (OTP) setup
export const setSessionFromTokens = (tokens, userPoolId, appClientId) => {
  const {
    tokens: { access: accessToken, id: idToken, refresh: refreshToken },
  } = tokens;

  const AccessToken = new Cognito.CognitoAccessToken({ AccessToken: accessToken });

  const session = new Cognito.CognitoUserSession({
    AccessToken,
    IdToken: new Cognito.CognitoIdToken({ IdToken: idToken }),
    RefreshToken: new Cognito.CognitoRefreshToken({ RefreshToken: refreshToken }),
  });

  const userPool = new Cognito.CognitoUserPool({
    UserPoolId: userPoolId,
    ClientId: appClientId,
  });

  const cognitoUser = new Cognito.CognitoUser({
    Username: AccessToken.payload.username,
    Pool: userPool,
  });

  cognitoUser.setSignInUserSession(session);
};
