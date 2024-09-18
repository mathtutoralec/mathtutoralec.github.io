import baseApi from "./api";

const readNotificationConfig = {
  query: () => ({
    url: `/notifications/config`,
  }),
  providesTags: () => [{ type: "Notifications", id: "Config" }],
};

const updateNotificationConfig = {
  query: ({ body }) => ({
    url: `/notifications/config`,
    method: "PUT",
    body,
  }),
  invalidatesTags: () => [{ type: "Notifications", id: "Config" }],
};

const sendNotifications = {
  query: ({ body }) => ({
    url: `/notifications/notifications`,
    method: "POST",
    body,
  }),
};

const listNotifications = {
  query: ({ limit, sort, before, after, search, status } = {}) => ({
    url: `/notifications/notifications`,
    params: { limit, sort, before, after, search, status },
  }),
};

const readNotification = {
  query: ({ id }) => ({
    url: `/notifications/notifications/${id}`,
  }),
};

const listNotificationLogs = {
  query: ({
    limit,
    sort,
    before,
    after,
    search,
    to,
    from,
    replyTo,
    service,
    notification,
  } = {}) => ({
    url: `/notifications/logs`,
    params: {
      limit,
      sort,
      before,
      after,
      search,
      to,
      from,
      replyTo,
      service,
      notification,
    },
  }),
};

const readNotificationLog = {
  query: ({ id }) => ({
    url: `/notifications/logs/${id}`,
  }),
};

const getNotificationPreferences = {
  query: ({ id }) => ({
    url: `/notifications/preferences/${id}`,
  }),
};

const updateNotificationPreferences = {
  query: ({ id }) => ({
    url: `/notifications/preferences/${id}`,
    method: "PUT",
  }),
};

const deleteNotificationPreferences = {
  query: ({ id }) => ({
    url: `/notifications/preferences/${id}`,
    method: "DELETE",
  }),
};

const registerNotificationPreferenceTargets = {
  query: ({ id }) => ({
    url: `/notifications/preferences/${id}/register`,
    method: "PUT",
  }),
};

const deregisterNotificationPreferenceTargets = {
  query: ({ id }) => ({
    url: `/notifications/preferences/${id}/deregister`,
    method: "PUT",
  }),
};

const replaceNotificationPreferenceTargets = {
  query: ({ id }) => ({
    url: `/notifications/preferences/${id}/replace`,
    method: "PUT",
  }),
};

const listNotificationTemplates = {
  query: () => ({
    url: `/notifications/templates`,
  }),
};

const listNotificationEmailTemplates = {
  query: ({ limit, sort, before, after, search } = {}) => ({
    url: `/notifications/templates/email`,
    params: { limit, sort, before, after, search },
  }),
  providesTags: () => [{ type: "Notifications", id: `Email` }],
};

