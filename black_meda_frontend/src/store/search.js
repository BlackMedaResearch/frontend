import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    searchquery:""
}

const searchSlice = createSlice({
    name:"search",
    initialState: initalState,
    reducers:{
        updatesearchquery(state,action){
            state.searchquery = action.payload
        }   
    }
})

export default searchSlice