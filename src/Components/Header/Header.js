import React, { useContext } from "react";
import "./Header.css";
import logo from "../../logo/logo.png";
import { InputContext } from "../../Contexts/SearchInputContext";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { catchValue } = useContext(InputContext);

  function updatemenu() {
    if (document.getElementById("responsive-menu").checked === true) {
      document.getElementById("menu").style.borderBottomRightRadius = "0";
      document.getElementById("menu").style.borderBottomLeftRadius = "0";
    } else {
      document.getElementById("menu").style.borderRadius = "0px";
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
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
            >
              About Us
            </NavLink>
          </li>

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

          <NavLink
            to="/Order"
            style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
          >
            <button className="btn btn-danger">LogIn</button>
          </NavLink>

          <NavLink
            to="/Order"
            style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
          >
            <button className="btn btn-danger">SignUp</button>
          </NavLink>
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

            <button onClick={catchValue} className="btn btn-outline-success">
              <Link className="search-btn" to="/shop">
                Search
              </Link>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
