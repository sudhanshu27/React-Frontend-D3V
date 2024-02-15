import React from "react";
import "./Search.css";
const Search = ({ handleSearch }) => {
  return (
    <div>
      <input
        className="search"
        onChange={handleSearch}
        placeholder="search products"
      />
    </div>
  );
};

export default Search;
