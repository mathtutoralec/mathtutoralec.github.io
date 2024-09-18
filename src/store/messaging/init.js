export const initialState = {
  token: null,
  firebaseToken: null,
  firebaseConfig: null,
  identity: null,
  pushType: undefined,

  connectionStatus: null, // connecting || connected || disconnecting || disconnected || denied
  connectionError: null,
  status: null,

  selectedConversation: null,

  contacts: {
    entities: {},
    ids: [],
    metadata: null,
  },

  reports: {
    entities: {},
    ids: [],
    metadata: null,
  },

  conversations: {
    entities: {},
    ids: [],
  },
  messages: {
    entities: {},
  },

  typing: {},
  users: {},

  trendingGifs: {},
  trendingGifsPagination: null,
  searchGifs: {},
  searchGifsPagination: null,
};
