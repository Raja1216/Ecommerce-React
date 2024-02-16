import React, { useEffect, useState } from "react";
import "./ProductList.scss";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  let { productList } = useSelector((state) => state.product);
  const [sortByPrice, setSortByPrice] = useState(false);

  const handleSortByPrice = () => {
    setSortByPrice(!sortByPrice);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  productList = sortByPrice ? [...productList].sort((a, b) => a.price - b.price) : productList;
  console.log(productList);
  return (
    <div className="container" id="main_product">
      <header className="page_header glass_background">
        <span>{"Product List"}</span>
        <span onClick={handleSortByPrice} className="sort_btn">{sortByPrice ? "Clear Filter" : "Sort by Price" }</span>
      </header>
      <div className="row">
        {productList?.map((data, i) => (
          <Card key={i} product={data} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
