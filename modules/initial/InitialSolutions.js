const getInitialLetters = require("./initial-letters");

class InitialSolutions {
  constructor(CurrentSolution, initialIndicator) {
    this.CurrentSolution = CurrentSolution;
    this.initialIndicator = initialIndicator;
    this.query = CurrentSolution.query;
  }

  //generateSolution() generates all possible Initial letter Solutions for a given combination
  generateSolution() {
    var solutionList = [];

    const currentCombination = this.CurrentSolution.currentCombination;
    const firstDefinitions = this.CurrentSolution.firstDefinitions;
    const lastDefinitions = this.CurrentSolution.lastDefinitions;

    var firstSolutions = this.getFirstSolutions(
      currentCombination,
      firstDefinitions
    );

    var lastSolutions = this.getLastSolutions(
      currentCombination,
      lastDefinitions
    );

    solutionList = solutionList.concat(firstSolutions);
    solutionList = solutionList.concat(lastSolutions);

    return solutionList;
  }

  /**
   * getFirstSolutions() generates all possible solutions when the first phrase is the definition
   * @param {Array} currentCombination : Combination to be checked
   * @param {Array} firstDefinitions : Array of definitions for first phrase
   */
  getFirstSolutions(currentCombination, firstDefinitions) {
    var solutionList = [];
    //Run Loop From Second Phrase to Last Phrase
    for (var i = 1; i < currentCombination.length; i++) {
      var currentPhrase = currentCombination[i];
      var initialLetters = getInitialLetters(currentPhrase);
      //If length of Initial letters is not equal to query length discard it.
      if (initialLetters.length == this.query.length) {
        //Generate all possible Initial Letter Solutions when first phrase is definition
        var solutions = firstDefinitions.map(currentDefinition =>
          currentDefinition == initialLetters
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getReason(
                  currentCombination[0],
                  currentDefinition,
                  currentPhrase
                ),
                def: currentCombination[0],
                int: "initial-clue",
                percentage: 0
              }
            : ""
        );

        //Add Solutions to Final List
        solutions = solutions.filter(element => element != "");
        solutionList = solutionList.concat(solutions);
      }
    }
    return solutionList;
  }

  /**
   * getLastSolutions() generates all possible solutions when the last phrase is the definition
   * @param {Array} currentCombination : Current Combination to be checked
   * @param {Array} lastDefinitions : Array of definitions for last phrase
   */
  getLastSolutions(currentCombination, lastDefinitions) {
    var solutionList = [];
    //Run Loop From First Phrase to Second Last Phrase
    for (var i = 0; i < currentCombination.length - 1; i++) {
      var currentPhrase = currentCombination[i];
      var initialLetters = getInitialLetters(currentPhrase);
      //If length of Initial letters is not equal to query length discard it.
      if (initialLetters.length == this.query.length) {
        //Generate all possible Initial Letter Solutions when first phrase is definition
        var solutions = lastDefinitions.map(currentDefinition =>
          currentDefinition == initialLetters
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getReason(
                  currentCombination[currentCombination.length - 1],
                  currentDefinition,
                  currentPhrase
                ),
                def: currentCombination[currentCombination.length - 1],
                int: "initial-clue",
                percentage: 0
              }
            : ""
        );

        //Add Solutions to Final List
        solutions = solutions.filter(element => element != "");
        solutionList = solutionList.concat(solutions);
      }
    }
    return solutionList;
  }

  /**
   * getReason() generates the reason string for initial letter clues
   * @param {*} definition : Definition in Combination
   * @param {*} definitionSyn : Synonym of definiton
   * @param {*} phrase : Phrase for which initial letters were taken
   */
  getReason(definition, definitionSyn, phrase) {
    return (
      "This clue is an Initial Letter Clue. The initial indicator is " +
      this.initialIndicator.toUpperCase() +
      ". The definition is " +
      definition.toUpperCase() +
      ". " +
      definitionSyn.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
      ". Initial letters of " +
      phrase.toUpperCase() +
      " gives " +
      definitionSyn.toUpperCase()
    );
  }
}

module.exports = InitialSolutions;
