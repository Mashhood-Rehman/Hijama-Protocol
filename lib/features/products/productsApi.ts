import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProducts: builder.query<any[], void>({
            query: () => 'products',
            providesTags: ['Product'],
        }),
        getProductById: builder.query<any, string>({
            query: (id) => `products/${id}`,
            providesTags: (result, error, id) => [{ type: 'Product', id }],
        }),
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
