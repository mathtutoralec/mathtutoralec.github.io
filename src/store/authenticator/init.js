export const initialState = {
  id: "",
  admin: false,
  organisationalEntity: "",
  organisationName: "",
  name: "",
  email: "",
  phone: "",
  givenName: "",
  familyName: "",
  s16Ids: [],
  isCustomer: false,
  profilePicture: null,
  profilePictureVersion: null,
  allow: [],
  deny: ["*"],
  restricted: [],
  roles: [],
  products: [],

  loading: false, // Is there an on-going action to check / refresh user auth
  checked: false, // Has the user been checked at least once - for app init
  authed: false, // Was there an authenticated user on the last check
  configured: false, // auth is configured
  oAuthStatus: null, // success || failed

  newPasswordRequired: false,
  unverifiedEmail: null,
  unverifiedPhone: null,
  skipContactVerification: false,

  isGlobal: false,
  tenant: null,
};
