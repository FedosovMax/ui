import React from "react";
import HeaderCell from "./HeaderCell";
import "./Header.css";

const Header = ({ columns, sorting, sortTable, searchTable, searchColumn }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <HeaderCell
            column={column}
            sorting={sorting}
            key={column}
            sortTable={sortTable}
            searchTable={searchTable}
            searchColumn={searchColumn}
          />
        ))}
      </tr>
    </thead>
  );
};

export default Header;
