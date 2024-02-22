import React, { useState } from "react";
import "./Card.scss";
import RatingStars from "../Rating/RatingStars";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { deleteProduct, updateProduct } from "../../redux/slices/productSlice";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [desc, setDesc] = useState("");
  // const bgImage =
  //   "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80";

  const handleEditClick = (product) => {
    setName(product.name);
    setPrice(product.price);
    setRating(product.rating);
    setDesc(product.description);

    setIsEditing(!isEditing);
  };

  const handleSaveClick = (prod) => {
    const req_data = {
      name: name,
      price: price,
      rating: rating,
      description: desc,
      images: prod.images,
    };
    dispatch(updateProduct({ id: prod.id, productData: req_data }));
    setIsEditing(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  const addToCart = (product) => {
    const newObj = Object.assign({ qty: 1 }, product);
    dispatch(addItem(newObj));
  };

  return (
    <div className="col-md-3">
      <div className={`card ${isEditing ? "card-rotet" : ""}`}>
        <div
          className="cover"
          style={{
            backgroundImage: 'url("' + product.images[0] + '")',
          }}
        >
          <span className="price">₨ {product.price}</span>
          <span className="edit-btn">
            <MdOutlineDeleteOutline onClick={() => handleDelete(product.id)} />
            <CiEdit onClick={() => handleEditClick(product)} />
          </span>
          <Link to={`product-details/${product.id}`}>
            <h1>{product.name}</h1>
          </Link>
          <span className="card-desc">{product.description}</span>
          <span className="ratings-container">
            <RatingStars rating={product.rating} />
          </span>
          <span
            className="add-to-cart-btn"
            onClick={() => {
              addToCart(product);
            }}
          >
            Add to cart
          </span>
          <form className="card-back">
            <input
              className="card-back-input"
              placeholder="Product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              className="card-back-input"
              placeholder="Product Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
            <input
              className="card-back-input"
              placeholder="Product Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            ></input>
            <textarea
              style={{ width: "13.9rem" }}
              className="card-back-input"
              placeholder="Product Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <span className="back-btn-container">
              <span className="card-back-btn" onClick={handleEditClick}>
                Cancel
              </span>
              <span
                className="card-back-btn"
                onClick={() => handleSaveClick(product)}
              >
                Save
              </span>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;
