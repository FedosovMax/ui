import { useEffect, useState } from "react";
import React from "react";
import Header from "./Header";
import Content from "./Content";
import Pagination from "./Pagination";
import ContentBar from "./ContentBar"
import "./LotsTable.css";

const LotsTable = () => {
  const [lots, setLots] = useState([]);
  const [sorting, setSorting] = useState({ column: "buyer", order: "asc" });
  const [searchValue, setSearchValue] = useState("");
  const [searchColumnName, setSearchColumnName] = useState("buyer");

  const [show, setShow] = useState(false);
  const [tempId, setTempId] = useState();
  const [entry, setEntry] = useState();

  const [paginatedData, setPaginatedData] = useState(lots);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPageCount, setTotalPages] = useState(0);
  const [size, setSize] = useState(10);

  const columns = [
    "buyer",
    "seller",
    "lotStatus",
    "dk",
    "lotTotalPrice",
    "participantNames",
    "lotURL",
    "pdfURL"
  ];
  const itemColumns = [
    // "id",
    "model",
    "amount",
    "price",
    "totalItemPrice",
  ];

  const sortTable = (newSorting) => {
    setSorting(newSorting);
  };
  const searchTable = (newSearchValue) => {
    setSearchValue(newSearchValue);
  };
  const searchColumn = (newSearchColumnName) => {
    setSearchColumnName(newSearchColumnName);
  };
  const addPaginatedDataHandler = (pagedLots) => {
    setPaginatedData(() => {
      console.log(pagedLots);
      return pagedLots;
    });
  };

  function toggleShow(id) {
    setShow(!show);
    setTempId(id);
  }
  
  console.log(paginatedData);

  useEffect(() => {
    let searchColumnNames; 
    if (searchValue === '' ? searchColumnNames = '' : searchColumnNames = `&` + searchColumnName + `=`+ searchValue);

    const url = `http://localhost:8080/lot-info/filter?page=${currentPage}&size=${size}&sort=${sorting.column},${sorting.order}${searchColumnNames}`;
    // const url = `http://localhost:8080/lot-info?sort=${sorting.column},${sorting.order}&${searchColumnName}=${searchValue}`;

    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.content)
        setLots(data.content);
        setTotalPages(data.totalPages)
      });
  }, [paginatedData, currentPage, sorting, searchValue, searchColumnName]);

  return (
    <>
    <div className="page-content-wrapper" style = {{bottom: '242px', right: '0px'}}>
      {/* <SearchBar searchTable={searchTable} /> */}
      <table className="lots-table">
        <Header
          columns={columns}
          sorting={sorting}
          sortTable={sortTable}
          searchTable={searchTable}
          searchColumn={searchColumn}
        />
        <Content
          entries={lots}
          columns={columns}
          itemColumns={itemColumns}
          toggleShow={toggleShow}
          setEntry={setEntry}
        />
        <div className="pagination-body">
          {lots.length > 0 ? (
            <>
              <Pagination
                data={lots}
                buttonConst={3}
                contentPerPage={size}
                siblingCount={1}
                onReceivePaginatedData={addPaginatedDataHandler}
                currentPage={currentPage}
                onSetCurrentPage={setCurrentPage}
                totalPageCount={totalPageCount}
              />
            </>
          ) : (
            <h1>No Posts to display</h1>
          )}
        </div>
      </table>
    </div>
    <div>
    {show && tempId === entry.id ? 
      <ContentBar entry={entry} itemColumns={itemColumns} tempId={tempId} showItems={show} />
      : ""
    }
    </div>
    </>
  );
};

export default LotsTable;
