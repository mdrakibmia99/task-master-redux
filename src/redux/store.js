
import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasksSlice"
import userSlice from "./features/users/usersSlice"

const store=configureStore({
    reducer:{
        taskSlice:tasksSlice,
        userSlice:userSlice
    },
})
export default store;