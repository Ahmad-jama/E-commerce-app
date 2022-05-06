import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "./../firebase";
import { getDocs, collection } from "@firebase/firestore";
const initialState = {
  loading: false,
  products: [],
};
const productRef = collection(db, "products");
export const getAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const data = await getDocs(productRef);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
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
