import { createSlice } from '@reduxjs/toolkit'
import allMail from '../data/mail'

let MailSlice = createSlice({
    name : "mail",
    initialState : allMail,
    reducers : {
        changReadStatus(current_state, action){
            // action.payload = 3
           
           current_state.map(item=>{
                if(item.id==action.payload){
                    item.mail_status = 1;
                    return item;
                }
                else{
                    return item;
                }
            })

            // console.log(arr);
        }
    }

})


export default MailSlice.reducer;
export let {changReadStatus} = MailSlice.actions;