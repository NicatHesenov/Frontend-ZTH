import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlices = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
    calculateTotal: (state) => {
      let quantity = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        quantity += item.quantity;
        total += item.price * item.quantity;
      });

      state.totalPrice = total;
      state.totalQuantity = quantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decrementQuantity,
  clearCart,
  calculateTotal,
} = cartSlices.actions;

export default cartSlices.reducer;
