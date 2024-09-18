import { 
  loadEnvSettings,
} from './thunks';

export const extraReducers = builder => {
  builder
    .addCase(loadEnvSettings.fulfilled, (state, { payload }) => {
      if (!payload) return;
      state.environment = payload.environment;
      state.support = payload.support;
      state.bucket = payload.bucket;
      state.domain = payload.domain;
      state.cognito = payload.cognito;
      state.stripe = payload.stripe;
      state.rest = payload.rest;
      state.giphy = payload.giphy;
      state.googleMaps = payload.googlemaps;
      state.loaded = true;
    })
};

export const reducers = {};