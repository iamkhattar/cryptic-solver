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
        var reason = getReason(
          currentCombination[0],
          currentDefinition,
          currentPhrase,
          finalIndicator
        );
        currentSolution["reason"] = reason;
        currentSolution["def"] = currentCombination[0];
        currentSolution["int"] = "final-clue";
        currentSolution["percentage"] = 0;
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
        var reason = getReason(
          currentCombination[currentCombination.length - 1],
          currentDefinition,
          currentPhrase,
          finalIndicator
        );
        currentSolution["reason"] = reason;
        currentSolution["def"] =
          currentCombination[currentCombination.length - 1];
        currentSolution["int"] = "final-clue";
        currentSolution["percentage"] = 0;
        solutionList.push(currentSolution);
      }
    });
  }
  return solutionList;
}

/**
 *
 * @param definition : Definition in combination
 * @param definitionSyn : Synonym of definition
 * @param phrase : Phrase for which last letters have to be taken
 * @param indicator : Final letter indicator
 *
 * getReason() generates the reason string and returns it
 */
function getReason(definition, definitionSyn, phrase, indicator) {
  return (
    "This clue is an Final Letter Clue. The Final Letter indicator is " +
    indicator.toUpperCase() +
    ". The definition is " +
    definition.toUpperCase() +
    ". " +
    definitionSyn.toUpperCase() +
    " is a synonym of " +
    definition.toUpperCase() +
    ". Final letters of " +
    phrase.toUpperCase() +
    " gives " +
    definitionSyn.toUpperCase()
  );
}

module.exports = getFinalSolutions;
