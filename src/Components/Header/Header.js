import React, { useContext } from "react";
import "./Header.css";
import logo from "../../logo/logo.png";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../Layout/Main";


const Header = () => {
 
  const {catchValue} =useContext(MyContext)



  function updatemenu() {
    if (document.getElementById("responsive-menu").checked == true) {
      document.getElementById("menu").style.borderBottomRightRadius = "0";
      document.getElementById("menu").style.borderBottomLeftRadius = "0";
    } else {
      document.getElementById("menu").style.borderRadius = "6px";
    }
  }

  return (
    <div className="App-header">
      <nav id="menu">
        <input type="checkbox" id="responsive-menu" onClick={updatemenu} />
        <label></label>

        <div className="logo-div">
          <a>
            <img className="logo-img" src={logo} alt="" />
          </a>
        </div>

        <div></div>

        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
            >
              Home
            </NavLink>
          </li>
          <NavLink
            to="/About"
            style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
          >
            About Us
          </NavLink>
          <li>
            <NavLink
              to="/Shop"
              style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Order"
              style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
            >
              Order Review
            </NavLink>
          </li>
        </ul>

        <div className="search-section">
          <form className="d-flex ">
            <input
              id="input-field"
              className="form-control  "
              type="search"
              placeholder="Enter Product Name "
              aria-label="Search"
            />
            <button
              onClick={catchValue}
              className="btn btn-outline-success"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
