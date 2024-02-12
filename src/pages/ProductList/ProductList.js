import React, { useEffect } from "react";
import "./ProductList.scss";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slices/productSlice";

const ProductList = () => {
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();
console.log(productList);
  useEffect(() => {
   const dd =  dispatch(getProducts());
    console.log(productList);
  },[])
  return (
    <div className="container" id="main_product">
      <header className="page_header glass_background">
        <span>Product List</span>
      </header>
      <div className="row">
        {/* {productList?.map((data, i) => (
          <Card key={i} />
        ))} */}
        <Card />
      </div>
    </div>
  );
};

export default ProductList;
