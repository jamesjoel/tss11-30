import { createSlice } from '@reduxjs/toolkit'
import allMail from '../data/mail'

let MailSlice = createSlice({
    name : "mail",
    initialState : allMail,
    reducers : {

    }
})

export default MailSlice.reducer;