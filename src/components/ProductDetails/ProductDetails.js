import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/slices/productSlice";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let { productDetails } = useSelector((state) => state.product);
  console.log(productDetails);

  const [mainImage, setMainImage] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const images = [
    "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
    "https://media.istockphoto.com/id/1277767891/photo/various-fresh-ripe-pumpkins-as-background.webp?b=1&s=170667a&w=0&k=20&c=R1wp9cc9PkUmOiE9PdXlDe2FUBQ3YpxJMjV8yxzLXRY=",
    "https://media.istockphoto.com/id/1473495759/photo/cozy-modern-living-room-interior-with-leather-armchair-and-decoration-room-on-empty-dark-blue.webp?b=1&s=170667a&w=0&k=20&c=1K3nwA1ROH_YQiqYVStRIykgImWjJ9p-6CQ-ZFZCVp4=",
    // Add more image URLs here
  ];

  const handleClick = (image) => {
    setMainImage(image);
    setZoomedImage(image);
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
                width:300,
                height:420
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
        <div className="details_container">details_container</div>
      </div>
    </div>
  );
};

export default ProductDetails;
