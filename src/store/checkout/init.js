import _ from "lodash";

export const defaultDetails = { firstName: "", lastName: "", email: "", phone: "", password: "" };
export const defaultAddress = { line1: "", line2: "", city: "", county: "", postcode: "" };

export const defaultValues = {
  detailsType: "", // guest || customer
  details: { ...defaultDetails }, // null for existing customer
  // addressType: "", // new || existing
  // address: defaultAddress, // address || id of existing
  error: null,
  paying: false,
  captureMethod: "automatic",
};

export const initialState = _.cloneDeep(defaultValues);
