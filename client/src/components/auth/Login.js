import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import uuid from "uuid";
import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alert";
import { login } from "../../redux/actions/auth";
import PropTypes from "prop-types";

import Alert from "../alert/Alert";

const Login = ({ login, setAlert, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="bdy">
      <div className="container h-100">
        <div className="row h-100 align-items-center ">
          <div className="col-md-3  d-none d-md-block d-lg-block d-xl-block"></div>

          <div className="col-md-6 ">
            <form className="row" onSubmit={e => onSubmit(e)}>
              <div className="col-12 p-2 text-center">
                <h2 style={{ color: "white" }}>Sign into your account</h2>
                <Alert key={uuid.v4()} />
              </div>

              <div className="col-12 p-2 custom_height">
                <input
                  type="text"
                  className="main-input form-control form-control-lg"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
              <div className="col-12 p-2 custom_height">
                <input
                  type="password"
                  className="main-input form-control form-control-lg"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  minLength="6"
                  onChange={e => onChange(e)}
                  required
                />
              </div>
              <div className="col-12 p-2 custom_height">
                <input
                  type="submit"
                  name="commit"
                  value="SIGN IN"
                  className="main-submit btn btn-block"
                />
              </div>
              <div className="col-12 p-2 " style={{ textAlign: "end" }}>
                <label style={{ color: "white" }}>
                  Not an existing user?{" "}
                  <Link to="/register">Register here.</Link>{" "}
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login, setAlert })(Login);
