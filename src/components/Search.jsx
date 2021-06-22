import React from 'react';

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="search">
        <input type="text" onChange={handleSearch} value={search} ref={searchInput} />
    </div>
  )
}

export default Search
