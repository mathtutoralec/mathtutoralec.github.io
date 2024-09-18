import baseApi from "./api";

const readConfigurationDetails = {
  query: () => ({
    url: `/configuration/details`,
  }),
  providesTags: () => [{ type: "Configuration" }],
};

const readConfigurationStats = {
  query: () => ({
    url: `/configuration/stats`,
  }),
  providesTags: () => [{ type: "ConfigurationStats" }],
};

const endpoints = builder => ({
  readConfigurationDetails: builder.query(readConfigurationDetails),
  readConfigurationStats: builder.query(readConfigurationStats),
});

const api = baseApi
  .injectEndpoints({ endpoints, overrideExisting: false })
  .enhanceEndpoints({ addTagTypes: ["Configuration"] });

export default api;
