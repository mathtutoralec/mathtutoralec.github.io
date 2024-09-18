import baseApi from "./api";

const listUserAuthenticationEvents = {
  query: ({ id, limit, before, after, sort, fields, type }) => ({
    url: `/authentication/events/${id}`,
    params: { limit, before, after, sort, fields, type },
  }),
  providesTags: () => [{ type: "Authentication", id: "Events" }],
};

const readAuthenticationUser = {
  query: ({ id }) => ({
    url: `/authentication/users/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "Authentication", id: `User_${args?.id}` }],
};

const signOut = {
  query: ({ id }) => ({
    url: `/authentication/signout`,
    body: { id },
    method: "POST",
  }),
};

const setMfaPreference = {
  query: ({ id, ...body }) => ({
    url: `/authentication/auth/${id}/mfa`,
    body,
    method: "POST",
  }),
  invalidatesTags: (result, error, args) => [{ type: "Authentication", id: `User_${args?.id}` }],
};

const impersonate = {
  query: ({ id }) => ({
    url: `/authentication/impersonate`,
    body: { id },
    method: "PUT",
  }),
};

const unimpersonate = {
  query: () => ({
    url: `/authentication/impersonate`,
    method: "DELETE",
  }),
};

const setPasswordForUser = {
  query: ({ id, password, requireReset = false }) => ({
    url: `/authentication/password/${id}/set`,
    method: "POST",
    body: { password, permanent: !requireReset },
  }),
};

const resetPasswordForUser = {
  query: ({ id }) => ({
    url: `/authentication/password/${id}/reset`,
    method: "POST",
  }),
};

const canReactivateAuthenticationUser = {
  query: ({ id }) => ({
    url: `/authentication/users/${id}/reactivate`,
  }),
};

const reactivateAuthenticationUser = {
  query: ({ id }) => ({
    url: `/authentication/users/${id}/reactivate`,
    method: "PUT",
  }),
  invalidatesTags: (result, error, args) => [{ type: "Authentication", id: `User_${args?.id}` }],
};

const listAuthenticationNotifications = {
  query: () => ({
    url: `/authentication/notifications`,
  }),
};

const listAuthenticationNotificationTokens = {
  query: () => ({
    url: `/authentication/notifications/tokens`,
  }),
};

const readAuthenticationNotification = {
  query: ({ name }) => ({
    url: `/authentication/notifications/${name}`,
  }),
  providesTags: (result, error, args) => [
    { type: "Authentication", id: `Notification_${args?.id}` },
  ],
};

const updateAuthenticationNotification = {
  query: ({ name, body }) => ({
    url: `/authentication/notifications/${name}`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Authentication", id: `Notification_${args?.id}` },
  ],
};

const testAuthenticationNotification = {
  query: ({ id, name }) => ({
    url: `/authentication/notifications/${name}/test/${id}`,
    method: "POST",
  }),
};

const listAuthenticationTenants = {
  query: ({ sort, fields, limit, before, after, search }) => ({
    url: `/authentication/tenants`,
    params: { sort, fields, limit, before, after, search },
  }),
  providesTags: () => [{ type: "Authentication", id: `Tenants` }],
};

const createAuthenticationTenant = {
  query: ({ body }) => ({
    url: `/authentication/tenants`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [{ type: "Authentication", id: `Tenants` }],
};

const readAuthenticationTenant = {
  query: ({ id }) => ({
    url: `/authentication/tenants/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "Authentication", id: `Tenants_${args?.id}` }],
};

