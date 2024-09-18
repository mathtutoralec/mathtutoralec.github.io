import numeral from "numeral";

// ----------------------------------------------------------------------

export function fNumber(number) {
  return numeral(number).format();
}

export function fCurrency(number) {
  const format = number ? numeral(number).format("$0,0.00") : "";

  return result(format, ".00");
}

export function fPercent(number) {
  const format = number ? numeral(Number(number) / 100).format("0.0%") : "";

  return result(format, ".0");
}

export function fShortenNumber(number) {
  const format = number ? numeral(number).format("0.00a") : "";

  return result(format, ".00");
}

export function fData(number) {
  const format = number ? numeral(number).format("0.0 b") : "";

  return result(format, ".0");
}

function result(format, key = ".00") {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, "") : format;
}

// ----------------------------------------------------------------------
// Currency utils
// ----------------------------------------------------------------------

export const twoDecimalCurrencyRegex = /^(\d+)?(\.\d{0,2})?$/;
export const threeDecimalCurrencyRegex = /^(\d+)?(\.\d{0,3})?$/; // keep in case needed in future
export const zeroDecimalCurrencyRegex = /^(\d+)?$/; // keep in case needed in future

export const currencyOptions = [
  { label: "GBP", value: "GBP" },
  { label: "USD", value: "USD" },
  { label: "EUR", value: "EUR" },
];

export const currencyConfig = {
  GBP: {
    format: "$ 0,0.00",
    multiplier: 100,
    locale: "gbp",
    updateRegex: twoDecimalCurrencyRegex,
  },
  USD: {
    format: "$ 0,0.00",
    multiplier: 100,
    locale: "usd",
    updateRegex: twoDecimalCurrencyRegex,
  },
  EUR: {
    format: "$ 0,0.00",
    multiplier: 100,
    locale: "eur",
    updateRegex: twoDecimalCurrencyRegex,
  },
};

const getCurrencyConfig = currency => {
  return currencyConfig[currency.toUpperCase()];
};

export const isValidCurrency = (value, currency) => {
  if (!currency) return false;
  const currencyConfig = getCurrencyConfig(currency);
  return currencyConfig.updateRegex.test(value);
};

export const formatCurrencyToString = (value, currency) => {
  if (!value || !currency) return "";
  const currencyConfig = getCurrencyConfig(currency);
  numeral.locale(currencyConfig.locale || "gbp");
  const number = numeral(value).divide(currencyConfig.multiplier || 1);
  return number.format(currencyConfig.format);
};

export const parseCurrencyStrToLowestDenomination = (value, currency) => {
  if (!value || !currency) return "";
  const currencyConfig = getCurrencyConfig(currency);
  const transformedValue = numeral(value)
    .multiply(currencyConfig.multiplier || 1)
    .value();
  return transformedValue;
};

export const parseCurrencyStringToNumber = (value, currency) => {
  if (!value || !currency) return "";
  const currencyConfig = getCurrencyConfig(currency);
  const number = numeral(value).divide(currencyConfig.multiplier || 1);
  return number.format("0[.][00]");
};
