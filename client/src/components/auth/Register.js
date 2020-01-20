import React, { useState } from "react";
import { Link } from "react-router-dom";

import Alert from "../alert/Alert";

import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alert";
import PropTypes from "prop-types";

const Register = ({ setAlert }) => {
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
      console.log("passwords match");
    }
  };
  return (
    <div className="bdy">
      <div className="container h-100">
        <div className="row h-100 align-items-center ">
          <div className="col-md-3  d-none d-md-block d-lg-block d-xl-block"></div>
          <div className="col-md-6 ">
            <form className="row" onSubmit={e => onSubmit(e)}>
              <div className="col-12 p-2 text-center">
                <h2 style={{ color: "white" }}>Sign up for an account</h2>
                <Alert />
              </div>
              <div className="col-12 p-2 custom_height">
                <input
                  type="email"
                  className="main-input form-control form-control-lg"
                  name="email"
                  id="email"
                  value={email}
                  onChange={e => onChange(e)}
                  placeholder="Email"
                />
              </div>
              <div className="col-12 p-2 custom_height">
                <input
                  type="password"
                  className="main-input form-control form-control-lg"
                  name="password"
                  id="password"
                  value={password}
                  onChange={e => onChange(e)}
                  minLength="6"
                  placeholder="Password"
                />
              </div>
              <div className="col-12 p-2 custom_height">
                <input
                  type="password"
                  className="main-input form-control form-control-lg"
                  name="password2"
                  id="password2"
                  value={password2}
                  onChange={e => onChange(e)}
                  minLength="6"
                  placeholder="Repeat Password"
                />
              </div>

              <div className="col-12 p-2 custom_height">
                <input
                  type="submit"
                  name="commit"
                  value="SIGN UP"
                  className="main-submit btn btn-block"
                />
              </div>
              <div className="col-12 p-2 " style={{ textAlign: "end" }}>
                <label style={{ color: "white" }}>
                  Already a user? <Link to="/login">Login here.</Link>
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
  setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Register);
