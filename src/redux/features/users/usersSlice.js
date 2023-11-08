import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword } from "firebase/auth"

const initialState={
     name:"",
     email:"",
     isLoading:true,
     isError:false,
     error:"",
}

const createUser=createAsyncThunk("userSlice/createUser",async()=>{
  createUserWithEmailAndPassword()
})
const usersSlice=createSlice({
    name:"usersSlice",
    initialState,
    reducers:{}
})
export default usersSlice.reducer;