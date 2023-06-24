import React from "react";

function Search({ searchInput, setSearchInput }) {

  function handleSearch(event) {
    setSearchInput(event.target.value);
  } 

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchInput} onChange={handleSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
