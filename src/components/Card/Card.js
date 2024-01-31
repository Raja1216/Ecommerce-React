import React, { useState } from "react";
import "./Card.scss";

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
          <h1>
            Tropical
            <br />
            Leaf
          </h1>
          <span className="price">₨ 35</span>
          <span
            className="edit-btn"
            onClick={handleEditClick}
            title="Edit Product"
          >
            🖌
          </span>
          <span className="add-to-cart-btn">Add to cart</span>
          <div className="card-back">
            <input
              className="card-back-input"
              placeholder="product name"
            ></input>
            <input className="card-back-input"></input>
            <input className="card-back-input"></input>
            <input className="card-back-input"></input>

            <span className="card-back-btnc">Cancel</span>
            <span className="card-back-btns">Save</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
