import React, { useState } from "react";
import './AddProduct.scss'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/productSlice";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [rating, setRating] = useState();
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  const handelAdd = () => {
    const req_data = {
      name: name,
      price: price,
      rating: rating,
      description:desc
    };
    dispatch(addProduct(req_data));
  }
  return (
    <>
      <div className="add-product-container">
        <form className="add-product-form glass_background">
          <span className="form-header">Add Product</span>
          <span className="form-body">
            <input
              placeholder="Enter Product Name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Enter Product Price"
              className="input-field"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              placeholder="Enter Product Rating"
              className="input-field"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <textarea
              placeholder="Enter Product Description"
              className="input-field"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </span>
          <span className="form-footer">
            <span>
              <Link to="/">Cancle</Link>
            </span>
            <span onClick={handelAdd}>Add</span>
          </span>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
