import { createSlice } from "@reduxjs/toolkit"

const initialState={
     name:"Md Rakib Mia",
     email:"rakibmia.dev@gmail.com",
}
const usersSlice=createSlice({
    name:"usersSlice",
    initialState,
    reducers:{}
})
export default usersSlice.reducer;