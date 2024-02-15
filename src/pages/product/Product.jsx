import "./Product.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();
  if (!location.state) {
    return <div>No details available</div>;
  }
  const item = location.state;
  console.log(item.images[0]);

  return (
    <div className="product">
      <div className="product-box">
        <div className="d-name">{item.title}</div>
        <div className="image">
          <img src={item.images[0]} alt="" />
        </div>
        <div className="detail">
          <div className="dd">{item.description}</div>
          <div className="dd">${item.price}</div>
        </div>
        <div className="d-btn">
          <button onClick={() => navigate("/")} className="d-button">
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
