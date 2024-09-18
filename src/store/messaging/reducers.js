import {
  defaultFulfilledReducer,
  defaultPendingReducer,
  defaultRejectedReducer,
  defaultListReducer,
  defaultReadReducer,
} from "../../utils/reducers";
import {
  getToken,
  getFirebaseConfig,
  updateGroupAvatar,
  removeGroupAvatar,
  listContacts,
  createConversation,
  createGroup,
  deleteMessage,
  reportMessage,
  sendBroadcastMessage,
  makeAdmin,
  removeParticipants,
  addParticipants,
  leaveGroup,
  listMessageReports,
  readMessageReport,
  updateMessageReport,
  deleteMessageReport,
  fetchSearchGifs,
  fetchTrendingGifs,
} from "./thunks";

// Token and Config
const getTokenFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.status = "loaded";
};

const getFirebaseConfigFulfilled = (state, { payload }) => {
  state.firebaseConfig = payload;
};

// Contacts
const listContactsFulfilled = (state, data) => defaultListReducer(state.contacts, data);

// Reports
const listReportsFulfilled = (state, data) => defaultListReducer(state.reports, data);
const readReportFulfilled = (state, data) => defaultReadReducer(state.reports, data);

// GIFs
const fetchSearchGifsFulfilled = (state, { payload, meta }) => {
  const isNewSearch = !!meta?.arg?.newSearch; // Reset if new search term

  if (!state.searchGifs || isNewSearch) state.searchGifs = {};

  const { data = [], pagination = null } = payload || {};
  data.forEach(gif => {
    state.searchGifs[gif.id] = gif;
  });

  state.searchGifsPagination = pagination;
};

const fetchTrendingGifsFulfilled = (state, { payload }) => {
  if (!state.trendingGifs) state.trendingGifs = {};

  const { data = [], pagination = null } = payload || {};
  data.forEach(gif => {
    state.trendingGifs[gif.id] = gif;
  });

  state.trendingGifsPagination = pagination;
};

export const extraReducers = builder => {
  builder
    .addCase(listContacts.pending, defaultPendingReducer)
    .addCase(listContacts.fulfilled, listContactsFulfilled)
    .addCase(listContacts.rejected, defaultRejectedReducer)

    .addCase(getToken.pending, defaultPendingReducer)
    .addCase(getToken.fulfilled, getTokenFulfilled)
    .addCase(getToken.rejected, defaultRejectedReducer)

    .addCase(getFirebaseConfig.pending, defaultPendingReducer)
    .addCase(getFirebaseConfig.fulfilled, getFirebaseConfigFulfilled)
    .addCase(getFirebaseConfig.rejected, defaultRejectedReducer)

    .addCase(createConversation.pending, defaultPendingReducer)
    .addCase(createConversation.fulfilled, defaultFulfilledReducer)
    .addCase(createConversation.rejected, defaultRejectedReducer)

    .addCase(createGroup.pending, defaultPendingReducer)
    .addCase(createGroup.fulfilled, defaultFulfilledReducer)
    .addCase(createGroup.rejected, defaultRejectedReducer)

    .addCase(deleteMessage.pending, defaultPendingReducer)
    .addCase(deleteMessage.fulfilled, defaultFulfilledReducer)
    .addCase(deleteMessage.rejected, defaultRejectedReducer)

    .addCase(reportMessage.pending, defaultPendingReducer)
    .addCase(reportMessage.fulfilled, defaultFulfilledReducer)
    .addCase(reportMessage.rejected, defaultRejectedReducer)

    .addCase(makeAdmin.pending, defaultPendingReducer)
    .addCase(makeAdmin.fulfilled, defaultFulfilledReducer)
    .addCase(makeAdmin.rejected, defaultRejectedReducer)

    .addCase(removeParticipants.pending, defaultPendingReducer)
    .addCase(removeParticipants.fulfilled, defaultFulfilledReducer)
    .addCase(removeParticipants.rejected, defaultRejectedReducer)

    .addCase(leaveGroup.pending, defaultPendingReducer)
    .addCase(leaveGroup.fulfilled, defaultFulfilledReducer)
    .addCase(leaveGroup.rejected, defaultRejectedReducer)

    .addCase(addParticipants.pending, defaultPendingReducer)
    .addCase(addParticipants.fulfilled, defaultFulfilledReducer)
    .addCase(addParticipants.rejected, defaultRejectedReducer)

    .addCase(sendBroadcastMessage.pending, defaultPendingReducer)
    .addCase(sendBroadcastMessage.fulfilled, defaultFulfilledReducer)
    .addCase(sendBroadcastMessage.rejected, defaultRejectedReducer)

    .addCase(updateGroupAvatar.pending, defaultPendingReducer)
    .addCase(updateGroupAvatar.fulfilled, defaultFulfilledReducer)
    .addCase(updateGroupAvatar.rejected, defaultRejectedReducer)

    .addCase(removeGroupAvatar.pending, defaultPendingReducer)
    .addCase(removeGroupAvatar.fulfilled, defaultFulfilledReducer)
    .addCase(removeGroupAvatar.rejected, defaultRejectedReducer)

    .addCase(listMessageReports.pending, defaultPendingReducer)
    .addCase(listMessageReports.fulfilled, listReportsFulfilled)
    .addCase(listMessageReports.rejected, defaultRejectedReducer)

    .addCase(readMessageReport.pending, defaultPendingReducer)
    .addCase(readMessageReport.fulfilled, readReportFulfilled)
    .addCase(readMessageReport.rejected, defaultRejectedReducer)

    .addCase(updateMessageReport.pending, defaultPendingReducer)
    .addCase(updateMessageReport.fulfilled, defaultFulfilledReducer)
    .addCase(updateMessageReport.rejected, defaultRejectedReducer)

    .addCase(deleteMessageReport.pending, defaultPendingReducer)
    .addCase(deleteMessageReport.fulfilled, defaultFulfilledReducer)
    .addCase(deleteMessageReport.rejected, defaultRejectedReducer)

    .addCase(fetchSearchGifs.fulfilled, fetchSearchGifsFulfilled)
    .addCase(fetchTrendingGifs.fulfilled, fetchTrendingGifsFulfilled);
};

