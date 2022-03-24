import React from "react";
import { BsSearch } from "react-icons/bs";
import { GiCrossedPistols } from "react-icons/gi";
import "./Search.css";
const Search = ({ setSearch, search, handleSearch }) => {
  return (
    <div className="search-group">
      <h3>
        <GiCrossedPistols /> Mofiz Weapons Store
      </h3>
      <div className="input-groups">
        <input
          type="search"
          value={search}
          placeholder="Search Your Weapons"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
