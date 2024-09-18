import _ from "lodash";

export const addOneReducer = (state, data, { idField="id" }={}) => {
  const id = data[idField];
  const exists = !!state.entities[id];
  if (exists) return;
  state.ids.push(id);
  state.entities[id] = data;
};

export const addManyReducer = (state, data, { idField="id" }={}) => {
  data.forEach(e => addOneReducer(state, e, { idField }));
};

export const setOneReducer = (state, data, { idField="id" }={}) => {
  const id = data[idField];
  const exists = !!state.entities[id];
  if (!exists) state.ids.push(id);
  state.entities[id] = data;
};

export const setManyReducer = (state, data, { idField="id" }={}) => {
  data.forEach(e => setOneReducer(state, e, { idField }));
};

export const setAllReducer = (state, data, { idField="id" }={}) => {
  state.ids = data.map(e => e[idField]);
  state.entities = data.reduce((prev, curr) => {
    const id = curr[idField];
    prev[id] = curr;
    return prev;
  }, {});
};

export const removeOneReducer = (state, data, { idField="id" }={}) => {
  const id = data[idField];
  const exists = !!state.entities[id];
  if (!exists) return;
  state.ids = state.ids.filter(e => e !== id);
  delete state.entities[id];
};

export const removeManyReducer = (state, data, { idField="id" }={}) => {
  data.forEach(e => removeOneReducer(state, e, { idField }));
};

export const removeAllReducer = (state) => {
  state.ids = [];
  state.entities = {};
};

export const updateOneReducer = (state, data, { idField="id" }={}) => {
  const id = data[idField];
  const existing = state.entities[id];
  if (!existing) return;
  state.entities[id] = _.assign(existing, data);
};

export const updateManyReducer = (state, data, { idField="id" }={}) => {
  data.forEach(e => updateOneReducer(state, e, { idField }));
};

export const upsertOneReducer = (state, data, { idField="id" }={}) => {
  const id = data[idField];
  const existing = state.entities[id];

  if (!existing) addOneReducer(state, data, { idField });
  else updateOneReducer(state, data, { idField })
};

export const upsertManyReducer = (state, data, { idField="id" }={}) => {
  data.forEach(e => upsertOneReducer(state, e, { idField }));
};

export const defaultFulfilledReducer = (state) => {
  state.status = "loaded";
};

export const defaultPendingReducer = (state) => {
  state.status = 'loading';
};

export const defaultRejectedReducer = (state, { error }) => {
  state.status = 'loaded';
  state.error = error;
};

export const defaultListReducer = (state, { payload: { metadata, data } }) => {
  state.status = 'loaded';
  state.metadata = metadata;
  setAllReducer(state, data);
};

export const defaultListNamesReducer = (state, { payload: data }) => {
  state.status = 'loaded';
  upsertManyReducer(state, data);
};

export const defaultListMembersReducer = (state, { payload: { members, nonMembers } }) => {
  state.status = 'loaded';
  // TODO members shouldn't be loaded into entities object
};

export const defaultCreateReducer = (state, { payload: data }) => {
  state.status = 'loaded';
  setOneReducer(state, data);
};

export const defaultReadReducer = (state, { payload: data }) => {
  state.status = 'loaded';
  upsertOneReducer(state, data);
};

export const defaultUpdateReducer = (state, { payload: data }) => {
  state.status = 'loaded';
  upsertOneReducer(state, data);
};

export const defaultDeleteReducer = (state, { payload: data }) => {
  state.status = 'loaded';
  removeOneReducer(state, data?.id);
};

export const defaultReadFileReducer = (state, { payload: data }) => {
  state.status = 'loaded';
  // TODO get file URL then get the file
};

export const defaultUpdateFileReducer = (state, { payload: data }) => {
  state.status = 'loaded';
  // TODO get file Form then update the file
};