const getOddLetters = require("./odd-letters");
const getEvenLetters = require("./even-letters");

/**
 *
 * @param {*} currentCombination : Current Combination
 * @param {*} firstDefinitions : List of possible definitions for first phrase
 * @param {*} lastDefinitions : List of possible definitions for last phrase
 *
 * getAlternateSolutions() generates all possible alternate letter solutions for a given combinatio and returns it
 */
function getAlternateSolutions(
  currentCombination,
  firstDefinitions,
  lastDefinitions
) {
  var solutionList = new Array();
  //First Definitions
  for (var i = 1; i < currentCombination.length; i++) {
    var currentPhrase = currentCombination[i];
    var oddLetters = getOddLetters(currentPhrase);
    var evenLetters = getEvenLetters(currentPhrase);
    firstDefinitions.forEach(currentDefinition => {
      if (currentDefinition == oddLetters || currentDefinition == evenLetters) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        var reason = getReason(
          currentCombination[0],
          currentDefinition,
          currentPhrase
        );
        currentSolution["reason"] = reason;
        currentSolution["def"] = currentCombination[0];
        currentSolution["int"] = "alternate-clue";
        currentSolution["percentage"] = 0;
        solutionList.push(currentSolution);
      }
    });
  }

  //Last Definitions
  for (var i = 0; i < currentCombination.length - 1; i++) {
    var currentPhrase = currentCombination[i];

    var oddLetters = getOddLetters(currentPhrase);
    var evenLetters = getEvenLetters(currentPhrase);
    lastDefinitions.forEach(currentDefinition => {
      if (currentDefinition == oddLetters || currentDefinition == evenLetters) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        var reason = getReason(
          currentCombination[currentCombination.length - 1],
          currentDefinition,
          currentPhrase
        );
        currentSolution["reason"] = reason;
        currentSolution["def"] =
          currentCombination[currentCombination.length - 1];
        currentSolution["int"] = "alternate-clue";
        currentSolution["percentage"] = 0;
        solutionList.push(currentSolution);
      }
    });
  }

  return solutionList;
}

/**
 *
 * @param definition : Definition in clue
 * @param definitionSyn : Synonym of definition
 * @param phrase : Phrase for which alternate letters have to be generated
 *
 * getReason() generates reason string for alternate letter clues
 */
function getReason(definition, definitionSyn, phrase) {
  return (
    "This clue is an Alternate Letter Clue. The definition is " +
    definition.toUpperCase() +
    ". " +
    definitionSyn.toUpperCase() +
    " is a synonym of " +
    definition.toUpperCase() +
    ". Alternate letters of " +
    phrase.toUpperCase() +
    " gives " +
    definitionSyn.toUpperCase()
  );
}

module.exports = getAlternateSolutions;
