export const initialState = {
  environment: {
    customer: "",
    environment: "dev",
    type: "dev",
    version: "0.0.0",
  },
  support: { id: "" },
  bucket: "",
  domain: "",
  cognito: {
    region: "eu-west-2",
    idpRegion: "",
    userPoolId: "",
    appClientId: "",    
    idpId: "",
    domain: ""
  },
  stripe: { publicKey: "" },
  rest: { endpoint: "" },
  giphy: "",
  googleMaps: "",

  loaded: false,
};
