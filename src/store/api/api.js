import { Auth } from "aws-amplify";
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const maxRetries = 0;

const prepareHeaders = async headers => {
  headers.set("Content-Type", "application/json");

  try {
    const user = await Auth.currentSession();
    const token = user?.getIdToken()?.getJwtToken();
    if (token) headers.set("Authorization", token);
  } catch {
    // Ignore if no user yet
  }

  return headers;
};

const getBaseUrl = api => api?.getState()?.env?.rest?.endpoint || "";

const baseQuery = (options, api, extraOptions) => {
  const baseUrl = getBaseUrl(api);
  const rawBaseQuery = fetchBaseQuery({ baseUrl, prepareHeaders });
  return rawBaseQuery(options, api, extraOptions);
};

const retriedBaseQuery = retry(baseQuery, { maxRetries });

export const api = createApi({
  baseQuery: retriedBaseQuery,
  endpoints: () => ({}),
});

export default api;
