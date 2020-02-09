const getFinalLetters = require("./final-letters");
class FinalSolution {
  constructor(CurrentSolution, finalIndicator) {
    this.CurrentSolution = CurrentSolution;
    this.finalIndicator = finalIndicator;
    this.query = CurrentSolution.query;
  }

  //generateSolution() generates all possible Final letter solutions for a given combination.
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
      var finalLetters = getFinalLetters(currentPhrase);
      //If length of Final letters is not equal to query length discard it.
      if (finalLetters.length == this.query.length) {
        //Generate all possible Final Letter Solutions when first phrase is definition
        var solutions = firstDefinitions.map(currentDefinition =>
          currentDefinition == finalLetters
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getReason(
                  currentCombination[0],
                  currentDefinition,
                  currentPhrase
                ),
                def: currentCombination[0],
                int: "final-clue",
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
      var finalLetters = getFinalLetters(currentPhrase);
      //If length of Final letters is not equal to query length discard it.
      if (finalLetters.length == this.query.length) {
        //Generate all possible Final Letter Solutions when last phrase is definition
        var solutions = lastDefinitions.map(currentDefinition =>
          currentDefinition == finalLetters
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getReason(
                  currentCombination[currentCombination.length - 1],
                  currentDefinition,
                  currentPhrase
                ),
                def: currentCombination[currentCombination.length - 1],
                int: "final-clue",
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
   * getReason() generates the reason string and returns it
   * @param definition : Definition in combination
   * @param definitionSyn : Synonym of definition
   * @param phrase : Phrase for which last letters have to be taken
   */
  getReason(definition, definitionSyn, phrase) {
    return (
      "This clue is an Final Letter Clue. The Final Letter indicator is " +
      this.finalIndicator.toUpperCase() +
      ". The definition is " +
      definition.toUpperCase() +
      ". " +
      definitionSyn.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
      ". Final letters of " +
      phrase.toUpperCase() +
      " gives " +
      definitionSyn.toUpperCase()
    );
  }
}

module.exports = FinalSolution;
