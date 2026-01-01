import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/fruitsSlices";

export const store = configureStore({
  reducer: {
    fruitsCart: cartReducer,
  },
});
