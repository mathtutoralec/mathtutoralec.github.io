export const selectAll = (state) => {
  const ids = state?.ids;
  const entities = state?.entities;
  if (!ids?.length || !entities) return [];
  return ids.map(id => entities[id]);
};

export const selectEntities = (state) => state?.entities || {};
export const selectIds = (state) => state?.ids || [];
export const selectTotal = (state) => state?.ids?.length || 0;
export const selectById = (state, id) => state.entities[id];