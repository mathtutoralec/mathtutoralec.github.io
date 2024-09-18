import baseApi from "./api";

const getMessagingToken = {
  query: ({ pushType } = {}) => ({
    url: `/messaging/token`,
    params: { pushType },
  }),
};

const getFirebaseConfig = {
  queryFn: async ({ environment }) => {
    try {
      const response = await fetch(`/firebase-config.json`);
      const config = await response.json();
      const envConfig = config?.[environment];
      const data = !envConfig ? {} : envConfig;
      return { data };
    } catch (error) {
      return { error };
    }
  },
};

const listMessagingContacts = {
  query: ({ filter, search } = {}) => ({
    url: `/messaging/contacts`,
    params: { ...filter, search },
  }),
};

const createMessagingConversation = {
  query: ({ participant }) => ({
    url: `/messaging/conversations`,
    body: { participant },
    method: "POST",
  }),
};

const createMessagingGroup = {
  query: ({ participants, name }) => ({
    url: `/messaging/groups`,
    body: { participants, name },
    method: "POST",
  }),
};

const addMessagingParticipants = {
  query: ({ group, participants }) => ({
    url: `/messaging/groups/${group}/participants/add`,
    body: { participants },
    method: "PUT",
  }),
};

const removeMessagingParticipants = {
  query: ({ group, participants }) => ({
    url: `/messaging/groups/${group}/participants/remove`,
    body: { participants },
    method: "PUT",
  }),
};

const makeMessagingAdmin = {
  query: ({ group, participants }) => ({
    url: `/messaging/groups/${group}/participants/admin`,
    body: { participants },
    method: "PUT",
  }),
};

const leaveMessagingGroup = {
  query: ({ group }) => ({
    url: `/messaging/groups/${group}/participants/leave`,
    method: "DELETE",
  }),
};

const deleteMessagingGroup = {
  query: ({ conversationId }) => ({
    url: `/messaging/conversations/${conversationId}`,
    method: "DELETE",
  }),
};

const reportMessagingMessage = {
  query: ({ conversation, messageSid }) => ({
    url: `/messaging/reports/report`,
    body: { conversation, message: messageSid },
    method: "POST",
  }),
};

const deleteMessagingMessage = {
  query: ({ messageSid, conversationSid }) => ({
    url: `/messaging/messages/${messageSid}/conversation/${conversationSid}`,
    method: "DELETE",
  }),
};

const updateMessagingGroupAvatar = {
  query: ({ group }) => ({
    url: `/messaging/groups/${group}/avatar`,
    method: "PUT",
  }),
};

const removeMessagingGroupAvatar = {
  query: ({ group }) => ({
    url: `/messaging/groups/${group}/avatar`,
    method: "DELETE",
  }),
};

const sendBroadcastMessage = {
  query: ({ from, to, type, body }) => ({
    url: `/messaging/messages/broadcast`,
    body: { from, to, type, body },
    method: "POST",
  }),
};

const listMessagingReports = {
  query: ({ filter = {} } = {}) => ({
    url: `/messaging/reports`,
    params: { ...filter },
  }),
  providesTags: () => [{ type: "Messaging", id: "Reports" }],
};

const readMessagingReport = {
  query: ({ id }) => ({
    url: `/messaging/reports/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "Messaging", id: `Reports_${args?.id}` }],
};

const updateMessagingReport = {
  query: ({ id, body }) => ({
    url: `/messaging/reports/${id}`,
    body,
    method: "PUT",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Messaging", id: `Reports_${args?.id}` },
    { type: "Messaging", id: `Reports` },
  ],
};

const deleteMessagingReport = {
  query: ({ id }) => ({
    url: `/messaging/reports/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "Messaging", id: `Reports_${args?.id}` },
    { type: "Messaging", id: `Reports` },
  ],
};

const trendingMessagingGifs = {
  queryFn: async ({ limit = 30, offset = 0 } = {}, { getState }) => {
    try {
      const api_key = getState()?.env?.giphy;
      const query = new URLSearchParams({ api_key, limit, offset }).toString();
      const url = `https://api.giphy.com/v1/gifs/trending?${query}`;
      const response = await fetch(url);
      const data = await response.json();
      return { data };
    } catch (error) {
      return { error };
    }
  },
};

const searchMessagingGifs = {
  queryFn: async ({ limit = 30, offset = 0, search: q = "" } = {}, { getState }) => {
    try {
      const api_key = getState()?.env?.giphy;
      const query = new URLSearchParams({ api_key, limit, offset, q }).toString();
      const url = `https://api.giphy.com/v1/gifs/search?${query}`;
      const response = await fetch(url);
      const data = await response.json();
      return { data };
    } catch (error) {
      return { error };
    }
  },
};

const endpoints = builder => ({
  getMessagingToken: builder.query(getMessagingToken),
  getFirebaseConfig: builder.query(getFirebaseConfig),

  listMessagingContacts: builder.query(listMessagingContacts),

  createMessagingConversation: builder.mutation(createMessagingConversation),
  createMessagingGroup: builder.mutation(createMessagingGroup),
  removeMessagingParticipants: builder.mutation(removeMessagingParticipants),
  makeMessagingAdmin: builder.mutation(makeMessagingAdmin),
  leaveMessagingGroup: builder.mutation(leaveMessagingGroup),
  deleteMessagingGroup: builder.mutation(deleteMessagingGroup),
  reportMessagingMessage: builder.mutation(reportMessagingMessage),
  deleteMessagingMessage: builder.mutation(deleteMessagingMessage),
  updateMessagingGroupAvatar: builder.mutation(updateMessagingGroupAvatar),
  addMessagingParticipants: builder.mutation(addMessagingParticipants),
  removeMessagingGroupAvatar: builder.mutation(removeMessagingGroupAvatar),

  sendBroadcastMessage: builder.mutation(sendBroadcastMessage),

  listMessagingReports: builder.query(listMessagingReports),
  readMessagingReport: builder.query(readMessagingReport),
  updateMessagingReport: builder.mutation(updateMessagingReport),
  deleteMessagingReport: builder.mutation(deleteMessagingReport),

  trendingMessagingGifs: builder.query(trendingMessagingGifs),
  searchMessagingGifs: builder.query(searchMessagingGifs),
});

const api = baseApi
  .injectEndpoints({ endpoints, overrideExisting: false })
  .enhanceEndpoints({ addTagTypes: ["Messaging"] });

export default api;
