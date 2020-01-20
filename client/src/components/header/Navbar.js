import React from "react";
import logo from "../../navbar-logo.png";

import { Link } from "react-router-dom";
const Navbar = () => {
  const navbarStyle = {
    paddingLeft: "0",
    paddingRight: "0"
  };
  const logoStyle = { paddingTop: "11px" };
  const logoImgStyle = { marginTop: "2px" };
  const navItemStyle = { color: "white" };
  return (
    <header>
      <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={navbarStyle}
        >
          <Link className="navbar-brand" style={logoStyle} to="/">
            <img
              src={logo}
              width="210"
              height="20"
              style={logoImgStyle}
              className="d-inline-block align-top"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav justify-content-end w-100">
              <li className="nav-item">
                <Link className="nav-link" style={navItemStyle} to="/">
                  <i className="fa fa-fw fa-home"></i>Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={navItemStyle} to="/history">
                  <i className="fa fa-fw fa-history"></i>Past Searches
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={navItemStyle} to="/login">
                  <i className="fa fa-fw fa-user"></i>Account
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={navItemStyle} to="">
                  <i className="fa fa-fw fa-sign-out"></i>Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
