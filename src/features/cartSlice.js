import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const sameItem = state.cartItems.findIndex(
        (item) => item.id == actions.payload.id
      );

      if (sameItem >= 0) {
        toast.warn(`${actions.payload.title.slice(0, 14)} already in cart`, {
          position: "bottom-right",
          autoClose: 3000,
        });
        return;
      }

      state.cartItems.push(actions.payload);
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems, { totalAmount: 0 })
      );
      toast.success(`${actions.payload.title.slice(0, 14)} add to the cart`, {
        position: "bottom-right",
        autoClose: 3000,
      });
    },

    removeFromCart: (state, actions) => {
      const newArray = state.cartItems.filter(
        (items) => items.id !== actions.payload.id
      );
      toast.error(`${actions.payload.title.slice(0, 14)} removed from cart `, {
        position: "bottom-right",
        autoClose: 3000,
      });
      state.cartItems = newArray;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    incressQuantity: (state, actions) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id == actions.payload.id
      );
      state.cartItems[itemIndex].quantity += 1;
    },

    decressQuantity: (state, actions) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id == actions.payload.id
      );

      if (state.cartItems[itemIndex].quantity == 1) {
        const newArray = state.cartItems.filter(
          (items) => items.id !== actions.payload.id
        );

        state.cartItems = newArray;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else {
        state.cartItems[itemIndex].quantity -= 1;
      }
    },
    getTotal: (state, actions) => {
      const total = state.cartItems.reduce((cartTotal, cartItem) => {
        const { quantity, newPrice } = cartItem;
        const itemTotal = quantity * newPrice;
        cartTotal += itemTotal;
        return cartTotal;
      }, 0);
      state.totalAmount = total;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  incressQuantity,
  decressQuantity,
  getTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
