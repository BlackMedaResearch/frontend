import { createSlice } from "@reduxjs/toolkit";
import { dateString } from "./utils";

const initalState = {
  searchquery: "Apple",
  date: dateString,
  page: 1
};

const searchSlice = createSlice({
  name: "search",
  initialState: initalState,
  reducers: {
    updatesearchquery(state, action) {
      state.searchquery = action.payload;
    },
    decreasePage(state){
        if (state.page === 1) {
            return
        }
        state.page = state.page - 1
    },
    increasePage(state){
        if (state.page === 5) {
            return
        }
        state.page = state.page + 1
    }
  },
});

export default searchSlice;
