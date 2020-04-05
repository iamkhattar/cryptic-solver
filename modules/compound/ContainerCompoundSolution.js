const getSynonyms = require("../thesaurus/get-synonyms");
const getContainers = require("../container/get-containers");
class ContainerCompoundSolution {
  constructor(CompoundSolution, currentCombination, indicator) {
    this.CompoundSolution = CompoundSolution;
    this.firstDefinitions = CompoundSolution.firstDefinitions;
    this.lastDefinitions = CompoundSolution.lastDefinitions;
    this.combination = currentCombination;
    this.indicator = indicator;
    this.query = CompoundSolution.query;
  }

  /**
   * generateSolution() generates all Compound Container Solutions for a given combination
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
   * generateSolutionHelper() generates all Compound Container Solution for a given definition
   * @param {Array} definitions List of defintions
   * @param {Integer} definitionIndex Index of definition in phrase
   */
  generateSolutionHelper(definitions, definitionIndex) {
    var currentCombination = this.combination.comb;
    var indicatorIndex = currentCombination.indexOf(this.indicator);
    var indexCheck;
    if (definitionIndex == 0) {
      indexCheck = 1;
    } else {
      indexCheck = currentCombination.length - 2;
    }

    var solutionList = [];

    //Check for first phrase
    if (indicatorIndex != indexCheck) {
      //Generate all Direct Containers
      var word1 = currentCombination[indicatorIndex - 1];
      var word2 = currentCombination[indicatorIndex + 1];

      if (word1 == undefined || word2 == undefined) return solutionList;
      //Get Synonyms of both words
      var firstWordSynonyms = getSynonyms(this.query, word1);
      var secondWordSynonyms = getSynonyms(this.query, word2);

      //Generate Direct Containers
      var directContainers = getContainers(word1, word2);

      //Remove Containers that dont need to be checked
      directContainers = directContainers.filter(
        (element) => element.length == this.query.length
      );

      //Iterate through list of first definition
      definitions.forEach((currentDefinition) => {
        //Check if any definition is a direct container
        if (directContainers.includes(currentDefinition)) {
          var currentReason = this.combination.reason;

          solutionList.push({
            solution: currentDefinition.toUpperCase(),
            reason: this.getDirectReason(
              currentCombination[definitionIndex],
              currentDefinition,
              word1,
              word2,
              currentReason
            ),
            percentage: 0,
            def: currentCombination[definitionIndex],
            int: "container-clue",
          });
        }

        //Check for syn(word1) + word2
        firstWordSynonyms.forEach((currentFirstWordSynonym) => {
          //Generate Containers for synonym of first word and second word
          var firstWordContainers = getContainers(
            currentFirstWordSynonym,
            word2
          );

          //Remove containers that can be discarded
          firstWordContainers = firstWordContainers.filter(
            (element) => element.length == this.query.length
          );

          //Check if Definition is in the container array
          if (firstWordContainers.includes(currentDefinition)) {
            var currentReason = this.combination.reason;
            solutionList.push({
              solution: currentDefinition.toUpperCase(),
              reason: this.getFirstSynReason(
                currentCombination[definitionIndex],
                currentDefinition,
                word1,
                currentFirstWordSynonym,
                word2,
                currentReason
              ),
              percentage: 0,
              def: currentCombination[definitionIndex],
              int: "container-clue",
            });
          }
        });

        //Check for word1 + syn(word2)
        secondWordSynonyms.forEach((currentSecondWordSynonym) => {
          //Generate Containers
          var secondWordContainers = getContainers(
            word1,
            currentSecondWordSynonym
          );
          //Remove Containers that can be disregarded
          secondWordContainers = secondWordContainers.filter(
            (element) => element.length == this.query.length
          );
          //Check if any one of the containers is the solution
          if (secondWordContainers.includes(currentDefinition)) {
            var currentReason = this.combination.reason;
            solutionList.push({
              solution: currentDefinition.toUpperCase(),
              reason: this.getSecondSynReason(
                currentCombination[definitionIndex],
                currentDefinition,
                word1,
                word2,
                currentSecondWordSynonym,
                currentReason
              ),
              percentage: 0,
              def: currentCombination[definitionIndex],
              int: "container-clue",
            });
          }
        });
      });
    }

    return solutionList;
  }

  /**
   * getDirectReason() generates the reason if there is a direct container
   * @param definition : Definition in combination
   * @param definitionSyn : Synonym of Definition
   * @param firstWord : First Word
   * @param secondWord : Second word
   * @param currentReason : CurrentReason
   */
  getDirectReason(
    definition,
    definitionSyn,
    firstWord,
    secondWord,
    currentReason
  ) {
    return (
      "This clue is a Compound Clue. The definition is " +
      definition.toUpperCase() +
      ". " +
      definitionSyn.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
      ". " +
      currentReason +
      " The container indicator is " +
      this.indicator.toUpperCase() +
      ". If we put " +
      firstWord.toUpperCase() +
      " in " +
      secondWord.toUpperCase() +
      " we get " +
      definitionSyn.toUpperCase()
    );
  }

  /**
   * getFirstSynReason() generates the reason if there is a container with synonym of first word
   * @param definition : Definition in combination
   * @param definitionSyn : Synonym of Definition
   * @param firstWord : First Word
   * @param firstWordSyn : Synonym of First word
   * @param secondWord : Second word
   * @param currentReason : CurrentReason
   */
  getFirstSynReason(
    definition,
    definitionSyn,
    firstWord,
    firstWordSyn,
    secondWord,
    currentReason
  ) {
    return (
      "This clue is a Compound Clue. The definition is " +
      definition.toUpperCase() +
      ". " +
      definitionSyn.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
      ". " +
      currentReason +
      " The container indicator is" +
      this.indicator.toUpperCase() +
      " " +
      firstWordSyn.toUpperCase() +
      " is a synonym of " +
      firstWord.toUpperCase() +
      ". If we put " +
      firstWordSyn.toUpperCase() +
      " in " +
      secondWord.toUpperCase() +
      " we get " +
      definitionSyn.toUpperCase()
    );
  }

  /**
   * getSecondSynReason() generates the reason if there is a container with synonym of second word
   * @param definition : Definition in combination
   * @param definitionSyn : Synonym of Definition
   * @param firstWord : First Word
   * @param secondWord : Second word
   * @param secondWordSyn : Synonym of Second Word
   * @param currentReason : CurrentReason
   */
  getSecondSynReason(
    definition,
    definitionSyn,
    firstWord,
    secondWord,
    secondWordSyn,
    currentReason
  ) {
    return (
      "This clue is a Compound Clue. The definition is " +
      definition.toUpperCase() +
      ". " +
      definitionSyn.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
      ". " +
      currentReason +
      " The container indicator is" +
      this.indicator.toUpperCase() +
      " " +
      secondWordSyn.toUpperCase() +
      " is a synonym of " +
      secondWord.toUpperCase() +
      ". If we put " +
      firstWord.toUpperCase() +
      " in " +
      secondWordSyn.toUpperCase() +
      " we get " +
      definitionSyn.toUpperCase()
    );
  }
}

module.exports = ContainerCompoundSolution;
