import React, {useEffect} from "react";
import {DOTS, usePagination} from "../../hooks/usePagination";
import "./styles.scss";

export const LotsPagination = ({
	                               buttonConst,
	                               contentPerPage,
	                               siblingCount,
	                               currentPage,
	                               onSetCurrentPage,
	                               totalPageCount
                               }) => {

	const paginationRange = usePagination({
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


	return (
		 <div>
			 <div className="pagination">
				 {/* previous button */}
				 <button
						onClick={gotToPreviousPage}
						className={` prev ${currentPage === 1 ? "disabled" : ""}`}
				 >
					 &lt;
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
					 &gt;
				 </button>
			 </div>
		 </div>
	);
};

