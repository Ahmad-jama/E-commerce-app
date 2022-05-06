import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDoc, doc } from "@firebase/firestore";
import { db } from "../firebase";
const initialState = {
  loading: false,
  product: {},
};

export const getSingleProduct = createAsyncThunk(
  "product/fetchSingleProduct",
  async (id) => {
    const productRef = doc(db, "products", id);

    const product = await getDoc(productRef, doc.id);
    return {
      ...product.data(),
      id,
    };
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