const createNotificationEmailTemplate = {
  query: ({ body }) => ({
    url: `/notifications/templates/email`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [{ type: "Notifications", id: `Email` }],
};

const readNotificationEmailTemplate = {
  query: ({ id }) => ({
    url: `/notifications/templates/email/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "Notifications", id: `Email_${args?.id}` }],
};

const updateNotificationEmailTemplate = {
  query: ({ id, body }) => ({
    url: `/notifications/templates/email/${id}`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Notifications", id: `Email_${args?.id}` },
    { type: "Notifications", id: `Email` },
  ],
};

const deleteNotificationEmailTemplate = {
  query: ({ id }) => ({
    url: `/notifications/templates/email/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Notifications", id: `Email_${args?.id}` },
    { type: "Notifications", id: `Email` },
  ],
};

const listNotificationMessageTemplates = {
  query: ({ limit, sort, before, after, search } = {}) => ({
    url: `/notifications/templates/message`,
    params: { limit, sort, before, after, search },
  }),
  providesTags: () => [{ type: "Notifications", id: `Message` }],
};

const createNotificationMessageTemplate = {
  query: ({ body }) => ({
    url: `/notifications/templates/message`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [{ type: "Notifications", id: `Message` }],
};

const readNotificationMessageTemplate = {
  query: ({ id }) => ({
    url: `/notifications/templates/message/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "Notifications", id: `Message_${args?.id}` }],
};

const updateNotificationMessageTemplate = {
  query: ({ id, body }) => ({
    url: `/notifications/templates/message/${id}`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Notifications", id: `Message_${args?.id}` },
    { type: "Notifications", id: `Message` },
  ],
};

const deleteNotificationMessageTemplate = {
  query: ({ id }) => ({
    url: `/notifications/templates/message/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Notifications", id: `Message_${args?.id}` },
    { type: "Notifications", id: `Message` },
  ],
};

const listNotificationRecipientGroups = {
  query: ({ limit, sort, before, after, search } = {}) => ({
    url: `/notifications/recipientgroups`,
    params: { limit, sort, before, after, search },
  }),
  providesTags: () => [{ type: "Notifications", id: `Group` }],
};

const createNotificationRecipientGroup = {
  query: ({ body }) => ({
    url: `/notifications/recipientgroups`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [{ type: "Notifications", id: `Group` }],
};

const readNotificationRecipientGroup = {
  query: ({ id }) => ({
    url: `/notifications/recipientgroups/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "Notifications", id: `Group_${args?.id}` }],
};

const updateNotificationRecipientGroup = {
  query: ({ id, body }) => ({
    url: `/notifications/recipientgroups/${id}`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Notifications", id: `Group_${args?.id}` },
    { type: "Notifications", id: `Group` },
  ],
};

const deleteNotificationRecipientGroup = {
  query: ({ id }) => ({
    url: `/notifications/recipientgroups/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Notifications", id: `Group_${args?.id}` },
    { type: "Notifications", id: `Group` },
  ],
};

const endpoints = builder => ({
  readNotificationConfig: builder.query(readNotificationConfig),
  updateNotificationConfig: builder.mutation(updateNotificationConfig),

  sendNotifications: builder.mutation(sendNotifications),
  listNotifications: builder.query(listNotifications),
  readNotification: builder.query(readNotification),

  listNotificationLogs: builder.query(listNotificationLogs),
  readNotificationLog: builder.query(readNotificationLog),

  getNotificationPreferences: builder.query(getNotificationPreferences),
  updateNotificationPreferences: builder.mutation(updateNotificationPreferences),
  deleteNotificationPreferences: builder.mutation(deleteNotificationPreferences),
  registerNotificationPreferenceTargets: builder.mutation(registerNotificationPreferenceTargets),
  deregisterNotificationPreferenceTargets: builder.mutation(
    deregisterNotificationPreferenceTargets
  ),
  replaceNotificationPreferenceTargets: builder.mutation(replaceNotificationPreferenceTargets),

  listNotificationTemplates: builder.query(listNotificationTemplates),

  listNotificationEmailTemplates: builder.query(listNotificationEmailTemplates),
  createNotificationEmailTemplate: builder.mutation(createNotificationEmailTemplate),
  readNotificationEmailTemplate: builder.query(readNotificationEmailTemplate),
  updateNotificationEmailTemplate: builder.mutation(updateNotificationEmailTemplate),
  deleteNotificationEmailTemplate: builder.mutation(deleteNotificationEmailTemplate),

  listNotificationMessageTemplates: builder.query(listNotificationMessageTemplates),
  createNotificationMessageTemplate: builder.mutation(createNotificationMessageTemplate),
  readNotificationMessageTemplate: builder.query(readNotificationMessageTemplate),
  updateNotificationMessageTemplate: builder.mutation(updateNotificationMessageTemplate),
  deleteNotificationMessageTemplate: builder.mutation(deleteNotificationMessageTemplate),

  listNotificationRecipientGroups: builder.query(listNotificationRecipientGroups),
  createNotificationRecipientGroup: builder.mutation(createNotificationRecipientGroup),
  readNotificationRecipientGroup: builder.query(readNotificationRecipientGroup),
  updateNotificationRecipientGroup: builder.mutation(updateNotificationRecipientGroup),
  deleteNotificationRecipientGroup: builder.mutation(deleteNotificationRecipientGroup),
});

const api = baseApi
  .injectEndpoints({ endpoints, overrideExisting: false })
  .enhanceEndpoints({ addTagTypes: ["Notifications"] });

export default api;
