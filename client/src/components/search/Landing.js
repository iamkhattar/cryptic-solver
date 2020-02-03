import React, { useState } from "react";

import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alert";
import { searchClue } from "../../redux/actions/search";
import { saveSearch } from "../../redux/actions/auth";

import PropTypes from "prop-types";

import { Redirect } from "react-router-dom";

import Alert from "../alert/Alert";

const Landing = ({
  setAlert,
  search: { isDone },
  searchClue,
  isAuthenticated,
  saveSearch
}) => {
  const [formData, setFormData] = useState({
    clue: "",
    length: ""
  });

  const [loading, setLoading] = useState(false);

  const { clue, length } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (isNaN(length)) {
      setAlert("Length must be a number", "danger");
    }
    setLoading(true);
    searchClue(clue, length);
    if (isAuthenticated) {
      saveSearch(clue, length);
    }
  };

  if (isDone) {
    return <Redirect to="/solution" />;
  }
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
                  name="clue"
                  id="clue"
                  value={clue}
                  onChange={e => onChange(e)}
                  placeholder="Cryptic Clue"
                  required
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
                  required
                />
              </div>
              <div className="col-12 col-md-2 pl-md-0 pt-md-0 pt-2 custom_height">
                <button
                  type="submit"
                  name="commit"
                  value="SEARCH"
                  className="main-submit btn btn-block"
                  style={{ color: "white" }}
                  disabled={loading}
                >
                  {loading && <i className="fa fa-refresh fa-spin"></i>} SEARCH
                </button>
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

const mapStateToProps = state => ({
  search: state.search,
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { setAlert, searchClue, saveSearch })(
  Landing
);
