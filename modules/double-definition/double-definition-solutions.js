/**
 * @param firstDefinitions : Possible definitions for first phrase
 * @param lastDefinitions : Possible definitions for second phrase
 *
 * getDoubleDefinitionSolution() generates all possible double definitons for a given combination
 */
function getDoubleDefinitionSolution(firstDefinitions, lastDefinitions) {
  var solutionList = new Array();

  firstDefinitions.forEach(currentDefinition => {
    if (lastDefinitions.includes(currentDefinition)) {
      var currentSolution = new Array();
      currentSolution["solution"] = currentDefinition.toUpperCase();
      currentSolution["reason"] = "Double Definition";
      currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
      solutionList.push(currentSolution);
    }
  });

  return solutionList;
}

module.exports = getDoubleDefinitionSolution;
