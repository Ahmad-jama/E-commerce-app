import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const categorySidebar = createSlice({
  name: "categorysidebar",
  initialState,
  reducers: {
    showCategorySidebar: (state) => {
      state.value = true;
    },
    hideCategorySidebar: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { hideCategorySidebar, showCategorySidebar } =
  categorySidebar.actions;

export default categorySidebar.reducer;
