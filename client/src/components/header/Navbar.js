import React, { Fragment } from "react";
import logo from "../../navbar-logo.png";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/auth";
import { clearSolutions } from "../../redux/actions/search";

const Navbar = ({
  auth: { isAuthenticated, loading },
  logout,
  clearSolutions
}) => {
  const navbarStyle = {
    paddingLeft: "0",
    paddingRight: "0"
  };
  const logoStyle = { paddingTop: "11px" };
  const logoImgStyle = { marginTop: "2px" };
  const navItemStyle = { color: "white" };

  const authLinks = (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav justify-content-end w-100">
        <li className="nav-item">
          <Link
            onClick={clearSolutions}
            className="nav-link"
            style={navItemStyle}
            to="/"
          >
            <i className="fa fa-fw fa-home"></i>Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={clearSolutions}
            className="nav-link"
            style={navItemStyle}
            to="/history"
          >
            <i className="fa fa-fw fa-history"></i>Past Searches
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            style={navItemStyle}
            onClick={logout}
            to="#!"
          >
            <i className="fa fa-fw fa-sign-out"></i>Logout
          </Link>
        </li>
      </ul>
    </div>
  );
  const guestLinks = (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav justify-content-end w-100">
        <li className="nav-item">
          <Link
            onClick={clearSolutions}
            className="nav-link"
            style={navItemStyle}
            to="/"
          >
            <i className="fa fa-fw fa-home"></i>Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={navItemStyle} to="/login">
            <i className="fa fa-fw fa-user"></i>Account
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <header>
      <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={navbarStyle}
        >
          <Link
            onClick={clearSolutions}
            className="navbar-brand"
            style={logoStyle}
            to="/"
          >
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
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </nav>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout, clearSolutions })(Navbar);
