import { selectAll, selectById } from "utils/selectors";

// Loading and init
export const isLoaded = state => state.messaging.status === "loaded";
export const selectToken = state => state.messaging.token;
export const selectFirebaseToken = state => state.messaging.firebaseToken;
export const selectFirebaseConfig = state => state.messaging.firebaseConfig;
export const selectIdentity = state => state.messaging.identity;
export const selectPushType = state => state.messaging.pushType;

// Connection
export const selectIsConnected = state =>
  state.messaging.connectionStatus === "connected" && !state.messaging.connectionError;
export const selectConnectionStatus = state => state.messaging.connectionStatus;
export const selectConnectionError = state => state.messaging.connectionError;

// Contacts
export const selectContacts = state => selectAll(state.messaging.contacts);
export const selectContactsMetadata = state => state.messaging.contacts.metadata;
export const selectContactsStatus = state => state.messaging.contacts.status;
export const selectContact = id => state => selectById(state.messaging.contacts, id);

// Conversations
export const selectConversations = state => Object.values(state.messaging.conversations.entities);
export const selectConversationIds = state => state.messaging.conversations.ids;
export const selectSelectedConversationId = state => state.messaging.selectedConversation;
export const selectConversationById = id => state => state.messaging.conversations.entities[id];
export const selectConversationParticipants = id => state => {
  // Merge user props with participant props
  const participants = state.messaging.conversations?.entities?.[id]?.participants;
  const users = state.messaging?.users;
  if (!participants?.length || !Object.values(users)?.length) return {};

  return participants.reduce((acc, participant) => {
    const id = participant.id;
    const user = users[id];
    acc[id] = { ...participant, ...user };
    return acc;
  }, {});
};

// Messages
export const selectMessagesByConversationId = conversationId => state => {
  const conversationMessages = state.messaging?.messages?.entities?.[conversationId];
  if (!conversationMessages) return [];
  return Object.values(state.messaging.messages.entities[conversationId]);
};

// Typing
export const selectTypingByConversationId = id => state => {
  // Merge user props with participant props
  const typing = state.messaging?.typing?.[id];
  const users = state.messaging?.users;
  if (!typing?.length || !Object.values(users)?.length) return typing || [];

  return typing.reduce((acc, participant) => {
    const id = participant.id;
    const user = users[id];
    acc.push({ ...participant, ...user });
    return acc;
  }, []);
};

// User
export const selectConversationUserIsOnline = conversationId => state => {
  const identity = state.messaging.identity;

  const conversation = state.messaging.conversations.entities[conversationId];
  const { type, participants } = conversation || {};
  if (type !== "single" || !participants?.length) return null;

  const participant = participants.find(p => p.id !== identity);
  const user = state?.messaging?.users?.[participant.id];
  if (!user) return null;

  return user?.isOnline || null;
};

// Reports
export const selectReports = state => selectAll(state.messaging.reports);
export const selectReportsMetadata = state => state.messaging.reports.metadata;
export const selectReport = id => state => selectById(state.messaging.reports, id);

// GIFs
export const selectTrendingGifs = state => Object.values(state.messaging.trendingGifs);
export const selectTrendingGifsPagination = state => state.messaging.trendingGifsPagination;
export const selectSearchGifs = state => Object.values(state.messaging.searchGifs);
export const selectSearchGifsPagination = state => state.messaging.searchGifsPagination;
