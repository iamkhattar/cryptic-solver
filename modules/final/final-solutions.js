const getFinalLetters = require("./final-letters");

/**
 *
 * @param currentCombination : Current Combination to be checked
 * @param firstDefinitions : List of possible definitions for first phrase
 * @param lastDefinitions : List of possible definitions for last phrase
 * @param finalIndicator : Final letter Indicator
 *
 * getFinalSolutions() generates all possible final solutions for a given combination
 */
function getFinalSolutions(
  currentCombination,
  firstDefinitions,
  lastDefinitions,
  finalIndicator
) {
  var solutionList = new Array();
  //First Definitions
  for (var i = 1; i < currentCombination.length; i++) {
    var currentPhrase = currentCombination[i];
    var finalLetters = getFinalLetters(currentPhrase);
    firstDefinitions.forEach(currentDefinition => {
      if (currentDefinition == finalLetters) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        currentSolution["reason"] =
          "This clue is an Final Letter Clue. The final letter indicator is " +
          finalIndicator.toUpperCase() +
          ". The definition is " +
          currentCombination[0].toUpperCase() +
          ". " +
          currentDefinition.toUpperCase() +
          " is a synonym of " +
          currentCombination[0].toUpperCase() +
          ". Final letters of " +
          currentPhrase.toUpperCase() +
          " gives " +
          currentDefinition.toUpperCase();
        currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
        solutionList.push(currentSolution);
      }
    });
  }

  //Last Definitions
  for (var i = 0; i < currentCombination.length - 1; i++) {
    var currentPhrase = currentCombination[i];
    var finalLetters = getFinalLetters(currentPhrase);
    lastDefinitions.forEach(currentDefinition => {
      if (currentDefinition == finalLetters) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        currentSolution["reason"] =
          "This clue is an Final Letter Clue. The Final Letter indicator is " +
          finalIndicator.toUpperCase() +
          ". The definition is " +
          currentCombination[currentCombination.length - 1].toUpperCase() +
          ". " +
          currentDefinition.toUpperCase() +
          " is a synonym of " +
          currentCombination[currentCombination.length - 1].toUpperCase() +
          ". Final letters of " +
          currentPhrase.toUpperCase() +
          " gives " +
          currentDefinition.toUpperCase();
        currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
        solutionList.push(currentSolution);
      }
    });
  }
  return solutionList;
}

module.exports = getFinalSolutions;
