import baseApi from "./api";

const listEventsEvents = {
  query: ({
    limit,
    sort,
    before,
    after,
    applicationName,
    service,
    operation,
    type,
    search,
  } = {}) => ({
    url: `/events/events`,
    params: { limit, sort, before, after, applicationName, service, operation, type, search },
  }),
  providesTags: () => [{ type: "Events", id: `Events` }],
};

const readEventsEvent = {
  query: ({ id }) => ({
    url: `/events/events/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "Events", id: `Events_${args?.id}` }],
};

const listEventsWebhooks = {
  query: ({ limit, sort, before, after, search } = {}) => ({
    url: `/events/webhooks`,
    params: { limit, sort, before, after, search },
  }),
  providesTags: () => [{ type: "Events", id: `Webhooks` }],
};

const createEventsWebhook = {
  query: ({ body }) => ({
    url: `/events/webhooks`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [{ type: "Events", id: `Webhooks` }],
};

const readEventsWebhook = {
  query: ({ id }) => ({
    url: `/events/webhooks/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "Events", id: `Webhooks_${args?.id}` }],
};

const updateEventsWebhook = {
  query: ({ id, body }) => ({
    url: `/events/webhooks/${id}`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Events", id: `Webhooks_${args?.id}` },
    { type: "Events", id: `Webhooks` },
  ],
};

const deleteEventsWebhook = {
  query: ({ id }) => ({
    url: `/events/webhooks/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Events", id: `Webhooks_${args?.id}` },
    { type: "Events", id: `Webhooks` },
  ],
};

const endpoints = builder => ({
  listEventsEvents: builder.query(listEventsEvents),
  readEventsEvent: builder.query(readEventsEvent),
  listEventsWebhooks: builder.query(listEventsWebhooks),
  createEventsWebhook: builder.mutation(createEventsWebhook),
  readEventsWebhook: builder.query(readEventsWebhook),
  updateEventsWebhook: builder.mutation(updateEventsWebhook),
  deleteEventsWebhook: builder.mutation(deleteEventsWebhook),
});

const api = baseApi
  .injectEndpoints({ endpoints, overrideExisting: false })
  .enhanceEndpoints({ addTagTypes: ["Events"] });

export default api;
