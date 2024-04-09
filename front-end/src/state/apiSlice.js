import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  tagTypes: ["User", "Products", "Users", "Transactions", "Geography", "Sales"],
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
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "api/client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "api/general/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "api/sales/overview",
      providesTags: ["Sales"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetUsersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
} = adminApi;
