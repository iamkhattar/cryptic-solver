//General imports
const doesSolutionExist = require("./does-solution-exist");
const generatePossibleDefinitions = require("../definitions/generate-possible-definitions");

//Double Definition related imports
const getDoubleDefinitionSolutions = require("../double-definition/double-definition-solutions");

//Anagram Related imports
const checkIfCombinationHasAnagramIndicator = require("../anagram/check-anagram-indicator");
const getAnagramSolutions = require("../anagram/anagram-solutions");

//Initial Clues Related imports
const checkIfCombinationHasInitialIndicator = require("../initial/check-initial-indicator");
const getInitialSolutions = require("../initial/initial-solutions");

//Reversal Clues Related imports
const checkIfCombinationHasReversalIndicator = require("../reversal/check-reversal-indicator");
const getReversalSolutions = require("../reversal/reversal-solutions");

//Hidden Clues Related imports
const checkIfCombinationHasHiddenIndicator = require("../hidden/check-hidden-indicator");
const getHiddenSolutions = require("../hidden/hidden-solutions");

//Final Clues Related imports
const checkIfCombinationHasFinalIndicator = require("../final/check-final-indicator");
const getFinalSolutions = require("../final/final-solutions");

function generateCurrentSolution(
  currentCombination,
  solutionLength,
  synonymList
) {
  var solutionList = new Array();
  var firstDefinitions = generatePossibleDefinitions(
    currentCombination[0],
    solutionLength,
    synonymList
  );
  var lastDefinitions = generatePossibleDefinitions(
    currentCombination[currentCombination.length - 1],
    solutionLength,
    synonymList
  );

  //Check for Hidden Clues
  var hiddenIndicator = checkIfCombinationHasHiddenIndicator(
    currentCombination
  );
  if (hiddenIndicator != false) {
    var hiddenSolutions = getHiddenSolutions(
      currentCombination,
      firstDefinitions,
      lastDefinitions,
      hiddenIndicator
    );
    hiddenSolutions.forEach(currentHiddenSolutions => {
      if (!doesSolutionExist(solutionList, currentHiddenSolutions)) {
        solutionList.push(currentHiddenSolutions);
      }
    });
  }

  //Check for Reversal Clues
  var reversalIndicator = checkIfCombinationHasReversalIndicator(
    currentCombination
  );
  if (reversalIndicator != false) {
    var reversalSolutions = getReversalSolutions(
      currentCombination,
      synonymList,
      firstDefinitions,
      lastDefinitions,
      reversalIndicator
    );

    reversalSolutions.forEach(currentReversalSolution => {
      if (!doesSolutionExist(solutionList, currentReversalSolution)) {
        solutionList.push(currentReversalSolution);
      }
    });
  }

  //Check for Anagram Clues
  var anagramIndicator = checkIfCombinationHasAnagramIndicator(
    currentCombination
  );
  if (anagramIndicator != false) {
    var anagramSolutions = getAnagramSolutions(
      currentCombination,
      synonymList,
      firstDefinitions,
      lastDefinitions,
      anagramIndicator
    );
    anagramSolutions.forEach(currentAnagramSolution => {
      if (!doesSolutionExist(solutionList, currentAnagramSolution)) {
        solutionList.push(currentAnagramSolution);
      }
    });
  }

  //Check for Initial Letter Clues
  var initialIndicator = checkIfCombinationHasInitialIndicator(
    currentCombination
  );
  if (initialIndicator != false) {
    var initialSolutions = getInitialSolutions(
      currentCombination,
      firstDefinitions,
      lastDefinitions,
      initialIndicator
    );

    initialSolutions.forEach(currentInitialSolution => {
      if (!doesSolutionExist(solutionList, currentInitialSolution)) {
        solutionList.push(currentInitialSolution);
      }
    });
  }

  //Check for Final Letter Clues
  var finalIndicator = checkIfCombinationHasFinalIndicator(currentCombination);
  if (finalIndicator != false) {
    var finalSolutions = getFinalSolutions(
      currentCombination,
      firstDefinitions,
      lastDefinitions,
      finalIndicator
    );
    finalSolutions.forEach(currentFinalSolution => {
      if (!doesSolutionExist(solutionList, currentFinalSolution)) {
        solutionList.push(currentFinalSolution);
      }
    });
  }

  //Check for Double Definition Clues
  if (currentCombination.length == 2) {
    var doubleDefinitionSolutions = getDoubleDefinitionSolutions(
      firstDefinitions,
      lastDefinitions
    );

    doubleDefinitionSolutions.forEach(currentDoubleDefinitionSolution => {
      if (!doesSolutionExist(solutionList, currentDoubleDefinitionSolution)) {
        currentDoubleDefinitionSolution["reason"] =
          "This clue is a Double Definition. The first definition is '" +
          currentCombination[0].toUpperCase() +
          "' and the second definition is '" +
          currentCombination[1].toUpperCase() +
          "'. " +
          currentDoubleDefinitionSolution["solution"] +
          " is a synonym to both definitions";
        solutionList.push(currentDoubleDefinitionSolution);
      }
    });
  }
  return solutionList;
}

module.exports = generateCurrentSolution;
