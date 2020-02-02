const getAllDeletions = require("./possible-deletions");
const getSynonyms = require("../thesaurus/get-synonyms");
/**
 *
 * @param currentCombination : current combination to be checked
 * @param synonymList : list of synonyms
 * @param firstDefinitions : possible definitions for first phrase
 * @param lastDefinitions : possible definitions for last phrase
 * @param deletionIndicator : Deletion Indicator
 *
 * getDeletionSolutions() generates all possible deletion solutions for a given combination
 */
function getDeletionSolutions(
  currentCombination,
  synonymList,
  firstDefinitions,
  lastDefinitions,
  deletionIndicator
) {
  var solutionList = new Array();
  //First Definitions
  for (var i = 1; i < currentCombination.length; i++) {
    var currentPhrase = currentCombination[i];
    firstDefinitions.forEach(currentDefinition => {
      //Direct Deletion
      var possibleDeletions = getAllDeletions(currentPhrase);
      if (
        possibleDeletions.includes(currentDefinition) &&
        currentPhrase != deletionIndicator
      ) {
        var del = determineWhatDeletionTookPlace(
          currentDefinition,
          possibleDeletions
        );
        var currentSolution = new Array();
        var reason = getDirectReason(
          currentCombination[0],
          currentDefinition,
          currentPhrase,
          del,
          deletionIndicator
        );
        currentSolution["solution"] = currentDefinition.toUpperCase();
        currentSolution["reason"] = reason;
        currentSolution["def"] = currentCombination[0];
        currentSolution["int"] = "deletion-clue";
        currentSolution["percentage"] = 0;
        solutionList.push(currentSolution);
      }
      //Indirect Deletion
      var currentSynonyms = getSynonyms(synonymList, currentPhrase);
      currentSynonyms.forEach(currentSynonym => {
        var possibleDeletions = getAllDeletions(currentSynonym);
        if (
          possibleDeletions.includes(currentDefinition) &&
          currentPhrase != deletionIndicator
        ) {
          var del = determineWhatDeletionTookPlace(
            currentDefinition,
            possibleDeletions
          );
          var currentSolution = new Array();
          currentSolution["solution"] = currentDefinition.toUpperCase();
          var reason = getIndirectReason(
            currentCombination[0],
            currentDefinition,
            currentPhrase,
            currentSynonym,
            del,
            deletionIndicator
          );
          currentSolution["reason"] = reason;
          currentSolution["def"] = currentCombination[0];
          currentSolution["int"] = "deletion-clue";
          currentSolution["percentage"] = 0;
          solutionList.push(currentSolution);
        }
      });
    });
  }

  //Last Definitions
  for (var i = 0; i < currentCombination.length - 1; i++) {
    var currentPhrase = currentCombination[i];
    lastDefinitions.forEach(currentDefinition => {
      //Direct Deletions
      var possibleDeletions = getAllDeletions(currentPhrase);
      if (
        possibleDeletions.includes(currentDefinition) &&
        currentPhrase != deletionIndicator
      ) {
        var del = determineWhatDeletionTookPlace(
          currentDefinition,
          possibleDeletions
        );
        var reason = getDirectReason(
          currentCombination[currentCombination.length - 1],
          currentDefinition,
          currentPhrase,
          del,
          deletionIndicator
        );
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        currentSolution["reason"] = reason;
        currentSolution["def"] =
          currentCombination[currentCombination.length - 1];
        currentSolution["int"] = "deletion-clue";
        currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
        solutionList.push(currentSolution);
      }
      //Indirect Deletion
      var currentSynonyms = getSynonyms(synonymList, currentPhrase);
      currentSynonyms.forEach(currentSynonym => {
        var possibleDeletions = getAllDeletions(currentSynonym);
        if (
          possibleDeletions.includes(currentDefinition) &&
          currentPhrase != deletionIndicator
        ) {
          var del = determineWhatDeletionTookPlace(
            currentDefinition,
            possibleDeletions
          );
          var currentSolution = new Array();
          currentSolution["solution"] = currentDefinition.toUpperCase();
          var reason = getIndirectReason(
            currentCombination[currentCombination.length - 1],
            currentDefinition,
            currentPhrase,
            currentSynonym,
            del,
            deletionIndicator
          );
          currentSolution["reason"] = reason;
          currentSolution["def"] =
            currentCombination[currentCombination.length - 1];
          currentSolution["int"] = "deletion-clue";
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
 * @param definition : Definition in Combination
 * @param definitionSyn : Synonym of Definition
 * @param phrase : Phrase for which deletion has taken place
 * @param deletion : What sort of deletion has taken place
 * @param indicator : The deletion indicator
 *
 * getDirectReason() generates the reason for a direct deletion and returns it
 */
function getDirectReason(
  definition,
  definitionSyn,
  phrase,
  deletion,
  indicator
) {
  return (
    "This clue is a Deletion Clue. The deletion indicator is " +
    indicator.toUpperCase() +
    ". The definition is " +
    definition.toUpperCase() +
    ". " +
    definitionSyn.toUpperCase() +
    " is a synonym of " +
    definition.toUpperCase() +
    ". If we remove the  " +
    deletion +
    " of " +
    phrase.toUpperCase() +
    " we get " +
    definitionSyn.toUpperCase()
  );
}

/**
 *
 * @param definition : Definition in Combination
 * @param definitionSyn : Synonym of Definition
 * @param phrase : Phrase for which deletion has taken place
 * @param phraseSyn : Synonym of phrase for which deletion has taken place
 * @param deletion : What sort of deletion has taken place
 * @param indicator : The deletion indicator
 *
 * getIndirectReason() generates the reason for an indirect deletion and returns it
 */
function getIndirectReason(
  definition,
  definitionSyn,
  phrase,
  phraseSyn,
  deletion,
  indicator
) {
  return (
    "This clue is a Deletion Clue. The deletion indicator is " +
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
    ". If we remove the " +
    deletion +
    " of " +
    phraseSyn.toUpperCase() +
    " we get " +
    definitionSyn.toUpperCase()
  );
}

/**
 *
 * @param currentDefinition : Definition to be searched
 * @param possibleDeletions : all possible deletion
 *
 * determineWhatDeletionTookPlace() returns what sort of deletion took place
 */
function determineWhatDeletionTookPlace(currentDefinition, possibleDeletions) {
  if (currentDefinition == possibleDeletions[0]) {
    return "first letter";
  } else if (currentDefinition == possibleDeletions[1]) {
    return "last letter";
  } else if (currentDefinition == possibleDeletions[2]) {
    return "first and last letters";
  } else if (currentDefinition == possibleDeletions[3]) {
    return "middle letters";
  }
}

module.exports = getDeletionSolutions;
