const getOddLetters = require("./odd-letters");
const getEvenLetters = require("./even-letters");

class AlternateSolutions {
  constructor(CurrentSolution) {
    this.CurrentSolution = CurrentSolution;
    this.query = CurrentSolution.query;
  }

  //generateSolutions() generates all possible solutions alternate letter solutions for a given combination
  generateSolutions() {
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
      var oddLetters = getOddLetters(currentPhrase);
      var evenLetters = getEvenLetters(currentPhrase);

      //If length of Alternate letters is not equal to query length discard it.
      if (
        oddLetters.length == this.query.length ||
        evenLetters.length == this.query.length
      ) {
        //Generate all possible Alternate Letter Solutions when first phrase is definition
        var solutions = firstDefinitions.map(currentDefinition =>
          currentDefinition == oddLetters || currentDefinition == evenLetters
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getReason(
                  currentCombination[0],
                  currentDefinition,
                  currentPhrase
                ),
                def: currentCombination[0],
                int: "alternate-clue",
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
      var oddLetters = getOddLetters(currentPhrase);
      var evenLetters = getEvenLetters(currentPhrase);

      //If length of Alternate letters is not equal to query length discard it.
      if (
        oddLetters.length == this.query.length ||
        evenLetters.length == this.query.length
      ) {
        //Generate all possible Alternate Letter Solutions when first phrase is definition
        var solutions = lastDefinitions.map(currentDefinition =>
          currentDefinition == oddLetters || currentDefinition == evenLetters
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getReason(
                  currentCombination[currentCombination.length - 1],
                  currentDefinition,
                  currentPhrase
                ),
                def: currentCombination[currentCombination.length - 1],
                int: "alternate-clue",
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
   * getReason() generates reason string for alternate letter clues
   * @param definition : Definition in clue
   * @param definitionSyn : Synonym of definition
   * @param phrase : Phrase for which alternate letters have to be generated
   *
   */
  getReason(definition, definitionSyn, phrase) {
    return (
      "This clue is an Alternate Letter Clue. The definition is " +
      definition.toUpperCase() +
      ". " +
      definitionSyn.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
      ". Alternate letters of " +
      phrase.toUpperCase() +
      " gives " +
      definitionSyn.toUpperCase()
    );
  }
}

module.exports = AlternateSolutions;