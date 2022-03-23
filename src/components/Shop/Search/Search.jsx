import React from "react";
import { BsSearch } from "react-icons/bs";
import { GiCrossedPistols } from "react-icons/gi";
import "./Search.css";
const Search = () => {
  return (
    <div className="search-group">
      <h3>
        <GiCrossedPistols /> Mofiz Weapons Store
      </h3>
      <div className="input-groups">
        <input type="search" placeholder="Search Your Weapons" />
        <button>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
