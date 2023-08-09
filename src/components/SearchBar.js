import { useState } from "react";
import React from "react";
import "./SearchBar.css";

const SearchBar = ({ searchTable }) => {
  const [searchValue, setSearchValue] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    searchTable(searchValue);
  };
  return (
    <div className="search-bar">
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
