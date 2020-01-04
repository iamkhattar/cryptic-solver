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
  }
  return solutionList;
}

module.exports = getDeletionSolutions;
