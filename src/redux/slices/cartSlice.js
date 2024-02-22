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
      let existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);
        toast.success("Item Added Successfully!", { theme: "dark" });
      } else if ((existingItem.qty != action.payload.qty)) {
        existingItem.qty = action.payload.qty;
        toast.info("Item Quantity Updated Successfully!", { theme: "dark" });
      }
      else {
        toast.error("Item is Already Added !!", { theme: "dark" });
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

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
