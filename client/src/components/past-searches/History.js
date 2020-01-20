import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadUser } from "../../redux/actions/auth";
import PropTypes from "prop-types";

const History = ({ history, loadUser }) => {
  useEffect(() => {
    loadUser();
  }, []);
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
                {history.map(cl => (
                  <tr key={cl.clue}>
                    <td>
                      {cl.clue} ({cl.length})
                    </td>
                    <td style={{ textAlign: "end" }}>
                      <button className="btn history-button">Search</button>
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
  history: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  history: state.auth.user.history
});

export default connect(mapStateToProps, { loadUser })(History);
