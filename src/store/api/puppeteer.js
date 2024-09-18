import baseApi from "./api";

const puppeteerRun = {
  query: ({ type }) => ({
    url: `/puppeteer/run`,
    params: { type },
    method: "POST",
  }),
};

const endpoints = builder => ({
  puppeteerRun: builder.mutation(puppeteerRun),
});

const api = baseApi
  .injectEndpoints({ endpoints, overrideExisting: false })
  .enhanceEndpoints({ addTagTypes: ["Puppeteer"] });

export default api;
