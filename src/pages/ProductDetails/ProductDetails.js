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

  const images = [
    "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
    "https://media.istockphoto.com/id/1277767891/photo/various-fresh-ripe-pumpkins-as-background.webp?b=1&s=170667a&w=0&k=20&c=R1wp9cc9PkUmOiE9PdXlDe2FUBQ3YpxJMjV8yxzLXRY=",
    "https://media.istockphoto.com/id/1473495759/photo/cozy-modern-living-room-interior-with-leather-armchair-and-decoration-room-on-empty-dark-blue.webp?b=1&s=170667a&w=0&k=20&c=1K3nwA1ROH_YQiqYVStRIykgImWjJ9p-6CQ-ZFZCVp4=",
  ];

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
                src: mainImage || images[0],
                width: 260,
                height: 340,
              },
              largeImage: {
                src: zoomedImage || images[0],
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
            {images.map((image, index) => (
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
            <select name="qty" className="select_inpt" onChange={(e) => setQty(e.target.value)} >
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