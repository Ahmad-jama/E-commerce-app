import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import cartReducer from "./features/cart";
import navReducer from "./features/navSidebar";
import categoryReducer from "./features/categorySidebar";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
    navsidebar: navReducer,
    categorySidebar: categoryReducer,
  },
});
