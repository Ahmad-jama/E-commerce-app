import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
};

export const getProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:8000/allproducts");
    const data = await response.json();
    return data;
  }
);

export const Pagination = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    getFilterdProduct: (state, action) => {
      const searchedProducts = state.products.filter((term) => {
        if (term.length < 0) {
          return false;
        }
        return term.title.toLowerCase().includes(action.payload.toLowerCase());
      });

      state.filteredProducts = searchedProducts;
    },
  },
  extraReducers: {
    [getProducts.pending]: () => {},

    [getProducts.fulfilled]: (state, action) => {
      state.filteredProducts = action.payload;
      state.products = action.payload;
    },
    [getProducts.rejected]: () => {},
  },
});

// Action creators are generated for each case reducer function
export const { getFilterdProduct } = Pagination.actions;

export default Pagination.reducer;
