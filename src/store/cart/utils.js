import moment from 'moment';

const decimalCurrencies = ["GBP", "USD", "EUR"];

export const convertFromBaseForCurrency = (value, currency) => {
  // Convert pence or cents to pounds or euros / dollars
  if (decimalCurrencies.includes(currency)) return value / 100;
  return value;
};

export const getCurrencyString = (value, { currency="GBP", format="en-GB" } = {}) => {
  currency = currency?.toUpperCase();
  let formatter;
  try {
    formatter = new Intl.NumberFormat(format, { style: 'currency', currency });
  } catch (err) {
    return "Invalid Currency";
  }
  return formatter.format(convertFromBaseForCurrency(value, currency));
};

export const isMaxPurchasable = (purchasable, quantity) => {
  if (purchasable === null) return false;
  return quantity >= purchasable;
};

export const isSaleEnded = (saleEnds) => {
  if (saleEnds === null) return null;
  return new Date(saleEnds) < new Date();
};

export const formatSaleEndDate = (saleEnds) => {
  if (!saleEnds) return "";
  const ends = new Date(saleEnds);
  return moment(ends).fromNow();
};

export const getEmptyCart = (state) => {
  return {
    ...state,
    items: [],
    discount: 0,
    fees: 0,
    total: 0,
    subtotal: 0, 
    coupon: "",
    status: null,
  }
};

export const calculateTotals = (items, fees=0, discount=0) => {
  // returns [total, subtotal]
  if (!items?.length) return [0, 0];
  
  let subtotal = items.reduce((prev, curr) => {
    const { quantity, amount } = curr;
    return prev + (quantity * amount);
  }, 0);

  let total = subtotal - discount + fees;

  // Ensure >= 0
  if (subtotal < 0) subtotal = 0;
  if (total < 0) total = 0;

  return [total, subtotal];
};