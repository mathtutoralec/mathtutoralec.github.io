export const conversations = {};
export const messages = {};
export const users = {};
export const medias = {};
export const participants = {};

import { handleError } from "utils/notifications";

const getTwilioObject = (objectMap, sid, type) => {
  const twilioObject = objectMap[sid];
  if (!twilioObject) {
    handleError(`${type} with SID ${sid} was not found.`);
  }
  return twilioObject;
};

// Conversations
export const getTwilioConversation = conversation =>
  getTwilioObject(conversations, conversation?.sid, "Conversation");

export const upsertTwilioConversation = conversation => {
  const id = conversation?.sid;
  if (id) conversations[id] = conversation;
};

export const removeTwilioConversation = conversation => {
  const id = conversation?.sid;
  if (id) delete conversations[id];
};

// Messages
export const getTwilioMessage = message => getTwilioObject(messages, message?.sid, "Message");

export const upsertTwilioMessages = messages => {
  messages.forEach(message => {
    const id = message?.sid;
    if (id) messages[id] = message;
  });
};

export const removeTwilioMessages = messages => {
  messages.forEach(message => {
    const id = message?.sid;
    if (id) delete messages[id];
  });
};

// Participants
export const getTwilioParticipant = participant =>
  getTwilioObject(participants, participant?.sid, "Participant");

export const upsertTwilioParticipant = participant => {
  const id = participant?.sid;
  if (id) participants[id] = participant;
};

export const removeTwilioParticipant = participant => {
  const id = participant?.sid;
  if (id) delete participants[id];
};

// Users
export const getTwilioUser = user => getTwilioObject(users, user?.sid, "User");

export const upsertTwilioUser = user => {
  const id = user?.sid;
  if (id) users[id] = user;
};

export const removeTwilioUser = user => {
  const id = user?.sid;
  if (id) delete users[id];
};

// Media
export const getTwilioMedia = media => getTwilioObject(medias, media?.sid, "Media");

export const upsertTwilioMedia = media => {
  const id = media?.sid;
  if (id) medias[id] = media;
};

export const removeTwilioMedia = media => {
  const id = media?.sid;
  if (id) delete medias[id];
};
