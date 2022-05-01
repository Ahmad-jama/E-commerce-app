import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
};

export const getAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:8000/allproducts");
    const data = await response.json();
    return data;
  }
);

export const loadProductsSlice = createSlice({
  name: "loadProducts",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.loading = true;
    },

    [getAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
  },
});

export default loadProductsSlice.reducer;
