import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    hideModal: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { hideModal } = modalSlice.actions;

export default modalSlice.reducer;
