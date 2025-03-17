import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart-slice";
import counterReducer from "./slices/counter-slice";
import productsReducer from "./slices/products-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterReducer,
    products: productsReducer,
  },
});

export default store;