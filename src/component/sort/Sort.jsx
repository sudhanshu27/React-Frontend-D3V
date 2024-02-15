import React, { useState } from "react";
import "./Sort.css";
const Sort = ({ handleSortByName, handleSortByPrice }) => {
  return (
    <div className="sort">
      <button className="sort-btn" type="button" onClick={handleSortByName}>
        Sort by Name
      </button>
      <button className="sort-btn" type="button" onClick={handleSortByPrice}>
        Sort by Price
      </button>
    </div>
  );
};

export default Sort;
