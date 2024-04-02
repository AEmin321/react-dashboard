import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/api/general/users/${id}`,
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery } = adminApi;
