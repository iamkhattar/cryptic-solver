const reversePhrase = require("../reversal/reverse-phrase");
const getSynonyms = require("../thesaurus/get-synonyms");

/**
 *
 * @param currentCombination : current combination to be checked
 * @param synonymList : list of synonyms
 * @param firstDefinitions : possible definitions for first phrase
 * @param lastDefinitions : possible definitions for last phrase
 * @param reversalIndicator : reversal indicator
 *
 * getReversalSolution() generates all possible reversal solutions for a given combination
 */
function getReversalSolution(
  currentCombination,
  synonymList,
  firstDefinitions,
  lastDefinitions,
  reversalIndicator
) {
  var solutionList = new Array();
  //First Definition
  for (var i = 1; i < currentCombination.length; i++) {
    var currentPhrase = currentCombination[i];
    //Direct Reversal
    firstDefinitions.forEach(currentDefinition => {
      if (currentDefinition == reversePhrase(currentPhrase)) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        currentSolution["reason"] =
          "This clue is a Reversal Clue. The reversal indicator is " +
          reversalIndicator.toUpperCase() +
          ". The definition is " +
          currentCombination[0].toUpperCase() +
          ". " +
          currentDefinition.toUpperCase() +
          " is a synonym of " +
          currentCombination[0].toUpperCase() +
          ". If we reverse " +
          currentPhrase.toUpperCase() +
          " we get " +
          currentDefinition.toUpperCase();
        currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
        solutionList.push(currentSolution);
      }

      //Indirect Reversal
      var currentSynonyms = getSynonyms(synonymList, currentPhrase);
      currentSynonyms.forEach(currentSynonym => {
        if (reversePhrase(currentSynonym) == currentDefinition) {
          var currentSolution = new Array();
          currentSolution["solution"] = currentDefinition.toUpperCase();
          currentSolution["reason"] =
            "This clue is a Reversal Clue. The reversal indicator is " +
            reversalIndicator.toUpperCase() +
            ". The definition is " +
            currentCombination[0].toUpperCase() +
            ". " +
            currentDefinition.toUpperCase() +
            " is a synonym of " +
            currentCombination[0].toUpperCase() +
            ". " +
            currentSynonym.toUpperCase() +
            " is a synonym of " +
            currentPhrase.toUpperCase() +
            ". If we reverse " +
            currentSynonym.toUpperCase() +
            " we get " +
            currentDefinition.toUpperCase();
          currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
          solutionList.push(currentSolution);
        }
      });
    });
  }

  //Last Definitions
  for (var i = 0; i < currentCombination.length - 1; i++) {
    var currentPhrase = currentCombination[i];
    lastDefinitions.forEach(currentDefinition => {
      //Direct Reversal
      if (currentDefinition == reversePhrase(currentPhrase)) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        currentSolution["reason"] =
          "This clue is a Reversal Clue. The reversal indicator is " +
          reversalIndicator.toUpperCase() +
          ". The definition is " +
          currentCombination[currentCombination.length - 1].toUpperCase() +
          ". " +
          currentDefinition.toUpperCase() +
          " is a synonym of " +
          currentCombination[currentCombination.length - 1].toUpperCase() +
          ". If we reverse " +
          currentPhrase.toUpperCase() +
          " we get " +
          currentDefinition.toUpperCase();
        currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;

        solutionList.push(currentSolution);
      }
      //Indirect Anagram
      var currentSynonyms = getSynonyms(synonymList, currentPhrase);
      currentSynonyms.forEach(currentSynonym => {
        if (reversePhrase(currentSynonym) == currentDefinition) {
          var currentSolution = new Array();
          currentSolution["solution"] = currentDefinition.toUpperCase();
          currentSolution["reason"] =
            "This clue is a Reversal Clue. The reversal indicator is " +
            reversalIndicator.toUpperCase() +
            ". The definition is " +
            currentCombination[currentCombination.length - 1].toUpperCase() +
            ". " +
            currentDefinition.toUpperCase() +
            " is a synonym of " +
            currentCombination[currentCombination.length - 1].toUpperCase() +
            ". " +
            currentSynonym.toUpperCase() +
            " is a synonym of " +
            currentPhrase.toUpperCase() +
            ". If we reverse " +
            currentSynonym.toUpperCase() +
            " we get " +
            currentDefinition.toUpperCase();
          currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
          solutionList.push(currentSolution);
        }
      });
    });
  }

  return solutionList;
}

module.exports = getReversalSolution;
