import baseApi from "./api";

const checkCart = {
  query: ({ couponCode, customLines, prices }) => ({
    url: `/billing/cart`,
    body: { couponCode, customLines, prices },
    method: "POST",
  }),
  providesTags: () => [{ type: "Cart" }],
};

const endpoints = builder => ({
  checkCart: builder.mutation(checkCart),
});

const api = baseApi
  .injectEndpoints({ endpoints, overrideExisting: false })
  .enhanceEndpoints({ addTagTypes: ["Cart"] });

export default api;
