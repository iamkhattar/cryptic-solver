const checkAnagram = require("../anagram/check-anagram");
class AnagramCompoundSolution {
  constructor(CompoundSolution, currentCombination, indicator) {
    this.CompoundSolution = CompoundSolution;
    this.firstDefinitions = CompoundSolution.firstDefinitions;
    this.lastDefinitions = CompoundSolution.lastDefinitions;
    this.combination = currentCombination;
    this.indicator = indicator;
  }

  /**
   * generateSolution() generates all possible compound anagram solutions for a given combination
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
   * generateSolutionHelper() generates all compound anagram soltuions for a given definition
   * @param {Array} definitions List of defintions
   * @param {Integer} definitionIndex Index of definition in phrase
   */
  generateSolutionHelper(definitions, defintionIndex) {
    var combination = this.combination.comb;

    //Define start and end phrase according to definitionIndex
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
      definitions.forEach((currentDefinition) => {
        //Check only those phrases for which direct anagrams are possible
        if (checkAnagram(currentDefinition, currentPhrase)) {
          var currentReason = this.combination.reason;
          var reason = this.getDirectReason(
            combination[defintionIndex],
            currentDefinition,
            currentPhrase,
            currentReason
          );
          var currentSolution = {
            solution: currentDefinition.toUpperCase(),
            def: combination[defintionIndex],
            reason: reason,
            int: "compound-clue",
            percentage: 0,
          };
          solutionList.push(currentSolution);
        }
      });
    }
    return solutionList;
  }

  /**
   * getDirectReason() generates reason string for direct anagram clues
   * @param definition : Definition in combination
   * @param definitionSyn : Synonym of definition
   * @param phrase : Anagrammed phrase
   */
  getDirectReason(definition, definitionSyn, phrase, currentReason) {
    return (
      "This clue is an Compound Clue." +
      " The definition is " +
      definition.toUpperCase() +
      ". " +
      definitionSyn.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
      ". " +
      currentReason +
      this.indicator.toUpperCase() +
      " is a anagram indicator. If we anagram " +
      phrase.toUpperCase() +
      " we get " +
      definitionSyn.toUpperCase()
    );
  }
}

module.exports = AnagramCompoundSolution;
