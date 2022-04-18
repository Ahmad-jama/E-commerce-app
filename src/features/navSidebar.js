import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const navSidebar = createSlice({
  name: "navsidebar",
  initialState,
  reducers: {
    showNavSidebar: (state) => {
      state.value = true;
    },
    hideNavSidebar: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { hideNavSidebar, showNavSidebar } = navSidebar.actions;

export default navSidebar.reducer;
