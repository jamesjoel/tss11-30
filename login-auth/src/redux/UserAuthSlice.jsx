import { createSlice } from '@reduxjs/toolkit'

let UserAuthSlice = createSlice({
    name : "auth",
    initialState : false,
    reducers : {
        isLoggedIn(state, action){
            return action.payload;
        },
        checkIsLoggedIn(){
            if(localStorage.getItem("access_token")){
                return true;
            }
            else{
                return false;
            }
        }
    }
})

export default UserAuthSlice.reducer;

export let {isLoggedIn, checkIsLoggedIn} = UserAuthSlice.actions;