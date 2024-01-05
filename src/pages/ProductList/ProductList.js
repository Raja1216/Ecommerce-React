import React from "react";
import "./ProductList.scss";
import Card from "../../components/Card/Card";

const ProductList = () => {
  return (
    <div id="main_product">
      <header className="page_header glass_background">
        <span>Product List</span>
      </header>
      <div className="card_list">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ProductList;
