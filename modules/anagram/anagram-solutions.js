const checkAnagram = require("./check-anagram");
const getSynonyms = require("../thesaurus/get-synonyms");

/**
 *
 * @param currentCombination : current combination to be checked
 * @param synonymList : list of synonyms
 * @param firstDefinitions : possible definitions for first phrase
 * @param lastDefinitions : possible definitions for last phrase
 * @param anagramIndicator : anagram indicator
 *
 * getAnagramSolutions() generates all possible anagram solutions for a given combination
 */
function getAnagramSolution(
  currentCombination,
  synonymList,
  firstDefinitions,
  lastDefinitions,
  anagramIndicator
) {
  var solutionList = new Array();
  //First Definitions
  for (var i = 1; i < currentCombination.length; i++) {
    var currentPhrase = currentCombination[i];
    firstDefinitions.forEach(currentDefinition => {
      //Direct Anagram
      if (
        checkAnagram(currentPhrase, currentDefinition) &&
        currentPhrase != currentDefinition
      ) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        currentSolution["reason"] =
          "This clue is an Anagram Clue. The anagram indicator is " +
          anagramIndicator.toUpperCase() +
          ". The definition is " +
          currentCombination[0].toUpperCase() +
          ". " +
          currentDefinition.toUpperCase() +
          " is a synonym of " +
          currentCombination[0].toUpperCase() +
          ". If we anagram " +
          currentPhrase.toUpperCase() +
          " we get " +
          currentDefinition.toUpperCase();
        currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
        solutionList.push(currentSolution);
      }

      //Indirect Anagram
      var currentSynonyms = getSynonyms(synonymList, currentPhrase);
      currentSynonyms.forEach(currentSynonym => {
        if (
          checkAnagram(currentSynonym, currentDefinition) &&
          currentSynonym != currentDefinition
        ) {
          var currentSolution = new Array();
          currentSolution["solution"] = currentDefinition.toUpperCase();
          currentSolution["reason"] =
            "This clue is an Anagram Clue. The anagram indicator is " +
            anagramIndicator.toUpperCase() +
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
            ". If we anagram " +
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
      //Direct Anagram
      if (
        checkAnagram(currentPhrase, currentDefinition) &&
        currentPhrase != currentDefinition
      ) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        currentSolution["reason"] =
          "This clue is an Anagram Clue. The anagram indicator is " +
          anagramIndicator.toUpperCase() +
          ". The definition is " +
          currentCombination[currentCombination.length - 1].toUpperCase() +
          ". " +
          currentDefinition.toUpperCase() +
          " is a synonym of " +
          currentCombination[currentCombination.length - 1].toUpperCase() +
          ". If we anagram " +
          currentPhrase.toUpperCase() +
          " we get " +
          currentDefinition.toUpperCase();
        currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;

        solutionList.push(currentSolution);
      }
      //Indirect Anagram
      var currentSynonyms = getSynonyms(synonymList, currentPhrase);
      currentSynonyms.forEach(currentSynonym => {
        if (
          checkAnagram(currentSynonym, currentDefinition) &&
          currentDefinition != currentSynonym
        ) {
          var currentSolution = new Array();
          currentSolution["solution"] = currentDefinition.toUpperCase();
          currentSolution["reason"] =
            "This clue is an Anagram Clue. The anagram indicator is " +
            anagramIndicator.toUpperCase() +
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
            ". If we anagram " +
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

module.exports = getAnagramSolution;
