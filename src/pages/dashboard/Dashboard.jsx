import React, { useEffect, useState } from "react";
import Heading from "../../component/heading/Heading";
import ProductCard from "../../component/productcard/ProductCard";
import Search from "../../component/search/Search";
import "./Dashboard.css";
import Sort from "../../component/sort/Sort";
import Pagination from "../../component/pagination/Pagination";
import MyDetails from "../../component/mydetails/MyDetails";
import Logout from "../../component/logout/Logout";

const Dashboard = () => {
  const [filteredList, setFiteredList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [flag, setFlag] = useState(true);

  const limit = 10;
  useEffect(() => {
    const fetchFilteredList = async () => {
      try {
        let url;
        if (searchQuery.trim() !== "") {
          url = `https://dummyjson.com/products/search?q=${searchQuery}`;
        } else {
          url = `https://dummyjson.com/products?limit=${limit}&skip=${
            (currentPage - 1) * limit
          }`;
        }
        const response = await fetch(url);
        const data = await response.json();
        // If there is no search query and it's the first page, slice the products to show only 10 items
        if (searchQuery.trim() === "" && currentPage === 1) {
          setFiteredList(data.products.slice(0, limit));
        } else {
          setFiteredList(data.products);
        }
        setTotalPages(Math.ceil(data.total / limit));
      } catch (error) {
        console.error("Error searching products:", error);
      }
    };
    fetchFilteredList();
  }, [searchQuery, currentPage, limit]);

  const handleSortByName = () => {
    const sortedProductsByName = [...filteredList].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setFiteredList(sortedProductsByName);
  };
  const handleSortByPrice = () => {
    const sortedProductsByPrice = [...filteredList].sort(
      (a, b) => a.price - parseInt(b.price)
    );
    setFiteredList(sortedProductsByPrice);
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <div className="top">
        <div className="head">
          <div className="my-info">
            <MyDetails />
          </div>
          <div className="product-container">
            <Heading label="Products" />
            <div className="search-sort">
              <Search handleSearch={(e) => setSearchQuery(e.target.value)} />
              <Sort
                handleSortByName={handleSortByName}
                handleSortByPrice={handleSortByPrice}
              />
            </div>
          </div>
          <div className="logout">
            <Logout />
          </div>
        </div>
        <div className="line"></div>
      </div>
      <div className="dashboard-grid">
        {filteredList.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
      <div className="footer">
        <Pagination
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
};

export default Dashboard;
