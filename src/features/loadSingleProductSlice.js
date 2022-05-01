import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  product: {},
};

export const getSingleProduct = createAsyncThunk(
  "product/fetchSingleProduct",
  async (id) => {
    const response = await fetch(`http://localhost:8000/allproducts/${id}`);
    const data = await response.json();
    return data;
  }
);

export const loadProductSlice = createSlice({
  name: "loadProduct",
  initialState,
  reducers: {},
  extraReducers: {
    [getSingleProduct.pending]: (state) => {
      state.loading = true;
    },

    [getSingleProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [getSingleProduct.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
  },
});

export default loadProductSlice.reducer;
