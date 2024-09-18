import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "aws-amplify";
import { handleError } from "../../utils/notifications";
import { validateFile, uploadFile } from "../../utils/files";

const headers = { "Content-Type": "application/json" };
const apiName = "service";

export const getToken = createAsyncThunk("messaging/getToken", async ({ pushType } = {}) => {
  // try {
  //   const options = { headers };
  //   if (pushType) options.queryStringParameters = { pushType };
  //   const url = `/messaging/token`;
  //   return await API.get(apiName, url, options);
  // } catch (err) {
  //   throw handleError("Failed to load chat");
  // }
});

export const getFirebaseConfig = createAsyncThunk("messaging/getFirebaseConfig", async ({ environment }) => {
  // try {
  //   const response = await fetch(`/firebase-config.json`);
  //   const config = await response.json();
  //   const envConfig = config?.[environment];
  //   return !envConfig ? {} : envConfig;
  // } catch {
  //   return {};
  // }
});

export const listContacts = createAsyncThunk("messaging/listContacts", async ({ filter, search } = {}) => {
  // try {
  //   const url = `/messaging/contacts/all`;
  //   const queryStringParameters = { ...filter, search };
  //   const options = { headers, queryStringParameters };

  //   const response = await API.get(apiName, url, options);
  //   const { contacts: data, ...metadata } = response;
  //   return { metadata, data };
  // } catch (err) {
  //   throw handleError(err);
  // }
});

export const createConversation = createAsyncThunk("messaging/createConversation", async ({ id: participant } = {}) => {
  // try {
  //   const url = `/messaging/conversations`;
  //   const options = { headers, body: { participant } };
  //   return await API.post(apiName, url, options);
  // } catch (err) {
  //   throw handleError(err);
  // }
});

export const createGroup = createAsyncThunk("messaging/createGroup", async ({ participants, name } = {}) => {
  // try {
  //   const url = `/messaging/groups`;
  //   const options = { headers, body: { participants, name } };
  //   return await API.post(apiName, url, options);
  // } catch (err) {
  //   throw handleError(err);
  // }
});

export const addParticipants = createAsyncThunk("messaging/addParticipants", async ({ group, participants } = {}) => {
  // try {
  //   const url = `/messaging/groups/${group}/participants/add`;
  //   const options = { headers, body: { participants } };
  //   return await API.put(apiName, url, options);
  // } catch (err) {
  //   throw handleError(err);
  // }
});

export const removeParticipants = createAsyncThunk(
  "messaging/removeParticipants",
  async ({ group, participants } = {}) => {
    // try {
    //   const url = `/messaging/groups/${group}/participants/remove`;
    //   const options = { headers, body: { participants } };
    //   return await API.put(apiName, url, options);
    // } catch (err) {
    //   throw handleError(err);
    // }
  }
);

export const makeAdmin = createAsyncThunk("messaging/makeAdmin", async ({ group, participants } = {}) => {
  // try {
  //   const url = `/messaging/groups/${group}/participants/admin`;
  //   const options = { headers, body: { participants } };
  //   return await API.put(apiName, url, options);
  // } catch (err) {
  //   throw handleError(err);
  // }
});

export const leaveGroup = createAsyncThunk("messaging/leaveGroup", async ({ group } = {}) => {
  // try {
  //   const url = `/messaging/groups/${group}/participants/leave`;
  //   const options = { headers };
  //   return await API.del(apiName, url, options);
  // } catch (err) {
  //   throw handleError(err);
  // }
});

export const deleteGroup = createAsyncThunk("messaging/deleteGroup", async ({ conversationId } = {}) => {
  // try {
  //   const url = `/messaging/conversations/${conversationId}`;
  //   const options = { headers };
  //   return await API.del(apiName, url, options);
  // } catch (err) {
  //   throw handleError(err);
  // }
});

export const reportMessage = createAsyncThunk("messaging/reportMessage", async ({ conversation, messageSid } = {}) => {
  // try {
  //   const url = `/messaging/reports/report`;
  //   const options = { headers, body: { conversation, message: messageSid } };
  //   return await API.post(apiName, url, options);
  // } catch (err) {
  //   throw handleError(err);
  // }
});

