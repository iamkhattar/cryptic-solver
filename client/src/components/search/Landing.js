import React, { useState } from "react";

import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alert";

import PropTypes from "prop-types";

import Alert from "../alert/Alert";

const Landing = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    search: "",
    length: ""
  });

  const { search, length } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (isNaN(length)) {
      setAlert("Length must be a number", "danger");
    }
  };
  return (
    <div className="bdy">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-md-12">
            <form className="row" onSubmit={e => onSubmit(e)}>
              <div className="col-12 col-md-7 pr-md-0 pt-md-0 pt-2 custom_height">
                <input
                  type="text"
                  className="main-input form-control form-control-lg "
                  name="search"
                  id="search"
                  value={search}
                  onChange={e => onChange(e)}
                  placeholder="Cryptic Clue"
                />
              </div>
              <div className="col-12 col-md-3 p-md-0 pt-md-0 pt-2 custom_height">
                <input
                  type="text"
                  className="main-input form-control form-control-lg"
                  name="length"
                  id="length"
                  value={length}
                  onChange={e => onChange(e)}
                  placeholder="Length"
                />
              </div>
              <div className="col-12 col-md-2 pl-md-0 pt-md-0 pt-2 custom_height">
                <input
                  type="submit"
                  name="commit"
                  value="SEARCH"
                  className="main-submit btn btn-block"
                />
              </div>
            </form>

            <div className="row">
              <div className="col-12">
                <Alert />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  setAlert: PropTypes.func.isRequired
};
export default connect(null, { setAlert })(Landing);
