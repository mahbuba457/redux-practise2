import { createApi } from '@reduxjs/toolkit/query/react'

export const api =createApi({
    redicerPath:'api';
    baseQuery:fecthBaseQuery({baseUrl:'http//localhost:5000'}),
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:()=>'/products',
        }),
        getProducts:builder.query({
            query:(id)=>'/products/${id}',
        }),
    
    }),
});
export const {useGetProductQuery,useSingleProductQuery}=api;