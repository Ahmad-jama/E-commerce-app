import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    hideModal: (state) => {
      state.value = false;
    },
    showModal: (state) => {
      state.value = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { hideModal, showModal } = modalSlice.actions;

export default modalSlice.reducer;
