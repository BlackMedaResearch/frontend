import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search";
import modalSlice from "./modal";

const store = configureStore({
  reducer: {
      search:searchSlice.reducer,
      modal:modalSlice.reducer
  },
});

export const searchActions = searchSlice.actions
export const modalActions = modalSlice.actions
export default store;