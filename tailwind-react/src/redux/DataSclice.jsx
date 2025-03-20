import { createSlice } from '@reduxjs/toolkit'

let DataSlice = createSlice({
    name : "data",
    initialState : [],
    reducers : {
        addNames(current_state, action){ // b.payload
            current_state.push(action.payload);
        },
        delNames(current_state, action){
            return current_state.filter(item=>item!=action.payload);
        }
    }
})

export default DataSlice.reducer;

export let {addNames, delNames} = DataSlice.actions;