import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/slices/productSlice";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { addItem } from "../../redux/slices/cartSlice";
import RatingStars from "../../components/Rating/RatingStars";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let { productDetails } = useSelector((state) => state.product);
  const [mainImage, setMainImage] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [qty, setQty] = useState(1);

  const handleClick = (image) => {
    setMainImage(image);
    setZoomedImage(image);
  };

  const addToCart = (product) => {
    const newObj = Object.assign({ qty: qty }, product);
    dispatch(addItem(newObj));
  };

  useEffect(() => {
    dispatch(getProductDetails({ id: id }));
  }, [dispatch, id]);

  return (
    <div className="product_details">
      <div className="details_card glass_background">
        <div className="image_container">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Main",
                src: mainImage || productDetails?.images[0],
                width: 260,
                height: 340,
              },
              largeImage: {
                src: zoomedImage || productDetails?.images[0],
                width: 1200,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: "150%",
                height: "100%",
              },
            }}
          />
          <div className="thumbnail-images">
            {productDetails?.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                onClick={() => handleClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="details_container">
          <div className="details_header">
            <h2>{productDetails?.name}</h2>
          </div>
          <div className="details_price">
            <span style={{ color: "#cd04bd", fontWeight: 600 }}>
              ₨ {productDetails?.price}
            </span>
            <RatingStars rating={productDetails?.rating} />
          </div>
          <div className="details_inpt_btn">
            <select
              name="qty"
              className="select_inpt"
              onChange={(e) => setQty(e.target.value)}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
            <span
              className="add_to_cart_btn"
              onClick={() => {
                addToCart(productDetails);
              }}
            >
              Add to Cart
            </span>
          </div>
          <div className="details_footer">
            <h4 style={{ color: "rgb(236, 92, 35)", fontWeight: 600 }}>
              <u>Product Details</u>
            </h4>
            <p>{productDetails?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
