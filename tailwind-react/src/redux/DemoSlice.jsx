import {createSlice} from '@reduxjs/toolkit'

let DemoSlice = createSlice({
    name : "demo",
    initialState : "indore",
    reducers : { // all actions come here
        changeCity1(){
            return "Bhopal";
        },
        changeCity2(){
            return "Mumbai";
        }
    }
});

export default DemoSlice.reducer;

export let { changeCity1, changeCity2 } = DemoSlice.actions;

/*
    "name" unique
    "initialState"
    "data in the slice ---- Change -- fn ---- reducers"


*/