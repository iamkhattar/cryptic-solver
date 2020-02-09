const isPhraseHidden = require("./is-phrase-hidden");

class HiddenSolutions {
  constructor(CurrentSolution, hiddenIndicator) {
    this.CurrentSolution = CurrentSolution;
    this.hiddenIndicator = hiddenIndicator;
  }

  //Generate All Possible Hidden Word Solutions
  generateSolution() {
    var solutionList = new Array();

    const currentCombination = this.CurrentSolution.currentCombination;
    const firstDefinitions = this.CurrentSolution.firstDefinitions;
    const lastDefinitions = this.CurrentSolution.lastDefinitions;

    //Generate Solution when First Phrase is Definition
    var firstSolutions = this.getFirstSolutions(
      currentCombination,
      firstDefinitions
    );

    //Generate Solution when Last Phrase is Definition
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
      //Check if Current Phrase is hidden in any of the possible first definitions
      var solutions = firstDefinitions.map(currentDefinition =>
        isPhraseHidden(currentPhrase, currentDefinition)
          ? {
              solution: currentDefinition.toUpperCase(),
              reason: this.getReason(
                currentCombination[0],
                currentDefinition,
                currentPhrase
              ),
              def: currentCombination[0],
              int: "hidden-clue",
              percentage: 0
            }
          : ""
      );

      //Add Solutions to Final List
      solutions = solutions.filter(element => element != "");
      solutionList = solutionList.concat(solutions);
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
      //Check if Current Phrase is hidden in any of the possible last word definitions
      var solutions = lastDefinitions.map(currentDefinition =>
        isPhraseHidden(currentPhrase, currentDefinition)
          ? {
              solution: currentDefinition.toUpperCase(),
              reason: this.getReason(
                currentCombination[currentCombination.length - 1],
                currentDefinition,
                currentPhrase
              ),
              def: currentCombination[currentCombination.length - 1],
              int: "hidden-clue",
              percentage: 0
            }
          : ""
      );

      //Add Solutions to Final List
      solutions = solutions.filter(element => element != "");
      solutionList = solutionList.concat(solutions);
    }
    return solutionList;
  }

  /**
   * getReason() generates the reason for the clue and returns it
   * @param {String} definition : Definition in Combination
   * @param {String} definitionSyn : Synonym of definition
   * @param {String} phrase : Phrase in which definition is hidden
   */

  getReason(definition, definitionSyn, phrase) {
    return (
      "This clue is a Hidden Clue. The hidden indicator is " +
      this.hiddenIndicator.toUpperCase() +
      ". The definition is " +
      definition.toUpperCase() +
      ". " +
      definitionSyn.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
      ". " +
      definitionSyn.toUpperCase() +
      " is hidden in " +
      phrase.toUpperCase()
    );
  }
}

module.exports = HiddenSolutions;
