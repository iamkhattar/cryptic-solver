import React from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const Solution = ({ search: { solutions, clue, length } }) => {
  if (clue === "") {
    return <Redirect to="/" />;
  } else {
    if (solutions.length === 0) {
      solutions.push({
        solution: "No Solution Found",
        reason: "We have logged this and will look into this soon",
        percentage: ""
      });
    }
  }

  return (
    <div className="bdy">
      <div className="container">
        <div className="row" style={{ textAlign: "center", display: "inline" }}>
          <h2
            style={{
              color: "white",
              backgroundColor: "#fa4251",
              padding: "1rem"
            }}
          >
            {clue} ({length})
          </h2>
        </div>
        {solutions.map(solu => (
          <div
            key={solu.solution}
            className="list-group-item list-group-item-action flex-column align-items-start "
          >
            <div className="d-flex w-100 justify-content-between">
              <h2 className="mb-1">{solu.solution.toUpperCase()}</h2>
              <small style={{ fontSize: "2rem" }}>{solu.percentage}</small>
            </div>
            <p className="mb-1">{solu.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Solution.propTypes = {
  search: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  search: state.search
});
export default connect(mapStateToProps)(Solution);
