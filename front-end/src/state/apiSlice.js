import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  tagTypes: ["User", "Products", "Users"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/api/general/users/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => `/api/client/products`,
      providesTags: ["Products"],
    }),
    getUsers: build.query({
      query: () => `/api/general/users`,
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetUserQuery, useGetProductsQuery, useGetUsersQuery } =
  adminApi;
