import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  showModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initalState,
  reducers: {
    updateShowModal(state, action) {
      state.showModal = action.payload;
    },
  },
});
export default modalSlice;
