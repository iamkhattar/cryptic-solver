const getDoubleDefinitionSolutions = require("../double-definition/double-definition-solutions");
const doesSolutionExist = require("./does-solution-exist");
const checkIfCombinationHasAnagramIndicator = require("../anagram/check-anagram-indicator");
const generatePossibleDefinitions = require("../definitions/generate-possible-definitions");

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
    currentCombination[1],
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
  var anagramPhrase = checkIfCombinationHasAnagramIndicator(currentCombination);
  if (anagramPhrase != false) {
    console.log(anagramPhrase);
  }

  return solutionList;
}

module.exports = generateCurrentSolution;
