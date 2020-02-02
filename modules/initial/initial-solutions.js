const getInitialLetters = require("../initial/initial-letters");

/**
 *
 * @param {*} currentCombination : Current Combination
 * @param {*} firstDefinitions : List of possible definitions for first phrase
 * @param {*} lastDefinitions : List of possible definitions for last phrase
 * @param {*} initialIndicator : Initial Indicators
 *
 * getInitialSolutions() generates all possible initial letter solutions for a given combination and returns it
 */
function getInitialSolutions(
  currentCombination,
  firstDefinitions,
  lastDefinitions,
  initialIndicator
) {
  var solutionList = new Array();

  //First Definitions
  for (var i = 1; i < currentCombination.length; i++) {
    var currentPhrase = currentCombination[i];
    var initialLetters = getInitialLetters(currentPhrase);
    firstDefinitions.forEach(currentDefinition => {
      if (currentDefinition == initialLetters) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        var reason = getReason(
          currentCombination[0],
          currentDefinition,
          currentPhrase,
          initialIndicator
        );
        currentSolution["reason"] = reason;
        currentSolution["def"] = currentCombination[0];
        currentSolution["int"] = "initial-clue";
        currentSolution["percentage"] = 0;
        solutionList.push(currentSolution);
      }
    });
  }

  //Last Definitions
  for (var i = 0; i < currentCombination.length - 1; i++) {
    var currentPhrase = currentCombination[i];
    var initialLetters = getInitialLetters(currentPhrase);
    lastDefinitions.forEach(currentDefinition => {
      if (currentDefinition == initialLetters) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        var reason = getReason(
          currentCombination[currentCombination.length - 1],
          currentDefinition,
          currentPhrase,
          initialIndicator
        );
        currentSolution["reason"] = reason;
        currentSolution["def"] =
          currentCombination[currentCombination.length - 1];
        currentSolution["int"] = "initial-clue";
        currentSolution["percentage"] = 0;
        solutionList.push(currentSolution);
      }
    });
  }

  return solutionList;
}

/**
 *
 * @param {*} definition : Definition in Combination
 * @param {*} definitionSyn : Synonym of definiton
 * @param {*} phrase : Phrase for which initial letters were taken
 * @param {*} indicator : Initial Indicator
 */
function getReason(definition, definitionSyn, phrase, indicator) {
  return (
    "This clue is an Initial Letter Clue. The initial indicator is " +
    indicator.toUpperCase() +
    ". The definition is " +
    definition.toUpperCase() +
    ". " +
    definitionSyn.toUpperCase() +
    " is a synonym of " +
    definition.toUpperCase() +
    ". Initial letters of " +
    phrase.toUpperCase() +
    " gives " +
    definitionSyn.toUpperCase()
  );
}

module.exports = getInitialSolutions;
