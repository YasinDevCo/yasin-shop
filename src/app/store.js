//7
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
//25
import cartReducer from "../features/cart/cartSlice";
//8
const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

//9
export default store;