const updateAuthenticationTenant = {
  query: ({ id, body }) => ({
    url: `/authentication/tenants/${id}`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Authentication", id: `Tenants_${args?.id}` },
    { type: "Authentication", id: `Tenants` },
  ],
};

const deleteAuthenticationTenant = {
  query: ({ id }) => ({
    url: `/authentication/tenants/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Authentication", id: `Tenants_${args?.id}` },
    { type: "Authentication", id: `Tenants` },
  ],
};

const listAuthenticationOAuths = {
  query: ({
    sort,
    fields,
    limit,
    before,
    after,
    search,
    provider,
    organisationalEntity,
    type,
    platform,
  }) => ({
    url: `/authentication/oauth`,
    params: {
      sort,
      fields,
      limit,
      before,
      after,
      search,
      provider,
      organisationalEntity,
      type,
      platform,
    },
  }),
  providesTags: () => [{ type: "Authentication", id: `OAuth` }],
};

const createAuthenticationOAuth = {
  query: ({ body }) => ({
    url: `/authentication/oauth`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [{ type: "Authentication", id: `OAuth` }],
};

const readAuthenticationOAuth = {
  query: ({ id }) => ({
    url: `/authentication/oauth/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "Authentication", id: `OAuth_${args?.id}` }],
};

const updateAuthenticationOAuth = {
  query: ({ id, body }) => ({
    url: `/authentication/oauth/${id}`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Authentication", id: `OAuth_${args?.id}` },
    { type: "Authentication", id: `OAuth` },
  ],
};

const deleteAuthenticationOAuth = {
  query: ({ id }) => ({
    url: `/authentication/oauth/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Authentication", id: `OAuth_${args?.id}` },
    { type: "Authentication", id: `OAuth` },
  ],
};

const getAuthenticationOAuthAuthorizationUrl = {
  query: ({ id, responseType, state }) => ({
    url: `/authentication/oauth/${id}/auth`,
    params: { responseType, state },
  }),
};

const getAuthenticationOAuthTokenResponse = {
  query: ({ id, grantType, code, refreshToken, force = false }) => ({
    url: `/authentication/oauth/${id}/token`,
    method: "POST",
    body: { grantType, code, refreshToken, force },
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Authentication", id: `OAuth_${args?.id}` },
    { type: "Authentication", id: `OAuth` },
  ],
};

const endpoints = builder => ({
  listUserAuthenticationEvents: builder.query(listUserAuthenticationEvents),

  readAuthenticationUser: builder.query(readAuthenticationUser),
  signOut: builder.mutation(signOut),
  setMfaPreference: builder.mutation(setMfaPreference),
  impersonate: builder.mutation(impersonate),
  unimpersonate: builder.mutation(unimpersonate),

  setPasswordForUser: builder.mutation(setPasswordForUser),
  resetPasswordForUser: builder.mutation(resetPasswordForUser),

  canReactivateAuthenticationUser: builder.query(canReactivateAuthenticationUser),
  reactivateAuthenticationUser: builder.mutation(reactivateAuthenticationUser),

  listAuthenticationNotifications: builder.query(listAuthenticationNotifications),
  listAuthenticationNotificationTokens: builder.query(listAuthenticationNotificationTokens),
  readAuthenticationNotification: builder.query(readAuthenticationNotification),
  updateAuthenticationNotification: builder.mutation(updateAuthenticationNotification),
  testAuthenticationNotification: builder.mutation(testAuthenticationNotification),

  listAuthenticationTenants: builder.query(listAuthenticationTenants),
  createAuthenticationTenant: builder.mutation(createAuthenticationTenant),
  readAuthenticationTenant: builder.query(readAuthenticationTenant),
  updateAuthenticationTenant: builder.mutation(updateAuthenticationTenant),
  deleteAuthenticationTenant: builder.mutation(deleteAuthenticationTenant),

  listAuthenticationOAuths: builder.query(listAuthenticationOAuths),
  createAuthenticationOAuth: builder.mutation(createAuthenticationOAuth),
  readAuthenticationOAuth: builder.query(readAuthenticationOAuth),
  updateAuthenticationOAuth: builder.mutation(updateAuthenticationOAuth),
  deleteAuthenticationOAuth: builder.mutation(deleteAuthenticationOAuth),
  getAuthenticationOAuthAuthorizationUrl: builder.query(getAuthenticationOAuthAuthorizationUrl),
  getAuthenticationOAuthTokenResponse: builder.mutation(getAuthenticationOAuthTokenResponse),
});

const api = baseApi
  .injectEndpoints({ endpoints, overrideExisting: false })
  .enhanceEndpoints({ addTagTypes: ["Authentication"] });

export default api;
