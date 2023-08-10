import React, { useState, useEffect } from "react";
import { usePaginationRange, DOTS } from "../usePaginationRange";
import "./Pagination.css";

const Pagination = ({
  data,
  buttonConst,
  contentPerPage,
  siblingCount,
  onReceivePaginatedData,
  currentPage,
  onSetCurrentPage,
  totalPageCount
}) => {
  // const [totalPageCount] = useState(Math.ceil(data.length / contentPerPage));
  // const [totalPageCount] = totalPageCount;
  // const [currentPage, setCurrentPage] = useState(1);

  const paginationRange = usePaginationRange({
    totalPageCount,
    contentPerPage,
    buttonConst,
    siblingCount,
    currentPage
  });

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: "0px",
    });
    // getPaginatedData();
  }, [currentPage]);

  function goToNextPage() {
    onSetCurrentPage((page) => page + 1);
  }
  function gotToPreviousPage() {
    onSetCurrentPage((page) => page - 1);
  }
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    onSetCurrentPage(pageNumber);
  }
  // const getPaginatedData = () => {
  //   const startIndex = currentPage * contentPerPage - contentPerPage;
  //   const endIndex = startIndex + contentPerPage;
  //   return onReceivePaginatedData(data.slice(startIndex, endIndex));
  // };

  return (
    <div>
      <div className="pagination">
        {/* previous button */}
        <button
          onClick={gotToPreviousPage}
          className={` prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          previous
        </button>
        {/* show paginated button group */}
        {paginationRange.map((item, index) => {
          if (item === DOTS) {
            return (
              <button key={index} className={`paginationItem`}>
                &#8230;
              </button>
            );
          }
          return (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${
                currentPage === item ? "active" : null
              }`}
            >
              <span>{item}</span>
            </button>
          );
        })}
        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === totalPageCount ? "disabled" : ""}`}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
