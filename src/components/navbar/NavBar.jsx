import React from "react";
import { Link } from "react-router-dom";
import movix from "../../assets/movix-logo.svg";
import { Search } from "lucide-react";
import "./navbar.scss";

const NavBar = () => {
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
          <div className="search">
            <Search className="search-logo" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
