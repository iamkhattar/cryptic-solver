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
      //Check if Current Phrase is hidden in any of the possible first definitions
      var solutions = definitions.map(currentDefinition =>
        isPhraseHidden(currentPhrase, currentDefinition)
          ? {
              solution: currentDefinition.toUpperCase(),
              reason: this.getReason(
                currentCombination[definitionIndex],
                currentDefinition,
                currentPhrase
              ),
              def: currentCombination[definitionIndex],
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
