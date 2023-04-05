import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const apiSlice=createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080",
    }),
    endpoints:(builder)=>({
        createTask: builder.mutation({
            query:(newTask)=>({
                url:"/api/auth/signin",
                method:"Post",
                body:newTask,
            })
        })
    })
})
export const {useCreateTaskMutation} = apiSlice;