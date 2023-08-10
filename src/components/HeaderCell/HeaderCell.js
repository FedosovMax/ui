import React from "react";
import "./HeaderCell.css";
import ColumnSearch from "../ColumnSearch/ColumnSearch";

const HeaderCell = ({ column, sorting, sortTable, searchTable, searchColumn }) => {
  const isDescSorting = sorting.column === column && sorting.order === "desc";
  const isAscSorting = sorting.column === column && sorting.order === "asc";
  const futureSortingOrder = isDescSorting ? "asc" : "desc";
  return (
    <th>
      <div
        key={column}
        className="lots-table-cell"
        onClick={() => sortTable({ column, order: futureSortingOrder })}
      >
        {column}
        {isDescSorting && <span>▼</span>}
        {isAscSorting && <span>▲</span>}
      </div>
      <div className="header-search">
        <ColumnSearch searchTable={searchTable} searchColumn={searchColumn} column={column}/>
      </div>
    </th>
  );
};

export default HeaderCell;
