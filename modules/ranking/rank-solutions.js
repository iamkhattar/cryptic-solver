const getPercentage = require("./get-percentage");

function rankSolutions(solutionList) {
  solutionList.forEach(currentSolution => {
    var currentPercentage = getPercentage(
      currentSolution.def,
      currentSolution.solution
    );
    currentSolution.percentage = Math.round(currentPercentage) + "%";
  });

  return solutionList;
}

module.exports = rankSolutions;
