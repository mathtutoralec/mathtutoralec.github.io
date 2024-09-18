import { cloneDeep } from "lodash";
import moment from "moment";

export const isDev = process.env.NODE_ENV === "development";

export const validatePassword = password => {
  if (!password) return false; // Must have a password
  if (password.length < 8) return false; // Check for 8 chars or more
  if (password.toUpperCase() === password) return false; // All upper case (or not alpha)
  if (password.toLowerCase() === password) return false; // All lower case (or not alpha)
  if (!/\d/g.test(password)) return false; // Check for a number
  if (password.includes(" ")) return false; // Check for spaces
  return true;
};

export const formatDate = (date, formatString = "Do MMM yyyy, HH:mm") => {
  try {
    if (!date) return "";
    const d = moment(date);
    if (!d.isValid()) return "";
    return d.format(formatString);
  } catch {
    return "";
  }
};
export const transformPhoneAddPrefix = phone => {
  if (!phone) return "";
  let updated = phone;
  if (!phone.startsWith("+440")) updated = `+440${phone}`;
  if (!phone.startsWith("+44")) updated = `+44${phone}`;
  return updated;
};

export const transformPhoneRemovePrefix = phone => {
  if (!phone) return "";
  let updated = phone;
  if (updated.startsWith("+44")) updated = updated.slice(3);
  if (updated.startsWith("0")) updated = updated.slice(1);
  return updated;
};

export const strToProperCase = str => {
  if (!str) return "";

  // Set string to lower case and then capitalise the first letter of each word.
  const arr = str.toLowerCase().split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
};

export const camelCaseToProperCase = str => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space before capital letters
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2") // Insert space within consecutive capital letters
    .replace(/^./, s => s.toUpperCase()); // Capitalize the first letter
};

export const strToKebabCase = str => {
  return str.trim().toLowerCase().replace(/\s+/g, "-");
};

export const snakeCaseToProperCase = str => {
  var words = str.split("_");
  var properCaseWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return properCaseWords.join(" ");
};

export const getInitials = string => {
  let initials = "";
  if (!string) return initials;
  const names = string.split(" ");
  if (names[0]) initials += names[0][0];
  if (names[1]) initials += names[1][0];
  return initials.toUpperCase();
};

export const getEnumLabel = (enumeration, value) => {
  if (!enumeration) return "";
  const e = enumeration.find(e => e.value === value);
  return e?.label;
};

const destructureToIdOrValue = obj => {
  if (typeof obj !== "object") return obj;
  if (obj?.id) return obj.id;
  if (obj?.value) return obj.value;
  return obj;
};

export const destructureManyToIdOrValue = arrOfObj => {
  return arrOfObj.map(obj => destructureToIdOrValue(obj));
};

export const structurePrimitiveArray = arrayOfPrimitives => {
  return arrayOfPrimitives.map(value => ({ value }));
};

export const transformPrimaryForSave = primary => {
  if (Array.isArray(primary)) return destructureManyToIdOrValue(primary);
  return destructureToIdOrValue(primary);
};

export const transformEnumForSave = enumData => {
  if (Array.isArray(enumData)) return destructureManyToIdOrValue(enumData);
  return destructureToIdOrValue(enumData);
};

export const getFormLabel = (label, required) => {
  return `${label}${required ? " *" : ""}`;
};

export const shuffle = inputArray => {
  //go backwards through the array and swap for a random lower index
  //https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
  const array = cloneDeep(inputArray);
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
