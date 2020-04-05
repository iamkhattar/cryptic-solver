const isPhraseHidden = require("../hidden/is-phrase-hidden");

class HiddenCompoundSolution {
  constructor(CompoundSolution, currentCombination, indicator) {
    this.CompoundSolution = CompoundSolution;
    this.firstDefinitions = CompoundSolution.firstDefinitions;
    this.lastDefinitions = CompoundSolution.lastDefinitions;
    this.combination = currentCombination;
    this.indicator = indicator;
  }

  /**
   * generateSolution() generates all Compound Hidden Word Solutions for a given combination
   */
  generateSolution() {
    var solutionList = [];

    var firstSolutions = this.generateSolutionHelper(this.firstDefinitions, 0);
    var lastSolutions = this.generateSolutionHelper(
      this.lastDefinitions,
      this.combination.comb.length - 1
    );

    solutionList = solutionList.concat(firstSolutions);
    solutionList = solutionList.concat(lastSolutions);

    return solutionList;
  }

  /**
   * generateSolutionHelper() generates all Compound Hidden Word Solutionws for a given definition
   * @param {Array} definitions List of defintions
   * @param {Integer} definitionIndex Index of definition in phrase
   */
  generateSolutionHelper(definitons, defintionIndex) {
    var combination = this.combination.comb;
    //Define Start and End Phrase according to definitionIndex
    var start, end;
    if (defintionIndex == 0) {
      start = 1;
      end = combination.length;
    } else {
      start = 0;
      end = combination.length - 1;
      defintionIndex = defintionIndex;
    }

    var solutionList = [];
    //Run Loop From Start Phrase to End Phrase
    for (var i = start; i < end; i++) {
      var currentPhrase = combination[i];
      var solutions = definitons.map((currentDefinition) =>
        //Check only those phrases for which direct hidden words are possible
        isPhraseHidden(currentPhrase, currentDefinition)
          ? {
              solution: currentDefinition.toUpperCase(),
              def: combination[defintionIndex],
              reason: this.getReason(
                combination[defintionIndex],
                currentDefinition,
                currentPhrase
              ),
              int: "compound-clue",
              percentage: 0,
            }
          : ""
      );

      //Add Solutions to Final List
      solutions = solutions.filter((element) => element != "");
      solutions = solutions.filter((element) => element != undefined);
      solutionList = solutionList.concat(solutions);
    }
    return solutionList;
  }

  getReason(definition, solution, phrase) {
    return (
      "This is a Compound Clue. The definition is " +
      definition.toUpperCase() +
      ". " +
      solution.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
      ". " +
      this.combination.reason +
      this.indicator.toUpperCase() +
      " indicates that the solution is hidden. " +
      solution.toUpperCase() +
      " is hidden in " +
      phrase.replace(solution, solution.toUpperCase()) +
      "."
    );
  }
}

module.exports = HiddenCompoundSolution;
