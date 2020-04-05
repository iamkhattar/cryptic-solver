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

    var firstSolutions = this.generateSolutionHelper(firstDefinitions, 0);

    var lastSolutions = this.generateSolutionHelper(
      lastDefinitions,
      currentCombination.length - 1
    );

    solutionList = solutionList.concat(firstSolutions);
    solutionList = solutionList.concat(lastSolutions);

    return solutionList;
  }

  /**
   * generateSolutionHelper() generates all final letter solutions for a given definition
   * @param {Array} definitions List of defintions
   * @param {Integer} definitionIndex Index of definition in phrase
   */
  generateSolutionHelper(definitions, definitionIndex) {
    var currentCombination = this.CurrentSolution.currentCombination;
    var start, end;
    if (definitionIndex == 0) {
      start = 1;
      end = currentCombination.length;
    } else {
      start = 0;
      end = definitionIndex;
    }

    var solutionList = [];
    //Run Loop From Second Phrase to Last Phrase
    for (var i = start; i < end; i++) {
      var currentPhrase = currentCombination[i];
      var finalLetters = getFinalLetters(currentPhrase);
      //If length of Final letters is not equal to query length discard it.
      if (finalLetters.length == this.query.length) {
        //Generate all possible Final Letter Solutions when first phrase is definition
        var solutions = definitions.map((currentDefinition) =>
          currentDefinition == finalLetters
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getReason(
                  currentCombination[definitionIndex],
                  currentDefinition,
                  currentPhrase
                ),
                def: currentCombination[definitionIndex],
                int: "final-clue",
                percentage: 0,
              }
            : ""
        );
        //Add Solutions to Final List
        solutions = solutions.filter((element) => element != "");
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
