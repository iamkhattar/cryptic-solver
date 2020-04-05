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

    //Generate Solution when First Phrase is Definition
    var firstSolutions = this.generateSolutionHelper(firstDefinitions, 0);

    //Generate Solution when Last Phrase is Definition
    var lastSolutions = this.generateSolutionHelper(
      lastDefinitions,
      currentCombination.length - 1
    );

    solutionList = solutionList.concat(firstSolutions);
    solutionList = solutionList.concat(lastSolutions);

    return solutionList;
  }

  /**
   * generateSolutionHelper() generates all initial letter solutions for a given definition
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
      var initialLetters = getInitialLetters(currentPhrase);
      //If length of Initial letters is not equal to query length discard it.
      if (initialLetters.length == this.query.length) {
        //Generate all possible Initial Letter Solutions when first phrase is definition
        var solutions = definitions.map((currentDefinition) =>
          currentDefinition == initialLetters
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getReason(
                  currentCombination[definitionIndex],
                  currentDefinition,
                  currentPhrase
                ),
                def: currentCombination[definitionIndex],
                int: "initial-clue",
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
