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
        currentSolution["solution"] = currentDefinition.toUpperCase();
        currentSolution["reason"] =
          "This clue is a Deletion Clue. The deletion indicator is " +
          deletionIndicator.toUpperCase() +
          ". The definition is " +
          currentCombination[0].toUpperCase() +
          ". " +
          currentDefinition.toUpperCase() +
          " is a synonym of " +
          currentCombination[0].toUpperCase() +
          ". If we remove the  " +
          del +
          " of " +
          currentPhrase.toUpperCase() +
          " we get " +
          currentDefinition.toUpperCase();
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
          currentSolution["reason"] =
            "This clue is a Deletion Clue. The deletion indicator is " +
            deletionIndicator.toUpperCase() +
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
            ". If we remove the " +
            del +
            " of " +
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
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        currentSolution["reason"] =
          "This clue is a Deletion Clue. The deletion indicator is " +
          deletionIndicator.toUpperCase() +
          ". The definition is " +
          currentCombination[currentCombination.length - 1].toUpperCase() +
          ". " +
          currentDefinition.toUpperCase() +
          " is a synonym of " +
          currentCombination[currentCombination.length - 1].toUpperCase() +
          ". If we remove the  " +
          del +
          " of " +
          currentPhrase.toUpperCase() +
          " we get " +
          currentDefinition.toUpperCase();
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
          currentSolution["reason"] =
            "This clue is a Deletion Clue. The deletion indicator is " +
            deletionIndicator.toUpperCase() +
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
            ". If we remove the " +
            del +
            " of " +
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
