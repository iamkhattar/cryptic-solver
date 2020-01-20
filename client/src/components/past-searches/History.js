import React from "react";

const History = () => {
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
                <tr>
                  <td>Unluckily discounting the odds in nail bars (4)</td>
                  <td style={{ textAlign: "end" }}>
                    <button className="btn history-button">Search</button>
                  </td>
                </tr>
                <tr>
                  <td>Sadly lost knee bones (8)</td>
                  <td style={{ textAlign: "end" }}>
                    <button className="btn history-button">Search</button>
                  </td>
                </tr>
                <tr>
                  <td>Upsurge battered a coastline (10)</td>
                  <td style={{ textAlign: "end" }}>
                    <button className="btn history-button">Search</button>
                  </td>
                </tr>
                <tr>
                  <td>State first if one wants advice (4)</td>
                  <td style={{ textAlign: "end" }}>
                    <button className="btn history-button">Search</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
