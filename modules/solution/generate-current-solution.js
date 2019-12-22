const getDoubleDefinitionSolutions = require("../double-definition/double-definition-solutions");
const doesSolutionExist = require("./does-solution-exist");
const checkIfCombinationHasAnagramIndicator = require("../anagram/check-anagram-indicator");
const generatePossibleDefinitions = require("../definitions/generate-possible-definitions");
const getAnagramSolutions = require("../anagram/anagram-solutions");

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

  //Check for Double Definition
  if (currentCombination.length == 2) {
    var doubleDefinitionSolutions = getDoubleDefinitionSolutions(
      firstDefinitions,
      lastDefinitions
    );

    doubleDefinitionSolutions.forEach(currentDoubleDefinitionSolution => {
      if (!doesSolutionExist(solutionList, currentDoubleDefinitionSolution)) {
        solutionList.push(currentDoubleDefinitionSolution);
      }
    });
  }

  //Check for Anagrams
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

  return solutionList;
}

module.exports = generateCurrentSolution;
