const getInitialLetters = require("../initial/initial-letters");

function getInitialSolutions(
  currentCombination,
  firstDefinitions,
  lastDefinitions,
  initialIndicator
) {
  var solutionList = new Array();

  //First Definitions
  for (var i = 1; i < currentCombination.length; i++) {
    var currentPhrase = currentCombination[i];
    var initialLetters = getInitialLetters(currentPhrase);
    firstDefinitions.forEach(currentDefinition => {
      if (currentDefinition == initialLetters) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        currentSolution["reason"] =
          "This clue is an Initial Letter Clue. The initial indicator is " +
          initialIndicator.toUpperCase() +
          ". The definition is " +
          currentCombination[0].toUpperCase() +
          ". " +
          currentDefinition.toUpperCase() +
          " is a synonym of " +
          currentCombination[0].toUpperCase() +
          ". Initial letters of " +
          currentPhrase.toUpperCase() +
          " gives " +
          currentDefinition.toUpperCase();
        currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
        solutionList.push(currentSolution);
      }
    });
  }

  //Last Definitions
  for (var i = 0; i < currentCombination.length - 1; i++) {
    var currentPhrase = currentCombination[i];
    var initialLetters = getInitialLetters(currentPhrase);
    lastDefinitions.forEach(currentDefinition => {
      if (currentDefinition == initialLetters) {
        var currentSolution = new Array();
        currentSolution["solution"] = currentDefinition.toUpperCase();
        currentSolution["reason"] =
          "This clue is an Initial Letter Clue. The initial indicator is " +
          initialIndicator.toUpperCase() +
          ". The definition is " +
          currentCombination[currentCombination.length - 1].toUpperCase() +
          ". " +
          currentDefinition.toUpperCase() +
          " is a synonym of " +
          currentCombination[currentCombination.length - 1].toUpperCase() +
          ". Initial letters of " +
          currentPhrase.toUpperCase() +
          " gives " +
          currentDefinition.toUpperCase();
        currentSolution["percentage"] = Math.floor(Math.random() * 100) + 1;
        solutionList.push(currentSolution);
      }
    });
  }

  return solutionList;
}

module.exports = getInitialSolutions;
