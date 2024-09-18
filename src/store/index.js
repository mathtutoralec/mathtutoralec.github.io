import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";

import api from "./api/api";

import env from "./env";
import authenticator from "./authenticator";
import messaging from "./messaging";
import cart from "./cart";
import checkout from "./checkout";

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,

  authenticator,
  env,
  messaging,
  cart,
  checkout,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const reducer = persistReducer(persistConfig, reducers);

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, "authenticator/signIn/fulfilled"],
    },
  })
    .concat(thunk)
    .concat(api.middleware);

const devTools = process.env.NODE_ENV !== "production";
const store = configureStore({ reducer, devTools, middleware });

export const persistor = persistStore(store);
export default store;
