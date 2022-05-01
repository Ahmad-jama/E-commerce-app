import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import cartReducer from "./features/cartSlice";
import navReducer from "./features/navSidebar";
import categoryReducer from "./features/categorySidebar";
import searchReducer from "./features/searchSllice";
import loadProductsReducer from "./features/loadProductsSlice";
import loadSingleProductReducer from "./features/loadSingleProductSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
    navsidebar: navReducer,
    categorySidebar: categoryReducer,
    search: searchReducer,
    loadProducts: loadProductsReducer,
    loadSingleProduct: loadSingleProductReducer,
  },
});
