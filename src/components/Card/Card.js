import React, { useState } from "react";
import "./Card.scss";
import RatingStars from "../Rating/RatingStars";

const Card = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    console.log("HERE");
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };
  return (
    <div className="col-md-3">
      <div className={`card ${isEditing ? "card-rotet" : ""}`}>
        <div
          className="cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80")',
          }}
        >
          <span className="price">₨ 35</span>
          <span
            className="edit-btn"
            onClick={handleEditClick}
            title="Edit Product"
          >
            🖌
          </span>
          <h1>Tropical Leaf</h1>
          <span className="card-desc">
            {" "}
            Here's a simple implementation of a React component for a star
            rating system that accepts dynamic data ranging from 1 to 5 with
            increments of 0.5 and displays half stars for values like 1.5, 2.5,
            etc.:{" "}
          </span>
          <span className="ratings-container">
            {" "}
            <RatingStars rating={3.5} />
          </span>
          <span className="add-to-cart-btn">Add to cart</span>
          <form className="card-back">
            <input
              className="card-back-input"
              placeholder="Product name"
            ></input>
            <input
              className="card-back-input"
              placeholder="Product Price"
            ></input>
            <input
              className="card-back-input"
              placeholder="Product Rating"
            ></input>
            <textarea
              style={{ width: "13.9rem" }}
              className="card-back-input"
              placeholder="Product Description"
            ></textarea>
            <span className="back-btn-container">
              <span className="card-back-btn" onClick={handleEditClick}>
                Cancel
              </span>
              <span className="card-back-btn">Save</span>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;
