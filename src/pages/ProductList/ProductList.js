import React from "react";
import "./ProductList.scss";
import Card from "../../components/Card/Card";

const ProductList = () => {
  return (
    <div className="container" id="main_product">
      <header className="page_header glass_background">
        <span>Product List</span>
      </header>
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ProductList;
