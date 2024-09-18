import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './init';
import { reducers, extraReducers } from './reducers';

const slice = createSlice({
  name: 'messaging',
  initialState,
  reducers,
  extraReducers,
});

export const { 
  updateConversation, setSelectedConversation, removeConversation, 
  setConnectionStatus, setConnectionError,
  addUser, setUnread, setIdentity, setFirebaseToken,
  addTyping, removeTyping, addMessages, removeMessages,
  participantJoined, participantLeft, participantUpdated, updatedAvatar,
} = slice.actions;
export default slice.reducer;