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
        currentSolution["reason"] =
          "This clue is an Alternate Letter Clue. The definition is " +
          currentCombination[0].toUpperCase() +
          ". " +
          currentDefinition.toUpperCase() +
          " is a synonym of " +
          currentCombination[0].toUpperCase() +
          ". Alternate letters of " +
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

    var oddLetters = getOddLetters(currentPhrase);
    var evenLetters = getEvenLetters(currentPhrase);
    lastDefinitions.forEach(currentDefinition => {
      if (currentDefinition == oddLetters || currentDefinition == evenLetters) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        currentSolution["reason"] =
          "This clue is an Alternate Letter Clue. The definition is " +
          currentCombination[currentCombination.length - 1].toUpperCase() +
          ". " +
          currentDefinition.toUpperCase() +
          " is a synonym of " +
          currentCombination[currentCombination.length - 1].toUpperCase() +
          ". Alternate letters of " +
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
module.exports = getAlternateSolutions;
