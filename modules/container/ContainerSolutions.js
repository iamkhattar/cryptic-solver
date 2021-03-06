const getContainers = require("./get-containers");
const getSynonyms = require("../thesaurus/get-synonyms");

class ContainerSolutions {
  constructor(CurrentSolution, containerIndicator) {
    this.CurrentSolution = CurrentSolution;
    this.containerIndicator = containerIndicator;
    this.query = CurrentSolution.query;
  }

  //Generate Container Solutions for a given combination
  generateSolutions() {
    var solutionList = [];

    const currentCombination = this.CurrentSolution.currentCombination;
    const firstDefinitions = this.CurrentSolution.firstDefinitions;
    const lastDefinitions = this.CurrentSolution.lastDefinitions;

    var index = currentCombination.indexOf(this.containerIndicator);
    var length = currentCombination.length;

    //Check Index Out of Bounds
    if (index != 0 && index != length - 1) {
      var firstSolutions = this.generateSolutionHelper(
        firstDefinitions,
        0,
        index
      );

      var lastSolutions = this.generateSolutionHelper(
        lastDefinitions,
        currentCombination.length - 1,
        index
      );

      solutionList = solutionList.concat(firstSolutions);
      solutionList = solutionList.concat(lastSolutions);
    }

    return solutionList;
  }

  /**
   * generateSoltutionHelper() generates all possible Container Solutions for a given definition and indicator
   * @param {Array} definitions List of defintions
   * @param {Integer} definitionIndex Index of definition in phrase
   * @param {Indicator} indicatorIndex Index of Indicator
   */
  generateSolutionHelper(definitions, definitionIndex, indicatorIndex) {
    var currentCombination = this.CurrentSolution.currentCombination;
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
          solutionList.push({
            solution: currentDefinition.toUpperCase(),
            reason: this.getDirectReason(
              currentCombination[definitionIndex],
              currentDefinition,
              word1,
              word2
            ),
            percentage: 0,
            def: currentCombination[definitionIndex],
            int: "container-clue",
          });
        }

        //Check for word1 + syn(word2) or syn(word1)+syn(word2)
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
            solutionList.push({
              solution: currentDefinition.toUpperCase(),
              reason: this.getFirstSynReason(
                currentCombination[definitionIndex],
                currentDefinition,
                word1,
                currentFirstWordSynonym,
                word2
              ),
              percentage: 0,
              def: currentCombination[definitionIndex],
              int: "container-clue",
            });
          }

          //Check for syn(word1) + syn(word2)
          secondWordSynonyms.forEach((currentSecondWordSynonym) => {
            var firstWordLength = currentFirstWordSynonym.length;
            //Check if container length would be valid else discard it
            if (
              this.query.length - firstWordLength ==
              currentSecondWordSynonym.length
            ) {
              var bothContainers = getContainers(
                currentFirstWordSynonym,
                currentSecondWordSynonym
              );

              //If container list includes the current definition it is one of the solutions
              if (bothContainers.includes(currentDefinition)) {
                solutionList.push({
                  solution: currentDefinition.toUpperCase(),
                  reason: this.getBothSynReason(
                    currentCombination[definitionIndex],
                    currentDefinition,
                    word1,
                    currentFirstWordSynonym,
                    word2,
                    currentSecondWordSynonym
                  ),
                  percentage: 0,
                  def: currentCombination[definitionIndex],
                  int: "container-clue",
                });
              }
            }
          });
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
            solutionList.push({
              solution: currentDefinition.toUpperCase(),
              reason: this.getSecondSynReason(
                currentCombination[definitionIndex],
                currentDefinition,
                word1,
                word2,
                currentSecondWordSynonym
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
   */
  getDirectReason(definition, definitionSyn, firstWord, secondWord) {
    return (
      "This clue is a Container Clue. The container indicator is " +
      this.containerIndicator.toUpperCase() +
      ". The definition is " +
      definition.toUpperCase() +
      ". " +
      definitionSyn.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
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
   */
  getFirstSynReason(
    definiton,
    definitionSyn,
    firstWord,
    firstWordSyn,
    secondWord
  ) {
    return (
      "This clue is a Container Clue. The container indicator is " +
      this.containerIndicator.toUpperCase() +
      ". The definition is " +
      definiton.toUpperCase() +
      ". " +
      definitionSyn.toUpperCase() +
      " is a synonym of " +
      definiton.toUpperCase() +
      ". " +
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
   */
  getSecondSynReason(
    definition,
    definitionSyn,
    firstWord,
    secondWord,
    secondWordSyn
  ) {
    return (
      "This clue is a Container Clue. The container indicator is " +
      this.containerIndicator.toUpperCase() +
      ". The definition is " +
      definition.toUpperCase() +
      ". " +
      definitionSyn.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
      ". " +
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

  /**
   * getBothSynReason() generates the reason when there is a container with synonyms of both words
   * @param definition : Definition in combination
   * @param definitionSyn : Synonym of Definition
   * @param firstWord : First Word
   * @param firstWordSyn : Synonym of First Word
   * @param secondWord : Second word
   * @param secondWordSyn : Synonym of Second Word
   */
  getBothSynReason(
    definition,
    definitionSyn,
    firstWord,
    firstWordSyn,
    secondWord,
    secondWordSyn
  ) {
    return (
      "This clue is a Container Clue. The container indicator is " +
      this.containerIndicator.toUpperCase() +
      ". The definition is " +
      definition.toUpperCase() +
      ". " +
      definitionSyn.toUpperCase() +
      " is a synonym of " +
      definition.toUpperCase() +
      ". " +
      firstWordSyn.toUpperCase() +
      " is a synonym of " +
      firstWord.toUpperCase() +
      ". " +
      secondWordSyn.toUpperCase() +
      " is a synonym of " +
      secondWord.toUpperCase() +
      ". If we put " +
      firstWordSyn.toUpperCase() +
      " in " +
      secondWordSyn.toUpperCase() +
      " we get " +
      definitionSyn.toUpperCase()
    );
  }
}

module.exports = ContainerSolutions;
