import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword } from "firebase/auth"
import auth from "../../../utils/firebase.config"

const initialState={
     name:"",
     email:"",
     isLoading:true,
     isError:false,
     error:"",
}

export const createUser=createAsyncThunk("userSlice/createUser",async({email,password})=>{
  const data=await createUserWithEmailAndPassword(auth,email,password);
  console.log(data);
  return ;
})
const usersSlice=createSlice({
    name:"usersSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(createUser.pending,(state)=>{
         state.email="",
         state.name='',
         state.isLoading=true,
         state.isError=false,
         state.error=''
        })
        .addCase(createUser.fulfilled,(state,{payload})=>{
            state.email=payload.email,
            state.name=payload.name,
            state.isLoading=false,
            state.isError=false,
            state.error=''
           })
           .addCase(createUser.rejected,(state,action)=>{
            state.email="",
            state.name='',
            state.isLoading=false,
            state.isError=true,
            state.error=action.error.message
           })
    }
})
export default usersSlice.reducer;