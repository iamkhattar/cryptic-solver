import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bdy">
      <div className="container h-100">
        <div className="row h-100 align-items-center ">
          <div className="col-md-3  d-none d-md-block d-lg-block d-xl-block"></div>

          <div className="col-md-6 ">
            <form className="row">
              <div className="col-12 p-2 text-center">
                <h2 style={{ color: "white" }}>Sign into your account</h2>
              </div>

              <div className="col-12 p-2 custom_height">
                <input
                  type="text"
                  className="main-input form-control form-control-lg"
                  name="login_username"
                  id="login_username"
                  placeholder="Email"
                />
              </div>
              <div className="col-12 p-2 custom_height">
                <input
                  type="password"
                  className="main-input form-control form-control-lg"
                  name="login_pass"
                  id="login_pass"
                  placeholder="Password"
                />
              </div>
              <div className="col-12 p-2 custom_height">
                <input
                  type="button"
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

export default Login;
