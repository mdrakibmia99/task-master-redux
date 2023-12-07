import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import auth from "../../../utils/firebase.config"

const initialState = {
  user:false,
  name: "",
  email: "",
  isLoading: true,
  isError: false,
  error: "",
}

export const createUser = createAsyncThunk("userSlice/createUser", async ({ email, password, name,isGoogleSignIn}) => {
  let data;
  if(isGoogleSignIn){
    const provider = new GoogleAuthProvider();
    data = await signInWithPopup(auth, provider);
  }else{

    data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    })
    
  }
  // console.log(data, "login data");
  return {
    name: data.user.displayName,
    email: data.user.email
  };

  
})

export const loginUser = createAsyncThunk("userSlice/loginUser", async ({ email, password }) => {
  const data = await signInWithEmailAndPassword(auth, email, password);
  // console.log(data,"after login")
  return {
    name: data.user.displayName,
    email: data.user.email
  };
})


const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name,
        state.email = payload.email
    },
    toggleLoading: (state, { payload }) => {
      state.isLoading = payload
    },
    logOutUser: (state) => {
      state.name = '',
        state.email = ''
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.email = "",
        state.name = '',
        state.isLoading = true,
        state.isError = false,
        state.error = ''
    })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.email = payload.email,
          state.name = payload.name,
          state.isLoading = false,
          state.isError = false,
          state.error = ''
      })
      .addCase(createUser.rejected, (state, action) => {
        state.email = "",
          state.name = '',
          state.isLoading = false,
          state.isError = true,
          state.error = action.error.message
      })
      .addCase(loginUser.pending, (state) => {
        state.email = "",
          state.name = '',
          state.isLoading = true,
          state.isError = false,
          state.error = ''
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.email = payload.email,
          state.name = payload.name,
          state.isLoading = false,
          state.isError = false,
          state.error = ''
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.email = "",
          state.name = '',
          state.isLoading = false,
          state.isError = true,
          state.error = action.error.message
      })
  }
})
export const { setUser, toggleLoading, logOutUser } = usersSlice.actions;
export default usersSlice.reducer;
export const selectUser = (state) => state.usersSlice;