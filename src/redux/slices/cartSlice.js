import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);
        toast.success("Item Added Successfully!", { theme: "dark" });
      } else {
        toast.info("Item Already Added!", { theme: "dark" });
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        toast.success("Item Removed Successfully!", { theme: "dark" });
      } else {
        toast.error("Item is not Present in cart!", { theme: "dark" });
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      toast.success("Cart Clear Successfully!", { theme: "dark" });
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
