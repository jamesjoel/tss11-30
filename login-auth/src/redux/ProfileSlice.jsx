import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let getProfile = createAsyncThunk("getprofile", async()=>{
    
    // return {name : "rohit"}
    let response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
        headers : { Authorization : `Bearer ${localStorage.getItem('access_token')}` }
      });
    return response?.data;
})

let ProfileSlice = createSlice({
    name : "profile",
    initialState : {},
    extraReducers : builder =>{
        builder.addCase(getProfile.fulfilled, (state, action)=>{
            return action.payload;
        })
    },
    reducers : {
        profileLogout(){
            return {};
        }
    }
})

export default ProfileSlice.reducer;
export let {profileLogout} = ProfileSlice.actions;
export { getProfile };
