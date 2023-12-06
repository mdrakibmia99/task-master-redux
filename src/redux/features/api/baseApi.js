import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://task-master-redux-backend.vercel.app' }),
    tagTypes:['Tasks'],
    endpoints: () => ({}),
})

export const {useGetTasksQuery,useUpdateTaskMutation,useAddTaskMutation}=baseApi;
export default baseApi;