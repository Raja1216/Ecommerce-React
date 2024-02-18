import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  productList: [],
  productDetails:null,
  status: "idle",
  error: null,
};

//API Call
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:8000/products");
    return response.data;
  }
);

export const getProductDetails = createAsyncThunk(
  "products/getProductDetails",
  async ({ id }) => {
    const response = await axios.get(`http://localhost:8000/products/${id}`);
    return response.data;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData) => {
    const response = await axios.post(
      "http://localhost:8000/products",
      productData
    );
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, productData }) => {
    const response = await axios.put(
      `http://localhost:8000/products/${id}`,
      productData
    );
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await axios.delete(`http://localhost:8000/products/${id}`);
    return id;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productList = action.payload;
        toast.success("Product get successfully!", { theme: "dark" });
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(`Error: ${action.error.message}`, { theme: "dark" });
      })

      .addCase(getProductDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productDetails = action.payload;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.productList.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.productList.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.productList[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.productList = state.productList.filter(
          (product) => product.id !== action.payload
        );
      });
  },
});

export default productSlice.reducer;
