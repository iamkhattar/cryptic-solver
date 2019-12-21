const generatePossibleDefinitions = require("../definitions/generate-possible-definitions");

/**
 * @param currentCombination : Current combinations that needs to be checked
 * @param solutionLength : Length of solutions
 * @param synonymList : List of Synonyms
 *
 * getDoubleDefinitionSolution() generates all possible double definitons for a given combination
 */
function getDoubleDefinitionSolution(
  currentCombination,
  solutionLength,
  synonymList
) {
  var solutionList = new Array();
  var firstDefinitions = generatePossibleDefinitions(
    currentCombination[0],
    solutionLength,
    synonymList
  );
  var lastDefinitions = generatePossibleDefinitions(
    currentCombination[1],
    solutionLength,
    synonymList
  );

  firstDefinitions.forEach(currentDefinition => {
    if (lastDefinitions.includes(currentDefinition)) {
      var currentSolution = new Array();
      currentSolution["solution"] = currentDefinition.toUpperCase();
      currentSolution["reason"] = "Double Definition";
      solutionList.push(currentSolution);
    }
  });

  return solutionList;
}

module.exports = getDoubleDefinitionSolution;
