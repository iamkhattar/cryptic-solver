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

    var firstSolutions = this.generateSolutionsHelper(firstDefinitions, 0);
    var lastSolutions = this.generateSolutionsHelper(
      lastDefinitions,
      currentCombination.length - 1
    );
    solutionList = solutionList.concat(firstSolutions);
    solutionList = solutionList.concat(lastSolutions);

    return solutionList;
  }

  /**
   * generateSolutionsHelper() generates all possible alternate letter solutions for a given combination
   * @param {Array} definitions : List of possible definitions
   * @param {Integer} definitionIndex : Index of phrase which is the definition
   */
  generateSolutionsHelper(definitions, definitionIndex) {
    var start, end;
    var currentCombination = this.CurrentSolution.currentCombination;
    if (definitionIndex == 0) {
      start = 1;
      end = currentCombination.length;
    } else {
      start = 0;
      end = definitionIndex;
    }

    var solutionList = [];
    //Run Loop from appropriate length
    for (var i = start; i < end; i++) {
      var currentPhrase = currentCombination[i];
      var oddLetters = getOddLetters(currentPhrase);
      var evenLetters = getEvenLetters(currentPhrase);

      //If length of Alternate letters is not equal to query length discard it.
      if (
        oddLetters.length == this.query.length ||
        evenLetters.length == this.query.length
      ) {
        //Generate all possible Alternate Letter Solutions when appropriate phrase is definition
        var solutions = definitions.map(currentDefinition =>
          currentDefinition == oddLetters || currentDefinition == evenLetters
            ? {
                solution: currentDefinition.toUpperCase(),
                reason: this.getReason(
                  currentCombination[definitionIndex],
                  currentDefinition,
                  currentPhrase
                ),
                def: currentCombination[definitionIndex],
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
