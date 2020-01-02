const isSolutionHidden = require("../hidden/is-solution-hidden");

/**
 *
 * @param currentCombination : current combination to be checked
 * @param firstDefinitions : possible definitions for first phrase
 * @param lastDefinitions : possible definitions for last phrase
 * @param hiddenIndicator : hidden indicator
 *
 * getHiddenSolutions() generates all possible hidden solutions for a given combination
 */
function getHiddenSolutions(
  currentCombination,
  firstDefinitions,
  lastDefinitions,
  hiddenIndicator
) {
  var solutionList = new Array();
  //First Definitions
  for (var i = 1; i < currentCombination.length; i++) {
    var currentPhrase = currentCombination[i];
    firstDefinitions.forEach(currentDefinition => {
      if (isSolutionHidden(currentPhrase, currentDefinition)) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        currentSolution["reason"] =
          "This clue is a Hidden Clue. The hidden indicator is " +
          hiddenIndicator.toUpperCase() +
          ". The definition is " +
          currentCombination[0].toUpperCase() +
          ". " +
          currentDefinition.toUpperCase() +
          " is a synonym of " +
          currentCombination[0].toUpperCase() +
          ". " +
          currentDefinition.toUpperCase() +
          " is hidden in " +
          currentPhrase.toUpperCase();
        currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
        solutionList.push(currentSolution);
      }
    });
  }

  for (var i = 0; i < currentCombination.length - 1; i++) {
    var currentPhrase = currentCombination[i];
    lastDefinitions.forEach(currentDefinition => {
      if (isSolutionHidden(currentPhrase, currentDefinition)) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        currentSolution["reason"] =
          "This clue is a Hidden Clue. The hidden indicator is " +
          hiddenIndicator.toUpperCase() +
          ". The definition is " +
          currentCombination[currentCombination.length - 1].toUpperCase() +
          ". " +
          currentDefinition.toUpperCase() +
          " is a synonym of " +
          currentCombination[currentCombination.length - 1].toUpperCase() +
          ". " +
          currentDefinition.toUpperCase() +
          " is hidden in " +
          currentPhrase.toUpperCase();
        currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
        solutionList.push(currentSolution);
      }
    });
  }

  return solutionList;
}

module.exports = getHiddenSolutions;
