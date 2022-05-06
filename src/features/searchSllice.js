import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
};

export const Pagination = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    getProeuct: (state, action) => {
      state.products = action.payload;
    },

    getFilterdProduct: (state, action) => {
      const searchedProducts = state.products.filter((term) => {
        if (term.length < 0) {
          state.filteredProducts = state.products;
        }
        return term.title.toLowerCase().includes(action.payload.toLowerCase());
      });

      state.filteredProducts = searchedProducts;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProeuct, getFilterdProduct } = Pagination.actions;

export default Pagination.reducer;
