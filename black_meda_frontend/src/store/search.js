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
  },
});

export default searchSlice;