export const deleteMessage = createAsyncThunk(
  // "messaging/deleteMessage",
  // async ({ messageSid, conversationSid } = {}) => {
  //   try {
  //     const url = `/messaging/messages/${messageSid}/conversation/${conversationSid}`;
  //     const options = { headers };
  //     return await API.del(apiName, url, options);
  //   } catch (err) {
  //     throw handleError(err);
  //   }
  // }
);

export const updateGroupAvatar = createAsyncThunk(
  "messaging/updateGroupAvatar",
  async ({ group, selectedFile } = {}) => {
    try {
      const url = `/messaging/groups/${group}/avatar`;
      const options = { headers };

      validateFile(selectedFile);
      const response = await API.put(apiName, url, options);
      const updateForm = !!response.form ? response : { form: response, entity: null };
      const { form } = updateForm;
      await uploadFile(selectedFile, form);

      return updateForm;
    } catch (err) {
      throw handleError(err);
    }
  }
);

export const removeGroupAvatar = createAsyncThunk("messaging/removeGroupAvatar", async ({ group } = {}) => {
  // try {
  //   const url = `/messaging/groups/${group}/avatar`;
  //   const options = { headers };
  //   return await API.del(apiName, url, options);
  // } catch (err) {
  //   throw handleError(err);
  // }
});

export const sendBroadcastMessage = createAsyncThunk(
  "messaging/sendBroadcastMessage",
  async ({ from, to, type, body } = {}) => {
    // try {
    //   const url = `/messaging/messages/broadcast`;
    //   const options = { headers, body: { from, to, type, body } };
    //   return await API.post(apiName, url, options);
    // } catch (err) {
    //   throw handleError(err);
    // }
  }
);

export const listMessageReports = createAsyncThunk("messaging/listMessageReports", async ({ filter = {} } = {}) => {
  // try {
  //   const url = `/messaging/reports`;
  //   const options = { queryStringParameters: { ...filter } };
  //   const response = await API.get(apiName, url, options);
  //   const { reports: data, ...metadata } = response;
  //   return { data, metadata };
  // } catch (err) {
  //   throw handleError(err);
  // }
});

export const readMessageReport = createAsyncThunk("messaging/readMessageReport", async ({ id }) => {
  // try {
  //   const url = `/messaging/reports/${id}`;
  //   return await API.get(apiName, url);
  // } catch (err) {
  //   throw handleError(err);
  // }
});

export const updateMessageReport = createAsyncThunk("messaging/updateMessageReport", async ({ id, body }) => {
  // try {
  //   const url = `/messaging/reports/${id}`;
  //   const options = { headers, body };
  //   return await API.put(apiName, url, options);
  // } catch (err) {
  //   throw handleError(err);
  // }
});

export const deleteMessageReport = createAsyncThunk("messaging/deleteMessageReport", async ({ id }) => {
  // try {
  //   const url = `/messaging/reports/${id}`;
  //   return await API.del(apiName, url);
  // } catch (err) {
  //   throw handleError(err);
  // }
});

// GIFS
const trendingUrl = "https://api.giphy.com/v1/gifs/trending";
const searchUrl = "https://api.giphy.com/v1/gifs/search";

export const fetchTrendingGifs = createAsyncThunk(
  "messaging/fetchTrendingGifs",
  async ({ key: api_key, limit = 30, offset = 0 } = {}) => {
    // try {
    //   const query = new URLSearchParams({ api_key, limit, offset }).toString();
    //   const url = `${trendingUrl}?${query}`;
    //   const response = await fetch(url);
    //   return await response.json();
    // } catch (err) {
    //   throw handleError(err);
    // }
  }
);

export const fetchSearchGifs = createAsyncThunk(
  "messaging/fetchSearchGifs",
  async ({ key: api_key, limit = 30, offset = 0, search: q = "", newSearch = false } = {}) => {
    // try {
    //   // New Search is used by reducers to reset searched GIFs
    //   const query = new URLSearchParams({ api_key, limit, offset, q }).toString();
    //   const url = `${searchUrl}?${query}`;
    //   const response = await fetch(url);

    //   return await response.json();
    // } catch (err) {
    //   throw handleError(err);
    // }
  }
);
