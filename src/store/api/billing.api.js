import baseApi from "./api";

const readBillingConfig = {
  query: () => ({
    url: `/billing/config`,
  }),
  providesTags: () => [{ type: "Billing", id: "Config" }],
};

const updateBillingConfig = {
  query: ({ body }) => ({
    url: `/billing/config`,
    method: "PUT",
    body,
  }),
  invalidatesTags: () => [{ type: "Billing", id: "Config" }],
};

const enableBillingInvoicingProvider = {
  query: ({ body }) => ({
    url: `/billing/config/invoicing`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [{ type: "Billing", id: "Config" }],
};

const listBillingCustomers = {
  query: ({ ...filter } = {}) => ({
    url: `/billing/customers`,
    params: { ...filter },
  }),
  providesTags: () => [{ type: "Billing", id: `Customers` }],
};

const listProducts = {
  query: ({ ...filter } = {}) => ({
    url: `/billing/products`,
    params: { ...filter },
  }),
  providesTags: () => [{ type: "Billing", id: "Products" }],
};

const listProductsForCustomer = {
  query: ({ id, ...filter }) => ({
    url: `/billing/products/customer/${id}`,
    params: { ...filter },
  }),
  providesTags: (result, error, args) => [{ type: "Billing", id: `Products_Customer_${args?.id}` }],
};

const createProduct = {
  query: ({ body }) => ({
    url: `/billing/products`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [{ type: "Billing", id: `Products` }],
};

const readProduct = {
  query: ({ id }) => ({
    url: `/billing/products/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "Billing", id: `Products_${args?.id}` }],
};

const updateProduct = {
  query: ({ id, body }) => ({
    url: `/billing/products/${id}`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Billing", id: `Products_${args?.id}` },
    { type: "Billing", id: `Products` },
  ],
};

const listTransactions = {
  query: ({ ...filter } = {}) => ({
    url: `/billing/transactions`,
    params: { ...filter },
  }),
  providesTags: () => [{ type: "Billing", id: "Transactions" }],
};

const readTransaction = {
  query: ({ id }) => ({
    url: `/billing/transactions/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "Billing", id: `Transactions_${args?.id}` }],
};

const listRefunds = {
  query: ({ ...filter } = {}) => ({
    url: `/billing/refunds`,
    params: { ...filter },
  }),
  providesTags: () => [{ type: "Billing", id: "Refunds" }],
};

const readRefund = {
  query: ({ id }) => ({
    url: `/billing/refunds/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "Billing", id: `Refunds_${args?.id}` }],
};

const createRefund = {
  query: ({ id, message, amount }) => ({
    url: `/billing/refunds`,
    method: "POST",
    body: { transaction: id, message, amount, reason: "requested_by_customer" },
  }),
  invalidatesTags: () => [{ type: "Billing", id: "Refunds" }],
};

const confirmRefund = {
  query: ({ id }) => ({
    url: `/billing/refunds/${id}/confirm`,
    method: "PUT",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Billing", id: `Refunds_${args?.id}` },
    { type: "Billing", id: "Refunds" },
  ],
};

const addRefundMessage = {
  query: ({ id, message }) => ({
    url: `/billing/refunds/${id}/message`,
    method: "PUT",
    body: { message },
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Billing", id: "Refunds" },
    { type: "Billing", id: `Refunds_${args?.id}` },
  ],
};

const listDisputes = {
  query: ({ ...filter } = {}) => ({
    url: `/billing/disputes`,
    params: { ...filter },
  }),
  providesTags: () => [{ type: "Billing", id: `Disputes` }],
};

const readDisputes = {
  query: ({ id } = {}) => ({
    url: `/billing/disputes/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "Billing", id: `Disputes_${args?.id}` }],
};

const listInvoices = {
  query: ({ ...filter } = {}) => ({
    url: `/billing/invoices`,
    params: { ...filter },
  }),
  providesTags: () => [{ type: "Billing", id: `Invoices` }],
};

const createInvoice = {
  query: ({ body }) => ({
    url: `/billing/invoices`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [{ type: "Billing", id: `Invoices` }],
};

const readInvoice = {
  query: ({ id }) => ({
    url: `/billing/invoices/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "Billing", id: `Invoices_${args?.id}` }],
};

const updateInvoice = {
  query: ({ id, body }) => ({
    url: `/billing/invoices/${id}`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Billing", id: `Invoices_${args?.id}` },
    { type: "Billing", id: `Invoices` },
  ],
};

const deleteInvoice = {
  query: ({ id }) => ({
    url: `/billing/invoices/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Billing", id: `Invoices_${args?.id}` },
    { type: "Billing", id: `Invoices` },
  ],
};

const createInvoicePayment = {
  query: ({ id, body }) => ({
    url: `/billing/invoices/${id}/payment`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Billing", id: `Invoices_${args?.id}` },
    { type: "Billing", id: `Invoices` },
  ],
};

const deleteInvoicePayment = {
  query: ({ id, body }) => ({
    url: `/billing/invoices/${id}/payment`,
    method: "POST",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Billing", id: `Invoices_${args?.id}` },
    { type: "Billing", id: `Invoices` },
  ],
};

const listCoupons = {
  query: ({ ...filter } = {}) => ({
    url: `/billing/coupons`,
    params: { ...filter },
  }),
  providesTags: () => [{ type: "Billing", id: `Coupons` }],
};

const createCoupon = {
  query: ({ body }) => ({
    url: `/billing/coupons`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [{ type: "Billing", id: `Coupons` }],
};

const readCoupon = {
  query: ({ id }) => ({
    url: `/billing/coupons/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "Billing", id: `Coupons_${args?.id}` }],
};

const updateCoupon = {
  query: ({ id, body }) => ({
    url: `/billing/coupons/${id}`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Billing", id: `Coupons_${args?.id}` },
    { type: "Billing", id: `Coupons` },
  ],
};

const deleteCoupon = {
  query: ({ id }) => ({
    url: `/billing/coupons/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Billing", id: `Coupons_${args?.id}` },
    { type: "Billing", id: `Coupons` },
  ],
};

const listCouponCodes = {
  query: ({ ...filter } = {}) => ({
    url: `/billing/couponcodes`,
    params: { ...filter },
  }),
  providesTags: () => [{ type: "Billing", id: `CouponCodes` }],
};

const createCouponCode = {
  query: ({ body }) => ({
    url: `/billing/couponcodes`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [{ type: "Billing", id: `CouponCodes` }],
};

const readCouponCode = {
  query: ({ id }) => ({
    url: `/billing/couponcodes/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "Billing", id: `CouponCodes_${args?.id}` }],
};

const updateCouponCode = {
  query: ({ id, body }) => ({
    url: `/billing/couponcodes/${id}`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Billing", id: `CouponCodes_${args?.id}` },
    { type: "Billing", id: `CouponCodes` },
  ],
};

const deleteCouponCode = {
  query: ({ id }) => ({
    url: `/billing/couponcodes/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Billing", id: `CouponCodes_${args?.id}` },
    { type: "Billing", id: `CouponCodes` },
  ],
};

const checkoutPay = {
  query: ({
    type,
    details,
    addressType,
    address,
    paymentMethod,
    code,
    discount,
    currency,
    fees,
    total,
    subtotal,
    items,
    returnUrl,
    captureMethod = "automatic",
  }) => ({
    url: `/billing/pay`,
    body: {
      type,
      details,
      addressType,
      address,
      paymentMethod,
      code,
      discount,
      currency,
      fees,
      total,
      subtotal,
      items,
      returnUrl,
      captureMethod,
    },
    method: "POST",
  }),
  invalidatesTags: () => [{ type: "Billing", id: "Transactions" }],
};

const capturePayment = {
  query: ({ id, amount }) => ({
    url: `/billing/capture/${id}`,
    body: { amount },
    method: "POST",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Billing", id: "Transactions" },
    { type: "Billing", id: `Transactions_${args?.id}` },
  ],
};

const cancelPayment = {
  query: ({ id }) => ({
    url: `/billing/capture/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Billing", id: "Transactions" },
    { type: "Billing", id: `Transactions_${args?.id}` },
  ],
};

const endpoints = builder => ({
  readBillingConfig: builder.query(readBillingConfig),
  updateBillingConfig: builder.mutation(updateBillingConfig),
  enableBillingInvoicingProvider: builder.mutation(enableBillingInvoicingProvider),

  listBillingCustomers: builder.query(listBillingCustomers),

  listProducts: builder.query(listProducts),
  listProductsForCustomer: builder.query(listProductsForCustomer),
  createProduct: builder.mutation(createProduct),
  readProduct: builder.query(readProduct),
  updateProduct: builder.mutation(updateProduct),

  listTransactions: builder.query(listTransactions),
  readTransaction: builder.query(readTransaction),

  listRefunds: builder.query(listRefunds),
  readRefund: builder.query(readRefund),
  createRefund: builder.mutation(createRefund),
  confirmRefund: builder.mutation(confirmRefund),
  addRefundMessage: builder.mutation(addRefundMessage),

  listDisputes: builder.query(listDisputes),
  readDisputes: builder.query(readDisputes),

  listInvoices: builder.query(listInvoices),
  createInvoice: builder.mutation(createInvoice),
  readInvoice: builder.query(readInvoice),
  updateInvoice: builder.mutation(updateInvoice),
  deleteInvoice: builder.mutation(deleteInvoice),

  createInvoicePayment: builder.mutation(createInvoicePayment),
  deleteInvoicePayment: builder.mutation(deleteInvoicePayment),

  listCoupons: builder.query(listCoupons),
  createCoupon: builder.mutation(createCoupon),
  readCoupon: builder.query(readCoupon),
  updateCoupon: builder.mutation(updateCoupon),
  deleteCoupon: builder.mutation(deleteCoupon),

  listCouponCodes: builder.query(listCouponCodes),
  createCouponCode: builder.mutation(createCouponCode),
  readCouponCode: builder.query(readCouponCode),
  updateCouponCode: builder.mutation(updateCouponCode),
  deleteCouponCode: builder.mutation(deleteCouponCode),

  checkoutPay: builder.mutation(checkoutPay),
  capturePayment: builder.mutation(capturePayment),
  cancelPayment: builder.mutation(cancelPayment),
});

const api = baseApi
  .injectEndpoints({ endpoints, overrideExisting: false })
  .enhanceEndpoints({ addTagTypes: ["Billing"] });

export default api;
