import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchClue } from "../../redux/actions/search";

import { Redirect } from "react-router-dom";

const History = ({
  searchClue,
  search: { isDone },
  auth: { user, loading }
}) => {
  const [buttonLoading, setButtonLoading] = useState(false);

  if (isDone) {
    return <Redirect to="/solution" />;
  }
  return (
    <div className="bdy">
      <div className="container">
        <div
          className="row "
          style={{ textAlign: "center", display: "inline" }}
        >
          <h2
            style={{
              color: "white",
              backgroundColor: "#fa4251",
              padding: "1rem"
            }}
          >
            Past Searches
          </h2>
        </div>

        <div className="row align-items-center">
          <div className="col-md-12">
            <table className="table table-dark">
              <thead></thead>
              <tbody>
                {!loading &&
                  user.history.map(cl => (
                    <tr key={cl.clue}>
                      <td>
                        {cl.clue} ({cl.length})
                      </td>
                      <td key={cl.clue} style={{ textAlign: "end" }}>
                        <button
                          key={cl.clue}
                          onClick={() => {
                            setButtonLoading(true);
                            searchClue(cl.clue, cl.length);
                          }}
                          className="btn history-button"
                          disabled={buttonLoading}
                        >
                          {buttonLoading && (
                            <i className="fa fa-refresh fa-spin"></i>
                          )}{" "}
                          Search
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

History.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  search: state.search
});

export default connect(mapStateToProps, { searchClue })(History);
