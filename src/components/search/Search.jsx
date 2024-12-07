import React from "react";
import { useRef, useEffect } from "react";
import "./sea.scss";
const Search = ({ toggleSearch }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [toggleSearch]);
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies, TV shows and people"
          ref={inputRef}
        />
        <label htmlFor="search">Search</label>
      </div>
    </>
  );
};

export default Search;
