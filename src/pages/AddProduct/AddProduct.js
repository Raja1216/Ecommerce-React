import React, { useState } from "react";
import './AddProduct.scss'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/productSlice";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [rating, setRating] = useState();
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const [imageUrls, setImageUrls] = useState([]);

   const fetchImageUrls = async () => {
     try {
       const response = await fetch(
         `https://api.unsplash.com/photos/random?count=3&query=${name}&client_id=AFPY_XWBVRGxohrEPeqYF51zm2MlF90W2cLkgFXubIo`
       );
       const data = await response.json();
       const urls = data.map((item) => item.urls.regular);
       await setImageUrls(urls);
     } catch (error) {
       console.error("Error fetching images:", error);
     }
   };

  const handelAdd = () => {
    if (!name || !price || !rating || !desc ) {
      toast.error("All Fields Are Mendatory", { theme: "dark" });
    } else {
      fetchImageUrls();
      const req_data = {
        name: name,
        price: price,
        rating: rating,
        description:desc,
        images:imageUrls
      };
      dispatch(addProduct(req_data));
      toast.success("Product added successfully!", { theme: "dark" });
      setName("");
      setPrice("");
      setRating("");
      setDesc("");
    }
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
              required
            />
            <input
              placeholder="Enter Product Price"
              className="input-field"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <input
              placeholder="Enter Product Rating"
              className="input-field"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
            <textarea
              placeholder="Enter Product Description"
              className="input-field"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
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
