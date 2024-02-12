import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productList: [],
};

//API Call
const getProductsApi = async () => {
    let data = [];
  axios
    .get("http://localhost:8000/products")
    .then((res) => {
      console.log(res.data);
      data = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
    return data;
};
const addProductApi = async (data) => {
  axios
    .post("http://localhost:8000/products", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts(state) {
      const resData = getProductsApi();
      state.productList = resData;
    },
    addProduct(state, action) {
      addProductApi(action.payload);
    },
    reset: () => initialState,
  },
});

export const { addProduct, getProducts } = productSlice.actions;
export default productSlice.reducer;
