const getDoubleDefinitionSolutions = require("../double-definition/double-definition-solutions");
const doesSolutionExist = require("./does-solution-exist");

function generateCurrentSolution(
  currentCombination,
  solutionLength,
  synonymList
) {
  var solutionList = new Array();

  //Check for Double Definition
  if (currentCombination.length == 2) {
    var doubleDefinitionSolutions = getDoubleDefinitionSolutions(
      currentCombination,
      solutionLength,
      synonymList
    );

    doubleDefinitionSolutions.forEach(currentDoubleDefinitionSolution => {
      if (!doesSolutionExist(solutionList, currentDoubleDefinitionSolution)) {
        solutionList.push(currentDoubleDefinitionSolution);
      }
    });
  }

  return solutionList;
}

module.exports = generateCurrentSolution;
