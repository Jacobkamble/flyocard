import React from "react";
import "./SearchResult.css";
import Header from "../Header/index";

import FlightSearch from "./components/FlightSearch";

const SearchResult = () => {
  return (
    <>
      <Header />
      <div className="searchResultContainer">
        <div className="updateSearchContainer">
          <FlightSearch />
        </div>
      </div>
    </>
  );
};

export default SearchResult;
