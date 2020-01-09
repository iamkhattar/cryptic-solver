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
        var reason = getReason(
          currentCombination[0],
          currentDefinition,
          currentPhrase,
          hiddenIndicator
        );
        currentSolution["reason"] = reason;
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
        var reason = getReason(
          currentCombination[currentCombination.length - 1],
          currentDefinition,
          currentPhrase,
          hiddenIndicator
        );
        currentSolution["reason"] = reason;
        currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
        solutionList.push(currentSolution);
      }
    });
  }

  return solutionList;
}

/**
 *
 * @param definition : Definition in Combination
 * @param definitionSyn : Synonym of definition
 * @param phrase : Phrase in which definition is hidden
 * @param indicator : Hidden Indicator
 *
 * getReason() generates the reason for the clue and returns it
 */
function getReason(definition, definitionSyn, phrase, indicator) {
  return (
    "This clue is a Hidden Clue. The hidden indicator is " +
    indicator.toUpperCase() +
    ". The definition is " +
    definition.toUpperCase() +
    ". " +
    definitionSyn.toUpperCase() +
    " is a synonym of " +
    definition.toUpperCase() +
    ". " +
    definitionSyn.toUpperCase() +
    " is hidden in " +
    phrase.toUpperCase()
  );
}

module.exports = getHiddenSolutions;
