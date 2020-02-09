class DoubleDefinitionSolution {
  constructor(CurrentSolution) {
    this.CurrentSolution = CurrentSolution;
  }

  //generateSolution() generates all possible double definition solutions for a given combination
  generateSolution() {
    var solutionList = [];
    const firstDefinitions = this.CurrentSolution.firstDefinitions;
    const lastDefinitions = this.CurrentSolution.lastDefinitions;
    const currentCombination = this.CurrentSolution.currentCombination;

    //If a word is the synonym of both the first and last phrase, it is a double definition
    firstDefinitions.forEach(currentDefinition => {
      if (lastDefinitions.includes(currentDefinition)) {
        solutionList.push({
          solution: currentDefinition.toUpperCase(),
          percentage: 0,
          def: currentCombination[0],
          int: "double-definition-clue",
          reason: this.getReason(
            currentCombination[0],
            currentCombination[1],
            currentDefinition
          )
        });
      }
    });

    return solutionList;
  }

  /**
   * getReason() generates the reason string for Double Definition Solutions
   * @param {String} firstDefinition The first definition in the combination
   * @param {String} secondDefinition The second definition in the combination
   * @param {String} solution The solution
   */
  getReason(firstDefinition, secondDefinition, solution) {
    return (
      "This clue is a Double Definition. The first definition is '" +
      firstDefinition.toUpperCase() +
      "' and the second definition is '" +
      secondDefinition.toUpperCase() +
      "'. " +
      solution.toUpperCase() +
      " is a synonym to both definitions"
    );
  }
}

module.exports = DoubleDefinitionSolution;
