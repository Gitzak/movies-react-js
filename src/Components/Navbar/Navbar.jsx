import React, { useState } from "react";

function Navbar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow p-3">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="home">
          <img className="img-fluid" width="100" src="./assets/images/Netflix_2015_logo.png" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="movies">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="series">
                Series
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="tvShows">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="topimdb">
                Top IMDB
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="search-box-container">
              <div className="search-box mt-1">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="q"
                    placeholder="Search anything"
                    className="search-input"
                    value={searchValue}
                    onChange={handleInputChange}
                  />
                  <button type="submit" className="search-btn">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
            </li>
            <li id="btn-sign-in" className="nav-item">
              <a className="nav-link mt-1" href="login">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
