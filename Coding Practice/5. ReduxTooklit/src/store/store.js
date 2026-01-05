import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../carts/cartSlice";

export const store = configureStore({
  reducer: {
    cart: counterReducer,
  },
});
