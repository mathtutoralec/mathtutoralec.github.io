import { matchIsValidTel } from "mui-tel-input";
import * as yup from "yup";

export const pointSchemaTest = value => {
  if (value === "") return false;
  if (isNaN(parseFloat(value))) return false;
  return true;
};

export const mongoObjectIdTest = value => {
  if (!value) return true;
  const objectIdRegex = /^[0-9a-f]{24}$/;
  return objectIdRegex.test(value);
};

export const phoneNumberTest = value => {
  if (!value) return true;
  return matchIsValidTel(value);
};

export const getPointSchema = name => {
  const errorMessage = `${name} must be a pair of numbers representing longitude and latitude`;
  return yup.object({
    coordinates: yup.array().test(`${name}-point-test`, errorMessage, pointSchemaTest),
  });
};

export const getMongoIdSchema = (name = "id") => {
  const errMsg = "Must a be valid Mongo ID - 24 characters contains 0-9, a-f and A-F";
  return yup.string(errMsg).test(`valid-${name}`, errMsg, mongoObjectIdTest);
};

export const getNameSchema = () => {
  const errMsg = "Name is required and must only contain lowercase characters and hyphens";
  const nameRegex = /^[a-zA-Z0-9-]+$/;
  return yup.string(errMsg).matches(nameRegex, errMsg).required(errMsg);
};

export const getLabelSchema = () => {
  const errMsg = "Label is a required field";
  return yup.string(errMsg).required(errMsg);
};

export const getPhoneSchema = (name = "phone") => {
  const errMsg = "Please enter a valid phone number";
  return yup.string(errMsg).test(`valid-${name}`, errMsg, phoneNumberTest);
};

export const getEnumTest = (testEnum, { required = true } = {}) => {
  const test = value => {
    if (testEnum.includes(value)) return true;
    if (testEnum.map(option => option?.value).includes(value)) return true;
    if (!value && !required) return true;
    return false;
  };
  return test;
};

export const getJsonErrors = value => {
  try {
    if (!value) return null;
    JSON.parse(value);
    return null;
  } catch (err) {
    return err.toString();
  }
};

const runTests = (value, tests = []) => {
  for (const test of tests) {
    if (!test(value)) return false;
  }
  return true;
};

/* NUMBER SCHEMAS AND TESTS
  All test functions assume the number has first been parsed to a float.
*/
export const isNumber = value => !Number.isNaN(value);
export const isInteger = value => !(value % 1);
export const isPositive = value => value > 0;
export const isNotNegative = value => value >= 0;

export const getPositiveIntegerSchema = (name, error) => {
  return yup.string().test(name, error, value => {
    const parsedValue = parseFloat(value);
    return runTests(parsedValue, [isNumber, isInteger, isPositive]);
  });
};

export const getNonNegativeIntegerSchema = (name, error) => {
  return yup.string().test(name, error, value => {
    const parsedValue = parseFloat(value);
    return runTests(parsedValue, [isNumber, isInteger, isNotNegative]);
  });
};
