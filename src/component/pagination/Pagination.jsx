import React from "react";
import "./Pagination.css";
const Pagination = ({
  handlePrevPage,
  handleNextPage,
  currentPage,
  totalPages,
}) => {
  return (
    <div className="pagination">
      <button
        className="footer-btn"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="page-num">{currentPage}</span>
      <button
        className="footer-btn"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
