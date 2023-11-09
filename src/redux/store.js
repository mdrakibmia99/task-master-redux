
import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasksSlice"
import userSlice from "./features/users/usersSlice"
import baseApi from "./features/api/baseApi";

const store=configureStore({
    reducer:{
        [baseApi.reducerPath]:baseApi.reducer,
        taskSlice:tasksSlice,
        userSlice:userSlice

    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(baseApi.middleware)})

export default store;