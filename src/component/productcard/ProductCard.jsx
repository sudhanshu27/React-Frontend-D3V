import React from "react";
import "./ProductCard.css";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product", { state: item });
  };

  return (
    <div className="card">
      <div className="details">
        <div className="title">Name: {item.title}</div>
        <div className="price">Price: {item.price}</div>
      </div>
      <Button label="View Details" onClick={handleClick} />
    </div>
  );
};

export default ProductCard;