export const reducers = {
  // Status
  setConnectionStatus: (state, { payload: { status, error } }) => {
    state.connectionStatus = status;
    state.connectionError = error;
  },

  setConnectionError(state) {
    state.connectionError = "Error loading chat";
  },

  setIdentity(state, { payload: identity }) {
    state.identity = identity;
  },

  // Conversations
  updateConversation(state, { payload: conversation }) {
    const { sid } = conversation;

    // Unread is always 0 if the conversation is selected
    if (state.selectedConversation === sid) conversation.unread = 0;

    state.conversations.entities[sid] = conversation;
    if (!state.conversations.ids.includes(sid)) state.conversations.ids.push(sid);
  },

  removeConversation(state, { payload: conversation }) {
    const { sid } = conversation;
    delete state.conversations.entities[sid];
    state.conversations.ids = state.conversations.ids.filter(id => id !== sid);
  },

  setUnread(state, { payload: { conversationId, unread } }) {
    // Don't update unread if the conversation is selected
    if (state.selectedConversation === conversationId) return;

    state.conversations.entities[conversationId].unread = unread;
  },

  setSelectedConversation(state, { payload: conversationId }) {
    state.selectedConversation = conversationId;
  },

  // Messages
  addMessages(state, { payload: messages }) {
    messages.forEach(message => {
      const messageId = message.sid;
      const conversationId = message.conversationSid;

      if (!state.messages.entities[conversationId]) state.messages.entities[conversationId] = {};
      state.messages.entities[conversationId][messageId] = message;
    });
  },

  removeMessages(state, { payload: messages }) {
    messages.forEach(message => {
      const messageId = message.sid;
      const conversationId = message.conversationSid;

      if (!state.messages.entities?.[conversationId]) return state;
      delete state.messages.entities[conversationId][messageId];
    });
  },

  // Typing
  addTyping(state, { payload: { conversationId, participant } }) {
    if (!state.typing[conversationId]) state.typing[conversationId] = [];
    const existingIds = state.typing[conversationId].map(t => t.sid);
    if (!existingIds.includes(participant.sid)) {
      state.typing[conversationId].push(participant);
    }
  },

  removeTyping(state, { payload: { conversationId, participantId } }) {
    if (!state.typing?.[conversationId]?.length) return;
    const typing = state.typing[conversationId];
    const existingIds = typing.map(t => t.sid);
    if (existingIds.includes(participantId)) {
      state.typing[conversationId] = typing.filter(t => t.sid !== participantId);
    }
  },

  // Participants
  participantLeft(state, { payload: { participant } }) {
    const conversationSid = participant?.conversationSid;
    const conversation = state.conversations?.entities?.[conversationSid];
    if (!conversation?.participants?.length) return state;

    conversation.participants = conversation.participants.filter(p => p.sid !== participant.sid);
  },

  participantJoined(state, { payload: { participant } }) {
    const conversationSid = participant?.conversationSid;
    const conversation = state.conversations?.entities?.[conversationSid];
    if (!conversation) return state;
    if (!conversation?.participants?.length) conversation.participants = [];

    conversation.participants.push(participant);
  },

  participantUpdated(state, { payload: { participant } }) {
    const conversationSid = participant?.conversationSid;
    const conversation = state.conversations?.entities?.[conversationSid];

    if (!conversation) return state;
    if (!conversation?.participants?.length) conversation.participants = [];

    const index = conversation.participants.findIndex(p => p.sid === participant.sid);
    if (index > -1) conversation.participants[index] = participant;
    else conversation.participants.push(participant);
  },

  // Users
  addUser(state, { payload: { user } }) {
    state.users[user.identity] = user;
  },

  // Firebase
  setFirebaseToken(state, { payload: token }) {
    state.firebaseToken = token;
  },
};
