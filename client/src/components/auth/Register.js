import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import uuid from "uuid";
import Alert from "../alert/Alert";

import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alert";
import { register } from "../../redux/actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: ""
  });

  const { email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      register({ email, password });
    }
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
                <h2 style={{ color: "white" }}>Sign up for an account</h2>
                <Alert key={uuid.v4()} />
              </div>
              <div className="col-12 p-2 custom_height">
                <input
                  type="email"
                  className="main-input form-control form-control-lg"
                  name="email"
                  id="register-email"
                  value={email}
                  onChange={e => onChange(e)}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col-12 p-2 custom_height">
                <input
                  type="password"
                  className="main-input form-control form-control-lg"
                  name="password"
                  id="register-password"
                  value={password}
                  onChange={e => onChange(e)}
                  minLength="6"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="col-12 p-2 custom_height">
                <input
                  type="password"
                  className="main-input form-control form-control-lg"
                  name="password2"
                  id="register-password2"
                  value={password2}
                  onChange={e => onChange(e)}
                  minLength="6"
                  placeholder="Repeat Password"
                  required
                />
              </div>

              <div className="col-12 p-2 custom_height">
                <input
                  type="submit"
                  name="commit"
                  id="register-button"
                  value="SIGN UP"
                  className="main-submit btn btn-block"
                />
              </div>
              <div className="col-12 p-2 " style={{ textAlign: "end" }}>
                <label style={{ color: "white" }}>
                  Already a user?{" "}
                  <Link to="/login" id="register-login-link">
                    Login here.
                  </Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
