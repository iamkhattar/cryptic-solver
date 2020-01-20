import React, { useState } from "react";

const Solution = () => {
  const [obj, setObj] = useState({
    clue: "Physician brings fish round",
    length: "3",
    solutions: [
      {
        word: "DOC",
        reason:
          "This clue is a Reversal Clue. The reversal indicator is ROUND. The definition is PHYSICIAN. DOC is a synonym of PHYSICIAN. COD is a synonym of FISH. If we reverse COD we get DOC.",
        percentage: "90%"
      },
      {
        word: "PAS",
        reason:
          "This clue is a Reversal Clue. The reversal indicator is ROUND. The definition is ROUND. PAS is a synonym of ROUND. SAP is a synonym of FISH. If we reverse SAP we get PAS.",
        percentage: "50%"
      },
      {
        word: "NIP",
        reason:
          "This clue is a Double Definition. The first definition is 'PHYSICIAN BRINGS FISH' and the second definition is 'ROUND'. NIP is a synonym to both definitions.",
        percentage: "45%"
      }
    ]
  });

  const { clue, length, solutions } = obj;

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

        {solutions.map(solution => {
          return (
            <div
              key={solution.word}
              className="list-group-item list-group-item-action flex-column align-items-start "
            >
              <div className="d-flex w-100 justify-content-between">
                <h2 className="mb-1">{solution.word.toUpperCase()}</h2>
                <small style={{ fontSize: "2rem" }}>
                  {solution.percentage}
                </small>
              </div>
              <p className="mb-1">{solution.reason}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Solution;
