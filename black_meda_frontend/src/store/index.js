import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search";

const store = configureStore({
  reducer: {
      search:searchSlice.reducer
  },
});

export const searchActions = searchSlice.actions
export default store;