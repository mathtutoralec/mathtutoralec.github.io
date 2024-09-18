import baseApi from "./api";

const readPreferencesUser = {
  query: () => ({
    url: `/preferences/user`,
  }),
  providesTags: () => [
    { type: "Preferences", id: "User" }
  ],
};

const updatePreferencesUser = {
  query: ({ familyName, givenName, email, phone }) => ({
    url: `/preferences/user`,
    method: "PUT",
    body: { familyName, givenName, email, phone },
  }),
  invalidatesTags: () => [
    { type: "Preferences", id: "User" }
  ],
};

const setPreferencesPassword = {
  query: ({ password }) => ({
    url: `/preferences/password/set`,
    method: "POST",
    body: { password },
  }),
};

const removePreferencesProfilePicture = {
  query: () => ({
    url: `/preferences/profilepicture`,
    method: "DELETE",
  }),
  invalidatesTags: () => [
    { type: "Preferences", id: "User" }
  ],
};

const updatePreferencesProfilePicture = {
  query: () => ({
    url: `/preferences/profilepicture`,
    method: "PUT",
  }),
  invalidatesTags: () => [
    { type: "Preferences", id: "User" }
  ],
};

const getPreferencesNotificationPreferences = {
  query: () => ({
    url: `/preferences/notifications/preferences`,
  }),
  providesTags: () => [
    { type: "Preferences", id: "Notification" }
  ],
};

const updatePreferencesNotificationPreferences = {
  query: ({ body }) => ({
    url: `/preferences/notifications/preferences`,
    method: "PUT",
    body,
  }),
  invalidatesTags: () => [
    { type: "Preferences", id: "Notification" }
  ],
};

const listPreferencesProducts = {
  query: ({ filter } = {}) => ({
    url: `/preferences/products`,
    params: { ...filter },
  }),
  providesTags: () => [
    { type: "Preferences", id: "Products" }
  ],
};

const readPreferencesProduct = {
  query: ({ id }) => ({
    url: `/preferences/products/${id}`,
  }),
  providesTags: (result, error, args) => [
    { type: "Preferences", id: args?.id }
  ],
};

const preferencesProductUnsubscribe = {
  query: ({ id }) => ({
    url: `/preferences/subscriptions/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Preferences", id: args?.id },
    { type: "Preferences", id: "Products" }
  ],
};

const preferencesProductResume = {
  query: ({ id }) => ({
    url: `/preferences/subscriptions/${id}/resume`,
    method: "PUT",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Preferences", id: args?.id },
    { type: "Preferences", id: "Products" }
  ],
};

const preferencesProductPause = {
  query: ({ id, until }) => ({
    url: `/preferences/subscriptions/${id}/pause`,
    method: "DELETE",
    params: { until }
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Preferences", id: args?.id },
    { type: "Preferences", id: "Products" }
  ],
};

const preferencesProductUnpause = {
  query: ({ id }) => ({
    url: `/preferences/subscriptions/${id}/pause`,
    method: "PUT",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Preferences", id: args?.id },
    { type: "Preferences", id: "Products" }
  ],
};

const listPreferencesTransactions = {
  query: ({ filter } = {}) => ({
    url: `/preferences/transactions`,
    params: { ...filter },
  }),
  providesTags: () => [
    { type: "Preferences", id: "Transactions" }
  ],
};

const readPreferencesTransaction = {
  query: ({ id }) => ({
    url: `/preferences/transactions/${id}`,
  }),
  providesTags: (result, error, args) => [
    { type: "Preferences", id: args?.id }
  ],
};

const listPreferencesRefundsForTransaction = {
  query: ({ id, filter = {} }) => ({
    url: `/preferences/refunds/transactions/${id}`,
    params: { ...filter },
  }),
  providesTags: (result, error, args) => [
    { type: "Preferences", id: `Refunds_${args?.id}` }
  ],
};

const createPreferencesRefund = {
  query: ({ id, message, amount }) => ({
    url: `/preferences/refunds/request`,
    body: { transaction: id, message, amount, reason: "requested_by_customer" },
    method: "POST",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Preferences", id: `Refunds_${args?.id}` }
  ],
};

const listPreferencesPaymentMethods = {
  query: () => ({
    url: `/preferences/paymentmethods`,
  }),
  providesTags: () => [
    { type: "Preferences", id: `PaymentMethods` }
  ],
};

const addPreferencesPaymentMethod = {
  query: ({ id, returnUrl }) => ({
    url: `/preferences/paymentmethods`,
    method: "POST",
    body: { 
      paymentMethod: id, 
      returnUrl,
    },
  }),
  invalidatesTags: () => [
    { type: "Preferences", id: `PaymentMethods` }
  ],
};

const removePreferencesPaymentMethod = {
  query: ({ id }) => ({
    url: `/preferences/paymentmethods/${id}`,
    method: "DELETE"
  }),
  invalidatesTags: () => [
    { type: "Preferences", id: `PaymentMethods` }
  ],
};

const setPreferencesDefaultPaymentMethod = {
  query: ({ id }) => ({
    url: `/preferences/paymentmethods/${id}/default`,
    method: "PUT"
  }),
  invalidatesTags: () => [
    { type: "Preferences", id: `PaymentMethods` }
  ],
};

const endpoints = (builder) => ({
  readPreferencesUser: builder.query(readPreferencesUser),
  updatePreferencesUser: builder.mutation(updatePreferencesUser),

  setPreferencesPassword: builder.mutation(setPreferencesPassword),

  removePreferencesProfilePicture: builder.mutation(removePreferencesProfilePicture),
  updatePreferencesProfilePicture: builder.mutation(updatePreferencesProfilePicture),

  getPreferencesNotificationPreferences: builder.query(getPreferencesNotificationPreferences),
  updatePreferencesNotificationPreferences: builder.mutation(updatePreferencesNotificationPreferences),

  listPreferencesProducts: builder.query(listPreferencesProducts),
  readPreferencesProduct: builder.query(readPreferencesProduct),
  preferencesProductUnsubscribe: builder.mutation(preferencesProductUnsubscribe),
  preferencesProductResume: builder.mutation(preferencesProductResume),
  preferencesProductPause: builder.mutation(preferencesProductPause),
  preferencesProductUnpause: builder.mutation(preferencesProductUnpause),

  listPreferencesTransactions: builder.query(listPreferencesTransactions),
  readPreferencesTransaction: builder.query(readPreferencesTransaction),
  listPreferencesRefundsForTransaction: builder.query(listPreferencesRefundsForTransaction),
  createPreferencesRefund: builder.mutation(createPreferencesRefund),

  listPreferencesPaymentMethods: builder.query(listPreferencesPaymentMethods),
  addPreferencesPaymentMethod: builder.mutation(addPreferencesPaymentMethod),
  removePreferencesPaymentMethod: builder.mutation(removePreferencesPaymentMethod),
  setPreferencesDefaultPaymentMethod: builder.mutation(setPreferencesDefaultPaymentMethod),
});

const api = baseApi
  .injectEndpoints({ endpoints, overrideExisting: false })
  .enhanceEndpoints({ addTagTypes: ["Preferences"] });

export default api;