import React from "react";
import { Link } from "react-router-dom";
import movix from "../../assets/movix-logo.svg";
import { Search } from "lucide-react";
import SearchBar from "../search/Search";
import "./navbar.scss";
import { useState, useEffect } from "react";
import { useRef } from "react";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);
  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      console.log("Clicked Outside of Search");
      setShowSearch(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav>
      <div className="main">
        <div className="left">
          <div className="logo">
            <Link to="/">
              <img src={movix} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="movies">
            <Link to="/movies">
              <h3>Movies</h3>
            </Link>
          </div>
          <div className="tv-shows">
            <Link to="/tv-shows">
              <h3>Tv Shows</h3>
            </Link>
          </div>
          <div className="search" ref={searchRef}>
            {!showSearch ? (
              <Search
                className="search-logo"
                onClick={toggleSearch}
                aria-label="Open search"
              />
            ) : (
              <SearchBar toggleSearch={toggleSearch} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
