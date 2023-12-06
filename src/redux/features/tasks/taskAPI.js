import baseApi from "../api/baseApi";

const taskAPI=baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query({
            query:()=> '/tasks',
            providesTags: ['Tasks']
        }),
        updateTask:builder.mutation({
            query:({id,data})=>({
                url:`/tasks/${id}`,
                method:"PATCH",
                body:data
            }),
            invalidatesTags:['Tasks']
        }),
        addTask:builder.mutation({
            query:(task)=>({
                url:'/tasks',
                method:'POST',
                body:task
            }),
            invalidatesTags:['Tasks']
        }),
        deleteTask:builder.mutation({
            query:(id)=>({
                url:`/tasks/${id}`,
                method:'DELETE',
                body:id
            }),
            invalidatesTags:['Tasks']
        })
    })
})

export const {useGetTasksQuery,useAddTaskMutation,useUpdateTaskMutation,useDeleteTaskMutation}=taskAPI
