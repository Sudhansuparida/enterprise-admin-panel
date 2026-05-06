import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>Enterprise Admin</h2>
      </div>

      <div className="navbar-right">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />

        <button className="profile-btn">
          Profile
        </button>
      </div>
    </nav>
  );
};

export default Navbar;