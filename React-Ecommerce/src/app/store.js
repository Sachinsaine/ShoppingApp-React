import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../store/slices/cartSlice.js";

const store = configureStore({
  reducer: {
    pData: productReducer,
  },
});

export default store;
