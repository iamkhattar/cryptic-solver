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
        var reason = getDirectReason(
          currentCombination[0],
          currentDefinition,
          currentPhrase,
          anagramIndicator
        );
        currentSolution["reason"] = reason;
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
          var reason = getIndirectReason(
            currentCombination[0],
            currentDefinition,
            currentPhrase,
            currentSynonym,
            anagramIndicator
          );
          currentSolution["reason"] = reason;
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
        var reason = getDirectReason(
          currentCombination[currentCombination.length - 1],
          currentDefinition,
          currentPhrase,
          anagramIndicator
        );
        currentSolution["reason"] = reason;
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
          var reason = getIndirectReason(
            currentCombination[currentCombination.length - 1],
            currentDefinition,
            currentPhrase,
            currentSynonym,
            anagramIndicator
          );
          currentSolution["reason"] = reason;
          currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
          solutionList.push(currentSolution);
        }
      });
    });
  }

  return solutionList;
}

/**
 *
 * @param definition : Definition in combination
 * @param definitionSyn : Synonym of definition
 * @param phrase : Anagrammed phrase
 * @param indicator : Anagram indicator
 *
 * getDirectReason() generates reason string for direct anagram clues
 */
function getDirectReason(definition, definitionSyn, phrase, indicator) {
  return (
    "This clue is an Anagram Clue. The anagram indicator is " +
    indicator.toUpperCase() +
    ". The definition is " +
    definition.toUpperCase() +
    ". " +
    definitionSyn.toUpperCase() +
    " is a synonym of " +
    definition.toUpperCase() +
    ". If we anagram " +
    phrase.toUpperCase() +
    " we get " +
    definitionSyn.toUpperCase()
  );
}

/**
 *
 * @param definition : Definition in combination
 * @param definitionSyn : Synonym of definition
 * @param phrase : Phrase for which synonym is anagrammed
 * @param phraseSyn : Anagrammed phrase
 * @param indicator : Anagram indicator
 *
 * getIndirectReason() generates reason string for indirect anagram clues
 */
function getIndirectReason(
  definition,
  definitionSyn,
  phrase,
  phraseSyn,
  indicator
) {
  return (
    "This clue is an Anagram Clue. The anagram indicator is " +
    indicator.toUpperCase() +
    ". The definition is " +
    definition.toUpperCase() +
    ". " +
    definitionSyn.toUpperCase() +
    " is a synonym of " +
    definition.toUpperCase() +
    ". " +
    phraseSyn.toUpperCase() +
    " is a synonym of " +
    phrase.toUpperCase() +
    ". If we anagram " +
    phraseSyn.toUpperCase() +
    " we get " +
    definitionSyn.toUpperCase()
  );
}

module.exports = getAnagramSolution;
