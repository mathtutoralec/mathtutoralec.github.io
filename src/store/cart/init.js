/**
 * item {
    id, // priceId for subscriptions and oneOffs, any unique identifier for a custom item
    type, // Same as SKU for oneOffs and subscriptions. Used with id to determine uniqueness
    productId, // productId for subscriptions and oneOffs, optional for custom items
    priceId, // priceId for subscriptions and oneOffs
    paymentType, // oneOff, subscription or custom
    sku, // The SKU of the product. Optional for custom items
    name, // Name to show in cart
    quantity, // The current quantity of the product in the cart
    amount, // The price of this product including all taxes in lowest common currency denomination (e.g. pence)
    total // amount * quantity,
    thumbnail, // optional. Thumbnail image to show in cart
    updatable, // optional. Can the product quantity be updated in the cart
    saleEnds, // optional. Date after which the product cannot be sold
    maxPurchase, // optional. Maximum number of this item that can be purchased
    available, // optional. Number available to purchase
    summary, // optional. Second line of text to show in the cart
    interval, // optional. For subscriptions, what is the price interfal
    billing, // optional. Data to be stored and used by the backend for billing this item
  }
 */

export const initialState = {
  items: [],
  discount: 0,
  fees: 0,
  total: 0,
  subtotal: 0,
  validation: null,

  coupon: "",
  status: null,
  currency: "GBP",
  showCart: false,
  timers: [],
};

