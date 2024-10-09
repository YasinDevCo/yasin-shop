//1
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/config";

//2
const initialState = {
  loading: false,
  products: [],
  error: "",
};

//4
const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return api.get("/products");
});

//3
const productsSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    //5
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

//6
export default productsSlice.reducer;
export { fetchProducts };
