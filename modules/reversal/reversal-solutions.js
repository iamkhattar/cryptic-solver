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
        var reason = getDirectReason(
          currentCombination[0],
          currentDefinition,
          currentPhrase,
          reversalIndicator
        );
        currentSolution["reason"] = reason;
        currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
        solutionList.push(currentSolution);
      }

      //Indirect Reversal
      var currentSynonyms = getSynonyms(synonymList, currentPhrase);
      currentSynonyms.forEach(currentSynonym => {
        if (reversePhrase(currentSynonym) == currentDefinition) {
          var currentSolution = new Array();
          currentSolution["solution"] = currentDefinition.toUpperCase();
          var reason = getIndirectReason(
            currentCombination[0],
            currentDefinition,
            currentPhrase,
            currentSynonym,
            reversalIndicator
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
      //Direct Reversal
      if (currentDefinition == reversePhrase(currentPhrase)) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        var reason = getDirectReason(
          currentCombination[currentCombination.length - 1],
          currentDefinition,
          currentPhrase,
          reversalIndicator
        );
        currentSolution["reason"] = reason;
        currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;

        solutionList.push(currentSolution);
      }
      //Indirect Reversal
      var currentSynonyms = getSynonyms(synonymList, currentPhrase);
      currentSynonyms.forEach(currentSynonym => {
        if (reversePhrase(currentSynonym) == currentDefinition) {
          var currentSolution = new Array();
          currentSolution["solution"] = currentDefinition.toUpperCase();
          var reason = getIndirectReason(
            currentCombination[currentCombination.length - 1],
            currentDefinition,
            currentPhrase,
            currentSynonym,
            reversalIndicator
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
 * @param phrase : Phrase for which reversal has taken place
 * @param indicator : Reversal Indicator
 *
 * getDirectReason() generates the reason string for a direct reversal and returns it
 */
function getDirectReason(definition, definitionSyn, phrase, indicator) {
  return (
    "This clue is a Reversal Clue. The reversal indicator is " +
    indicator.toUpperCase() +
    ". The definition is " +
    definition.toUpperCase() +
    ". " +
    definitionSyn.toUpperCase() +
    " is a synonym of " +
    definition.toUpperCase() +
    ". If we reverse " +
    phrase.toUpperCase() +
    " we get " +
    definitionSyn.toUpperCase()
  );
}

/**
 *
 * @param definition : Definition in combination
 * @param definitionSyn : Synonym for definition
 * @param phrase : Phrase whose synonym is reversed
 * @param phraseSyn : Reversal phrase
 * @param indicator : Reversal indicators
 *
 * getIndirectReason() generates string for indirect reversals and returns it
 */
function getIndirectReason(
  definition,
  definitionSyn,
  phrase,
  phraseSyn,
  indicator
) {
  return (
    "This clue is a Reversal Clue. The reversal indicator is " +
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
    ". If we reverse " +
    phraseSyn.toUpperCase() +
    " we get " +
    definitionSyn.toUpperCase()
  );
}

module.exports = getReversalSolution;
